var fixedRect, movingRect;
var object3,object4,object5,object6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object3=createSprite(200,300,20,20);
  object4=createSprite(100,400,50,10);
  object5=createSprite(300,500,10,50);
  object6=createSprite(400,400,30,20);
  
  object6.velocityX=2;
  object5.velocityX=2;
  object6.velocityY=2;
  object5.velocityY=2;
}

function draw() {
  background(0,0,0);  
  object3.x = World.mouseX;
  object3.y = World.mouseY;

 

  if(istouching(object3,object4)){
    object3.shapeColor = "red";
  object4.shapeColor = "red";
  }
  else{
  object3.shapeColor = "green";
  object4.shapeColor = "green";
  }

  bounce(object6,object5)
  drawSprites();
}





