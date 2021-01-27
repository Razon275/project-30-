
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles=[];
var plinkos=[];
var divisions=[];
var ground;
var divsionheight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480,600);


	engine = Engine.create();
	world = engine.world;
  for(var k  =0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divsionheight/2,10,divsionheight))
  }

  for (var j = 40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  for (var j = 15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,125,10))
  }
  for (var j = 40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for (var j = 15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,225,10))
  }
	//Create the Bodies Here.
  ground=new Ground(240,590,600,10)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for(var k=0;k<plinkos.length;k++){
     plinkos[k].display();

  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();

 }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();
 }

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10),10,10));
 }
  ground.display()
  drawSprites();
 
}
