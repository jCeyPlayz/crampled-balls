
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var trash1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	trash1=new trash(600, 250, 80, 80)
	dustbinObj=new dustbin(1200,650);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);  
  background(230);
 
  trash1.display()
  groundObject.display();
  dustbinObj.display();

  keyPressed()
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(trash1.body, trash1.body.position, {x:5, y:-17})
	}
}
