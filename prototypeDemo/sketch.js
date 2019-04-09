/* Danny Rozin
Introduction to Physical Computing
ITP

This sketch will send 2 values in ascii from arduino to P5
See arduino code in bottom, have pots connected to A0 and A1*/

var serial; // variable to hold an instance of the serialport library
var fromSerial = 0,fromSerial2 = 0; //variable to hold the data

function preload() {
    wave = loadSound('wave.mp3');
      gulls = loadSound('seagulls.mp3');


}
function setup() {
  createCanvas(320, 240);
  serial = new p5.SerialPort(); // make a new instance of  serialport librar	
  serial.on('list', printList); // callback function for serialport list event
  serial.on('data', serialEvent); // callback for new data coming in	
  serial.list(); // list the serial ports
  serial.open("/dev/cu.usbmodem14201"); // open a port
}

function draw() {
  // do your drawing stuff here
  // ellipse(fromSerial, fromSerial2, 5, 5);
  if(fromSerial > 50){
    wave.play();
    fill(255,0,0);
    rect(width/2,height/2,10,10);
    
  } else {
    wave.stop();
  }
  if(fromSerial2 >50) {
    gulls.play();
    fill(0,255,0);
    rect(width/2+10,height/2,10,10);
  } else {
    gulls.stop();
  }
}

// get the list of ports:
function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    println(i + " " + portList[i]);
  }
}

function serialEvent() {
  // this is called when data is recieved, data will then live in fromSerial	
  var stringFromSerial = serial.readLine();    // reads everything till the new line charecter
  if (stringFromSerial.length > 0) {             // is the something there ?
    var trimmedString = trim(stringFromSerial);  // get rid of all white space
    var myArray = split(trimmedString, ",")      // splits the string into an array on commas
    fromSerial = Number(myArray[0]);             // get the first item in the array and turn into integer
    fromSerial2 = Number(myArray[1]); 					 // get the second item in the array and turn into integer
  }
}

/*  
// Arduino Code 
void setup() {
  Serial.begin(9600);
}
void loop() {
  int valueToSend = analogRead(A0)/4;
  Serial.print(valueToSend);
  Serial.print(",");
  valueToSend = analogRead(A1)/4;
  Serial.println(valueToSend);
  delay (10);
}
*/