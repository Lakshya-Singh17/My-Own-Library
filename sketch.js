var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(300, 50, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = 5;

  fixedRect = createSprite(300,750,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -5;
}

function draw() {
  background(0,0,0); 

  bounceOff(movingRect,fixedRect);
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}