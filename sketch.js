const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;


function preload(){
backImg=loadImage("background.png");

}

function setup() {
  
  createCanvas(1800,800);
  
  engine=Engine.create();
 
  world=engine.world;
  
  soldiers=new soldier(100,100);

  grounds=new ground(900,800,20000,20)

}

function draw() {
  
  background(backImg); 
  
  Engine.update(engine);

  soldiers.display();

if(keyCode===39){
soldiers.right();
}

  grounds.display();
  

}
