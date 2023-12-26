#include "Wire.h"
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>
#include "MPU6050.h"
#include "MAX30100_PulseOximeter.h"
#include "MQ135.h"

#define PIN_MQ135 A0 
#define REPORTING_PERIOD_MS     1000


const int FILTER_SIZE = 10;
float heartRateFilter[FILTER_SIZE];
float spo2Filter[FILTER_SIZE];
int filterIndex = 0;
bool filterReady = false;
unsigned long lastMQ135Measurement = 0;
const unsigned long MQ135MeasurementInterval = 2000;
const char* ssid = "P307";
const char* password = "vutuananh8386";
const char* serverAddress = "http://192.168.37.4"; // Address API REST
const int serverPort = 3001; // PORT API REST
const char* endPoint = "/api/state/postStateData";

///////////////////DATA/////////////////
int step = 0;
float spo2 = 0;
float heartRate = 0;
int currentHeart = 0;
int preHeart = 0;
float gas = 0;
int totalSleep = 0;
int deepSleep = 0;
int lightSleep = 0;
long long int detectionCurrentTime = 0;
long long int printResultTime = 0;
long long int sleepDetectionStep = 0;
long long int sleepCheckTime = 0;


MQ135 mq135_sensor = MQ135(PIN_MQ135);  
PulseOximeter pox;
uint32_t tsLastReport = 0;

void onBeatDetected() {
    Serial.println("Beat!");
}

HTTPClient http;
WiFiClient client;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
  String serverName = String(serverAddress) + ":" + String(serverPort) + String(endPoint);
  Serial.println(serverName);
  http.begin(client, serverName);
  getData();
  mpu6050Setup();
}


void loop() {
  sensorMAX();
  step = sensorMPU(step);
  sensorMQ();
  currentHeart = heartRate;

  DynamicJsonDocument jsonDoc(200);
  jsonDoc["heartRate"] = currentHeart;
  jsonDoc["steps"] = step;
  jsonDoc["co2"] = gas;
  jsonDoc["spo2"] = spo2;
  jsonDoc["lightSleep"] = lightSleep;
  jsonDoc["deepSleep"] = deepSleep;
  jsonDoc["totalSleep"] = totalSleep;

  String postData;
  serializeJson(jsonDoc, postData);
  http.addHeader("Content-Type", "application/json");
  int httpResponseCode = http.POST(postData); 
  Serial.print("HTTP Response Code: ");
  Serial.println(httpResponseCode);

if (httpResponseCode > 0) {
  String response = http.getString(); // Get the response body
  Serial.println("Response: " + response);
  if(httpResponseCode == 201){
    changeUserData(); 
  }
  } else {
  Serial.println("HTTP request failed");
  }
}

void getData(){
  String getDataPath = "http://192.168.37.4:3001/api/state/getStateData";
    
    HTTPClient http1;
    WiFiClient client1;
    http1.begin(client1, getDataPath);
    int httpCode = http1.GET();
    if (httpCode > 0) {
    // If the response code is positive, print the response
      String payload = http1.getString();
      DynamicJsonDocument jsonDoc1(1024);

      deserializeJson(jsonDoc1, payload);

      if (deserializeJson(jsonDoc1, payload) != DeserializationError::Ok) {
        Serial.println("Error parsing JSON");
        serializeJsonPretty(jsonDoc1, Serial);
      }
      step = jsonDoc1["todayInfo"]["step"].as<int>();

      Serial.println("HTTP Response: " + payload);  
  }
}

void changeUserData(){
   getData();
    String changeCurrentLog = "http://192.168.37.4:3001/api/log/toggleCurrentLog";
    HTTPClient http2;
    WiFiClient client2;
    http2.begin(client2, changeCurrentLog);
    int httpCode = http2.GET();
    if(httpCode != 200){
      changeUserData();
    } 
}


/////////////////////////////////////////// Sensor MPU ///////////////////////////////////////////
int sensorMPU(int prevStep) {
  if (millis() - detectionCurrentTime > 20){
    detectionCurrentTime = millis();
    if (stepCountAlgorithm())
      prevStep++;
  }
  if (millis() - printResultTime > 5000) {
    printResultTime = millis();
    Serial.print("step:");
    Serial.println(prevStep);
  }
  if (millis() - sleepDetectionStep > 1000){
    sleepDetectionStep = millis();
    sleepDetection();
  }

  if (getSleepStatus()==0 && millis() - sleepCheckTime > 3600000){
    Serial.print("Total sleep time: ");
    totalSleep = getTotalSleepTime();
    Serial.println(totalSleep);
    Serial.print("Light sleep stage time: ");
    lightSleep = getLightSleepTotalTime();
    Serial.println(lightSleep);
    Serial.print("Deep sleep stage time: ");
    deepSleep = getDeepSleepTotalTime();
    Serial.println(deepSleep);
    sleepCheckTime = millis();
  }
  return prevStep;
}

/////////////////////////////////////////// Sensor MAX30100 ///////////////////////////////////////////
void updateMax() {
  pox.update();
    if (millis()- tsLastReport > REPORTING_PERIOD_MS) {
        Serial.print("Heart rate:");
        Serial.print(pox.getHeartRate());
        Serial.print("bpm / SpO2:");
        Serial.print(pox.getSpO2());
        Serial.println("%");
        heartRate = pox.getHeartRate();
        spo2 = pox.getSpO2();
        preHeart = heartRate;
        tsLastReport = millis();
    }
    if (heartRate*spo2 == 0 || preHeart == currentHeart) {
      updateMax();
    }
}
void sensorMAX() {
  pox.begin();
  if (!pox.begin()) {
        Serial.println("FAILED");
        for(;;);
    } else {
        Serial.println("SUCCESS");
    }
  pox.setOnBeatDetectedCallback(onBeatDetected);
    updateMax();
    
}

///////////////////////////////////////// Sensor MQ135 ///////////////////////////////////////////
void sensorMQ() {
  if (millis() - lastMQ135Measurement >= MQ135MeasurementInterval) {
    lastMQ135Measurement = millis(); // Cập nhật thời gian đo cuối cùng
    gas = mq135_sensor.getgas();
    Serial.print("Khí gas: ");
    Serial.println(gas);
  }
}
