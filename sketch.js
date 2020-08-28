var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(25,200,50,20);
  bullet.shapeColor=color(255);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80);
  bullet.velocityX=speed;
  
}

function draw() {
  background(0); 
  console.log(bullet.velocityX)
  
  if(hasCollided(bullet,wall)){
   
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness* thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
   
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  lbulletRightEdge=lbullet.x+lbullet.width;
  lwallLeftEdge=lwall.x;
  if (lwallLeftEdge>=lwallLeftEdge){
   
    return true;
  }
  return false;
}