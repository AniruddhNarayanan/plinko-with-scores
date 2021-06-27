const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particle;
var engine, world;
var score = 0;
var count = 0;
var gameState = "START";
function setup() {
  createCanvas(800,800);
  // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 790, 800, 20);
  for(var k=0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 75));
  }
  for(var j = 15; j<=width-10; j=j+50) {
    plinko.push(new Plinko(j, 175));
  }

  for(var j = 40; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 275));
  }
  for(var j = 15; j<=width-10; j=j+50) {
    plinko.push(new Plinko(j, 375));
  }
}
 
var divisionHeight=300;

var plinko = [];
var divisions = [];

function draw() {
  background(0);  
  fill("white");
  textSize(35);
  text("Score : " + score, 20, 40);
  text(" 500 ", 5, 550); 
  text(" 500 ", 80, 550); 
  text(" 500 ", 160, 550); 
  text(" 500 ", 240, 550);
   text(" 100 ", 320, 550); 
   text(" 100 ", 400, 550);
   text(" 100 ", 480, 550);
   text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
     text(" 200 ", 720, 550);
    

  Engine.update(engine);
  if(gameState=== "END"){
    textSize(100);
    text("Game Over", 150, 250);
  }
  for(var k=0; k <divisions.length; k = k + 1) {
   divisions[k].display();

  }
  for(var k=0; k <plinko.length; k = k + 1) {
    plinko[k].display();
 
   }
  if(particle != null){
    particle.display();
    if (ball.body.position.y>760)
    {
          if (ball.body.position.x < 300) 
          {
              score=score+500;      
              ball=null;
              if ( count>= 5) gameState ="END";                          
          }


          else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
          {
                score = score + 100;
                ball=null;
                if ( count>= 5) gameState ="END";

          }
          else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
          {
                score = score + 200;
                ball=null;
                if ( count>= 5)  gameState ="END";

          }      
  }
}
 ground.display();
  drawSprites();
}

function mousePressed(){
  if(gameState!== "END"){
    count++ 
    particle = new Particle(mouseX, 10,10);
  }
}