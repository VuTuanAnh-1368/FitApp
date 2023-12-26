#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <math.h>

#define STATE_THRESHOLD_M1 1.6
#define STATE_THRESHOLD_M2 1.2

#define STATE_RANGE_SLOW 7
#define STATE_RANGE_NORMAL 6
#define STATE_RANGE_FAST 5

#define WINDOW_SIZE_SLOW 12
#define WINDOW_SIZE_NORMAL 10
#define WINDOW_SIZE_FAST 9

#define VIBRATION_SLOW 0.05
#define VIBRATION_FAST 0.12
#define VIBRATION_NORMAL 0.08

enum walking_state{
  slow_walking = 0,
  normal_walking = 1,
  fast_walking = 2
};

void mpu6050Setup();
double mpu6050Measure();
bool peakDetection(int state_range, int state_window, double state_threshold);
bool falsePeakDetection(int state_window);
bool vibration(double state_threshold);
bool stepCountAlgorithm();
void sleepDetection();
int getDeepSleepTotalTime();
int getLightSleepTotalTime();
int getSleepStatus();
int getTotalSleepTime();