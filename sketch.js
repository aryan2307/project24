
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, dustbin1, dustbin2, dustbin3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper();
	dustbin1 = new Dustbin(600,500,200,20);
	dustbin2 = new Dustbin(490,460,20,100);
	dustbin3 = new Dustbin(710,460,20,100);
	ground = new Ground();
	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  drawSprites();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85});
  }
}