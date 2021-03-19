
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var dground,tree,treeImg;
var boy,boyImg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
	treeImg=loadImage("sprites/tree.png");
	boyImg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dground=new Ground();

	stones=new Stone(100,460,23);

	mango1=new Mango(600,290,1);
	mango2=new Mango(855,325,1);
	mango3=new Mango(670,260,1);
	mango4=new Mango(730,200,1);
	mango5=new Mango(710,320,1);
	mango6=new Mango(780,250,1);
	mango7=new Mango(825,170,1);
	mango8=new Mango(880,260,1);
	mango9=new Mango(940,220,1);
	mango10=new Mango(980,350,1);

	//attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=0.45;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale=0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  stones.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){
	if(lstones.body.position.x - lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x < lmango.diametre + lstones.diametre
		&& lstones.body.position.y - lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}



