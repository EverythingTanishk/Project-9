var bgcolor;
var red_button,green_button;


function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(51);
 
  // Create a button element
  red_button = createButton("RED");
  red_button.position(100,50);
  red_button.mousePressed(red_bg);
 
  red_button = createButton("GREEN");
  red_button.position(200,50);
  red_button.mousePressed(green_bg);

  }

// Callback function for the button's mousePressed event
function red_bg() {
  var r=255,g=0,b=0;
  bgcolor = color(r,g,b);
}

function green_bg() {
  var r=0,g=255,b=0;
  bgcolor = color(r,g,b);
}

function draw() {
  background(bgcolor);

}

