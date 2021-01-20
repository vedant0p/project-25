
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground = createSprite(500,500,1700,20);
	ground = new Ground(400,580,800,20);
	
	dustbin4 = new Dustbin(600,490, 180,150);

	//dustbin1 = createSprite (530,490, 20,150);

	//dustbin2 = createSprite (680,490, 20,150);

	//dustbin3 = createSprite (605,570, 150,20);

	paper = new Paper(100,300,80);
	

	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  paper.display();
  dustbin4.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x: 700,y:-1500});
	   
	 }
	}
