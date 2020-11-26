
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(300, 400, 50, 50);
  ellipse(350,400,50,50);
  ellipse(400,400,50,50);
  ellipse(450,400,50,50);
  rect(375,150,250,20);
  drawSprites();
 
}



