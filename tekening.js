var xGuy;
var speed;
 


function setup() {
	createCanvas(400, 300); 
	xGuy = 100;
	speed = 2
}

function draw() {

  document.body.style.backgroundColor = "#33ccff";


ellipseMode(CENTER);
rectMode(CENTER);
background(255, 255, 0);
  line(xGuy - 1, 150, xGuy - 40, 139);
  line(xGuy + 1, 150, xGuy + 40, 139);

  fill(102, 51, 0);
  ellipse(xGuy, 130, 30, 12);

fill(0, 204, 0);
ellipse(xGuy - 17, 110, 20, 22);
ellipse(xGuy + 17, 110, 20, 22);
 
  line(0, 235, 500, 235)
  line(0, 237, 500, 237)
  line(0, 236, 500, 236)
  line(0, 238, 500, 238)
  line(0, 239, 500, 239)
  line(0, 240, 500, 240)
  line(0, 243, 500, 243)
  line(0, 242, 500, 242)
  line(0, 241, 500, 241)
  
fill(255, 255, 255);
rect(xGuy, 150, 10, 150);

  line(xGuy - 1, 150, xGuy - 40, 139);
  line(xGuy + 1, 150, xGuy + 40, 139);

  fill(102, 51, 0);
  ellipse(xGuy, 130, 30, 12);

fill(0, 204, 0);
ellipse(xGuy - 17, 110, 20, 22);
ellipse(xGuy + 17, 110, 20, 22);

  line(xGuy - 21, 150, xGuy - 60, 139);
  line(xGuy + 21, 150, xGuy + 60, 139);
  xGuy += 1;
  
          if (xGuy > width || xGuy < 0){ 
        speed = -speed;
    }
    xGuy += speed;
}
	