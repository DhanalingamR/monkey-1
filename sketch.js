var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var fGroup, oGroup,b,o;
var score;
var survivalTime=0;
var ground;

function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png", "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(600,600);
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  monkey.velocityY=5;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-3;
  
  fGroup=new Group();
  oGroup=new Group();
  
  //b.addImage("bananaImage")
  //o.addImage("obstacleImage")
}

function draw() {
  background("white");

  
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if (keyDown("space")){
    monkey.velocityY=-4;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
   
  so();
  sf();
  
drawSprites();  
}

function sf(){

 if (frameCount % 60 === 0) {
    b = createSprite(600,100,40,10);
    b.y = Math.round(random(100,300));
    b.addImage(bananaImage);
    b.scale = 0.1;
    b.velocityX = -3;
    
     //assign lifetime to the variable
    b.lifetime = 300;
    
    //adding cloud to the group
   fGroup.add(b);
  }   
}
function so(){

 if (frameCount % 130 === 0) {
    o = createSprite(600,330,40,10);
    o.addImage(obstacleImage);
    o.scale = 0.1;
    o.velocityX = -3;
    
     //assign lifetime to the variable
    o.lifetime = 300;
    
    //adding cloud to the group
    oGroup.add(o);
  }   
}
