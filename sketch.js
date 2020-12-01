
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground;
var ball;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = new Ball(50,100,30);

	ground = new Ground(400,680,800,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);

 	ground.display();
	ball.display();
  
  
  
  drawSprites();
 
}



