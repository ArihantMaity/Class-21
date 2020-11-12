var object1,object2,object3,object4;

function setup(){
    createCanvas(800,400);
    object1=createSprite(400,200,20,20);
    object2=createSprite(300,100,20,60);
    object3=createSprite(400,300,50,20);
    object4=createSprite(700,350,70,10);

 

    object2.velocityY=3;
    object2.velocityX=-2;

    object3.velocityX=-3;
    object3.velocityY=3;
}

function draw(){
    background("black");
    object1.y=mouseY;
    object1.x=mouseX;
    if(istouching(object1,object3)){
  object1.shapeColor="blue";
  object3.shapeColor="blue";
    }

  

    drawSprites();
}