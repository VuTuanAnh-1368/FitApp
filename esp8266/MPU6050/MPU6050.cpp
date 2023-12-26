#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <math.h>
#include "MPU6050.h"

Adafruit_MPU6050 mpu;

double y[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
long long int lastPeakSample = 0;
long timer = 0;
long sleep_timer_start, sleep_timer_end, sleep_timer_end2;
double gx, gy, gz;
int activate, interrupt, stage_sleep_time, interrupt_sleep_timer = 0;
int interrupt_for_deep_sleep, total_sleep, total_deep_sleep = 0;
int total_light_sleep, deep_sleep, light_sleep, interrupt_timer = 0;

void mpu6050Setup(){
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip, please check");
    while (1) {
      delay(10);
    }
  }
  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  mpu.setFilterBandwidth(MPU6050_BAND_5_HZ);
  delay(100);
}
//Phase 1: Recording n preprocessing
double mpu6050Measure(){
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);
  /* Print out the values */
  double ax = a.acceleration.x;
  double ay = a.acceleration.y;
  double az = a.acceleration.z;
  
  double a_msq = sqrt(ax*ax+ay*ay+az*az)/9.81;
  for (int i=15; i>0; i--){
    y[i] = y[i-1];
  }
  y[0] = a_msq;
  return a_msq;
}
//Phase 2
bool peakDetection(int state_range, int state_window, double state_threshold){
  for (int i = 1; i < state_range; i++){
    if (y[0] <= y[i]){
      return false;
    }
  }
  if (lastPeakSample>state_range && !falsePeakDetection(state_window) && !vibration(state_threshold)){
    lastPeakSample = 0;
    return true;
  }
  lastPeakSample++;
  return false;
}
bool falsePeakDetection(int state_window){
  double minimal_peak = y[0];
  double maximal_peak = y[0];
  for (int i = 0; i<state_window; i++){
    if (y[i] > maximal_peak)
      maximal_peak = y[i];
    else if (y[i]<minimal_peak)
      minimal_peak = y[i];
  }
  double average_thd = (maximal_peak + minimal_peak)/2;
  if (y[0] - average_thd > 0.05)
    return false;
  return true;
}
bool vibration(double state_threshold){
  if(y[0]-1<state_threshold)
    return true;
  return false;
}
bool stepCountAlgorithm(){
  walking_state state;
  int state_window, state_range;
  double state_threshold;
  mpu6050Measure();
  if( y[0] > STATE_THRESHOLD_M1)
    state = fast_walking;
  else if(y[0] < STATE_THRESHOLD_M2)
    state = slow_walking;
  else
    state = normal_walking;
  switch(state){
    case slow_walking:
      state_window = WINDOW_SIZE_SLOW;
      state_range = STATE_RANGE_SLOW;
      state_threshold = VIBRATION_SLOW;
      break;
    case normal_walking:
      state_window = WINDOW_SIZE_NORMAL;
      state_range = STATE_RANGE_NORMAL;
      state_threshold = VIBRATION_NORMAL;
      break;
    case fast_walking:
      state_window = WINDOW_SIZE_FAST;
      state_range = STATE_RANGE_FAST;
      state_threshold = VIBRATION_FAST;
      break;
  }
  if (peakDetection(state_range, state_window, state_threshold) || sleep_timer_start < 15){
      return true;
  }
  return false;
}

void sleepDetection(){
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);
  gx = g.gyro.x*100;
  gy = g.gyro.y*100;
  gz = g.gyro.z*100;
  if (activate == 0) {  // first sleep confirmation
    if ((gx <= 20 || gx >= -20) && (gy <= 20 || gy >= -20) && (gz <= 20 || gz >= -20)) {
      sleep_timer_start = millis() / 1000 - sleep_timer_end;
      if (sleep_timer_start >= 300) {
        activate = 1;
      }
    }
    if ((gx >= 20 || gx <= -20) || (gy >= 20 || gy <= -20) || (gz >= 20 || gz <= -20)) {
      sleep_timer_end = (millis() / 1000);
    }
  }

  if (activate == 1) {  // sleeping mode
    light_sleep = (millis() / 1000) - sleep_timer_end;

    if (interrupt == 0) {
      if (light_sleep >= 4200) {
        if (interrupt_for_deep_sleep > 4200) {
          if (light_sleep - interrupt_sleep_timer >= 600) {
            deep_sleep = light_sleep - interrupt_for_deep_sleep;
          }
        }
      }
    }
    light_sleep = light_sleep - deep_sleep;

    if ((gx >= 20 || gx <= -20) || (gy >= 20 || gy <= -20) || (gz >= 20 || gz <= -20)) {
      interrupt_sleep_timer = (millis() / 1000) - sleep_timer_end;
      interrupt_for_deep_sleep = light_sleep;
      interrupt = interrupt + 1;
      delay(8000);
    }
    if ((millis() / 1000) - sleep_timer_end - interrupt_sleep_timer > 300) {
      interrupt = 0;
    }

    if ((millis() / 1000) - sleep_timer_end - interrupt_sleep_timer <= 300) {
      if (interrupt >= 5) {
        sleep_timer_end = (millis() / 1000);
        if (light_sleep >= 900) {  // second sleep confirmation
          total_light_sleep = total_light_sleep + light_sleep;
          total_deep_sleep = total_deep_sleep + deep_sleep;
          total_sleep = total_light_sleep + total_deep_sleep;
        }
        activate = 0;
        interrupt = 0;
        deep_sleep = 0;
        light_sleep = 0;
        interrupt_sleep_timer = 0;
        interrupt_for_deep_sleep = 0;
      }
    }
  }
  stage_sleep_time = light_sleep + deep_sleep;
  if (stage_sleep_time >= 5400) {
    sleep_timer_end = (millis() / 1000);
    total_light_sleep = total_light_sleep + light_sleep;
    total_deep_sleep = total_deep_sleep + deep_sleep;
    total_sleep = total_light_sleep + total_deep_sleep;
    activate = 0;
    interrupt = 0;
    deep_sleep = 0;
    light_sleep = 0;
    interrupt_sleep_timer = 0;
    interrupt_for_deep_sleep = 0;
  }

  Serial.print(sleep_timer_start); 
  Serial.println(",");
  if (light_sleep >= 900) {
    Serial.print(light_sleep / 60);
    Serial.print(",");
    Serial.print(deep_sleep / 60);
    Serial.print(",");
    Serial.print(total_light_sleep / 60);
    Serial.print(",");
    Serial.print(total_deep_sleep / 60);
    Serial.print(",");
    Serial.print(total_sleep / 60);
    Serial.println(";");
  } else {
    Serial.print(0);
    Serial.print(",");
    Serial.print(0);
    Serial.print(",");
    Serial.print(total_light_sleep / 60);
    Serial.print(",");
    Serial.print(total_deep_sleep / 60);
    Serial.print(",");
    Serial.print(total_sleep / 60);
    Serial.println(";");
  }
  timer = millis();
}
int getDeepSleepTotalTime(){
  return total_deep_sleep;
}
int getLightSleepTotalTime(){
  return total_light_sleep;
}
int getTotalSleepTime(){
  return total_sleep;
}

int getSleepStatus(){
  return activate;
}