var snowImg, fireImg, bgImg;
var snow, fire, fireTrackImg;
var gameState = 'start'
var flag = true;
var canonImg,canon,fireball,fireballImg;

function preload() {
  snowImg = loadImage("snow.jpg")
  fireImg = loadImage("fire.png")
  bgImg = loadImage("bg.jpg")
  fireTrackImg = loadImage("track.png")
  canonImg = loadImage("canon.png");
}

function setup() {
  createCanvas(800, 400);
  snow = createSprite(250, 200, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.5;

  fire = createSprite(550, 200, 30, 50);
  fire.addImage(fireImg);
  fire.scale = 0.55;
  console.log(fire)

  


}
function spawnCanons(){
  if(frameCount % 250 === 0){
    canon = createSprite(550,200,20,20);
    canon.addImage('canon',canonImg);
    canon.scale = 0.3;
    canon.y = Math.round(random(200,350));
    canon.x = Math.round(random(600,750))
    canon.velocityY = 2;
    canon.depth = fireTrackImg.depth
    canon.depth = canon.depth +1
  }

}


function draw() {
  // if (gameState = 'start') {
  //   background(bgImg);
  // }
  // else if (gameState = 'next') {
    //   background(bgImg);
    
    // }
    if(flag){
      background(bgImg);
      
  }
  else {
    background(0);
    bg = createSprite(400,200,10,10);
    bg.addImage(fireTrackImg);
    bg.scale = 2;
    bg.velocityY = -2;
  
   
   spawnCanons();
  }
console.log(gameState)
  if (mousePressedOver(fire)) {
    flag = false
    console.log('Pressed')
    gameState = 'next'
    fire.visible = false;
    snow.visible = false;

  }




  drawSprites();
}

