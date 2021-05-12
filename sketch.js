var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var divisions=[];
var score =0;
var count=0;
var gameState = "PLAY";
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text(" 500 ",30,550);
  text(" 500 ",90,550);
  text(" 500 ",180,550);
  text(" 500 ",260,550);
  text(" 200 ",340,550);
  text(" 200 ",420,550);
  text(" 100 ",500,550);
  text(" 100 ",580,550);
  text(" 100 ",660,550);
  text(" 100 ",720,550);
  
  Engine.update(engine);
 if (gameState == "end"){
   textSize(50);
   text("GAMEOVER",200,400);
 }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function keyPressed(){
  if(keyCode == 32){
    if(gameState=="end")
    {
      count++;
      particle=new Particle(mouseX,10,10);
    }
  }
}
