int fsrAnalogPin1 = 0; // FSR is connected to analog 0
int fsrReading1;      // the analog reading from the FSR resistor divider

int fsrAnalogPin2 = 1;
int fsrReading2;
 
void setup(void) {
  Serial.begin(9600);   // We'll send debugging information via the Serial monitor
}
 
void loop(void) {
  fsrReading1 = analogRead(fsrAnalogPin1);
//  Serial.print("Analog reading = ");
  Serial.print(fsrReading1);
   Serial.print(",");
fsrReading2 = analogRead(fsrAnalogPin2);
Serial.println(fsrReading2);
  
  delay(10);
}
