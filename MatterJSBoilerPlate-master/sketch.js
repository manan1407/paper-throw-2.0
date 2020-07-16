
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(400,100);
	ground1= new ground(400,570,10,800)
	paddle1 = new dustbin(400,560,10,70);
	paddle2 = new dustbin(365,530,50,10);
	paddle3 = new dustbin(435,530,50,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    
  drawSprites();
   paperObject.display();
  
   paddle1.display();
   paddle2.display();
   paddle3.display();
   ground1.display();
}

function keypressed (){
	if (keycode === UP_ARROW) {
		Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


