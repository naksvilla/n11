var ship,shipImage ,sea , seaImage

function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png" ,"ship-4.png")

seaImage = loadImage("sea.png");
}


function setup(){
  createCanvas(600,300);

sea = createSprite(50,50,600,300)
sea.addImage(seaImage)
ship= createSprite(70,180,20,20);
ship.addAnimation ("ship",shipImage)
ship.scale = 0.2
ground = createSprite(150,300,600,20)

edges = createEdgeSprites();
sea.x = sea.width/2
sea.velocityX = -2
ground.visible = false
}


function draw() {
  background("white");
 if (keyDown("space")) {
   ship.velocityY = -10
 }


ship.velocityY = ship.velocityY + 0.8
  
if (sea.x<0) {
sea.x = sea.width/2;
}

ship.collide(ground)
 drawSprites();
}