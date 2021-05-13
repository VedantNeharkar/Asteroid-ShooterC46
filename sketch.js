var p1,p2,asteroid1,asteroid2,asteroid3;
var blast,blastImage,space,spaceImage;
var spaceShip,spaceShipImage, laserImage;
var shoot = 0;
var score = 0;

var earth;
var laser,asteroidGroup,laserGroup;
var explosionImage;
var instruction = 3;
var play = 1;
var end = 2;
var gameState = instruction;


function preload() {
  
 
spaceShipImage = loadImage("Spaceship.png");
spaceImage = loadImage("sky.png");
earth = loadImage("Sprite/earth.jpg");
asteroid1 = loadImage("Sprite/asteroid.jpg");
asteroid2 = loadImage("Sprite/asteroid.jpg");
asteroid3 = loadImage("Sprite/asteroid.jpg");
explosionImage = loadImage("Sprite/blst.jpg");
laserImage = loadImage("Sprite/fire.jpg");


}

function setup() {

  createCanvas(1700,800);

space = createSprite(400,400,800,800);
space.addImage(spaceImage);
space.velocityY = (5+ score/10)
space.scale = 5;

spaceShip = createSprite(250,600);
spaceShip.addImage(spaceShipImage)
spaceShip.scale = 0.6;

p1 = createSprite(250,600);
//p1.setCollider("rectangle",70,-27,5,265,156);
p1.visible = false;
 
p2 = createSprite(250,600);
p2.setCollider("rectangle",70,-27,5,265,24);
p2.visible = false;

asteroidGroup = new Group();
laserGroup = new Group();



  
}
function draw(){
background(0,100,180)

/*if(gameState === instruction) {
  //stroke("white");
  fill("white");
  textFont("Apple Chancery")
  textSize(50);
  text("------Guardians OF Galaxy------",);
  text("ENJOY THE GAME!",canvas.width/2,750);
  stroke("yellow");
  fill("yellow");
  textSize(35);
  textFont("Apple Chancery");
  text("Welcome",canvas.width/2,canvas.height/2-250);
  text(" Some asteroids are coming towords Earth.",canvas.width/2-300, canvas.height/2 - 210);
  text("  You are The famous Marvel's Guardians of the galaxy",canvas.width/2-300,canvas.height/2-170);
  text("  Help the people and Earth !",canvas.width/2-300,canvas.height/2-130);
  text("  press 'Space Key' to shoot.",canvas.width/2-300,canvas.height/2-90);
  text("  use right and left arrows to move.",canvas.width/2-300,canvas.height/2-50);
  text("  press 'S' to start game.",canvas.width/2,canvas.height/2-10);
  spaceShip.visible = false;
  space.visible = false;
  

  if(keyDown("s")) {
    gameState = play;
    spaceShip.visible = true;
  } 
  //if(keyDown("r")) {
    //gameState = instruction;
  //}
}*/


console.log(space.y);

 if(gameState === play){
   //console.log(frameCount);

 


if(space.y > 700){
  space.y = space.height/2;
}
shoot = shoot -1;

if(keyCode === 32){
  laser = createSprite(spaceShip.x , spaceShip.y)
  laser.addImage(laserImage);
  laser.velocityY = -8;
  laser.scale = 0.7;
  laserGroup.add(laser);
  
  shoot = laser.y;
}

if(keyDown("right")){
  //&&spaceShip.x < 1400
  spaceShip.x = spaceShip.x + 10;
  p1.x = p1.x + 10;
  p2.x = p2.x + 10;

}
if(keyDown("left")){
  //&&spaceShip.x < 1400
  spaceShip.x = spaceShip.x - 10;
  p1.x = p1.x - 10;
  p2.x = p2.x - 10;

}
asteroids();

if(asteroidGroup.isTouching(p2) || asteroidGroup.isTouching(p1)){
  asteroidGroup.destroyEach();
  var blast = createSprite(spaceShip.x,spaceShip.y - 5);
  blast.addImage(explosionImage);
  blast.lifetime = 25;
  spaceShip.destroy();
  gameState = end ;        

}
 if(asteroidGroup.isTouching(laserGroup)){
   asteroidGroup.destroyEach();
   laserGroup.destroyEach();
   score = score + 1;


 }
 
 
    
    if(asteroidGroup.isTouching(endline)) {
      asteroidGroup.destroyEach();
      gameState = end;
    }
   
  }
  drawSprites();
  //stroke("white");
     fill("white");
     textSize(30);
     text("score : " + score,210,60)

     
    if(gameState === end) {
    space.velocityY = 0;
    stroke("yellow");
    fill("white");
    textSize(40);
    text("GAME OVER!",canvas.width/2-400,canvas.height/2);
    text("The asteroids destroyed the planet",canvas.width/2-400,canvas.height/2+100);
    text("Your final score:"+score,canvas.width/2-400,canvas.height/2+200);

    
  }
}



  

function asteroids() {
  if(frameCount % 110 === 0) {
   
}}