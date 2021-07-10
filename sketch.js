var runnerAnimation, bombImage, coinImage, pathImage, powerImage, EnergyDrinkImage;

var runner, bomb, coin, path, power, energyDrink;

var rand, end, score;


function preload(){

runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png")

bombImage = loadImage("bomb.png");

coinImage = loadImage("coin.png");

pathImage = loadImage("path.png");

powerImage = loadImage("power.png");

EnergyDrinkImage = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  
  //created Path
  path = createSprite(200, 200);
  path.addImage(pathImage)
  path.velocityY = 4;
  path.scale = 1.2;

  //created Runner
  runner = createSprite(205, 350);
  runner.addAnimation("running", runnerAnimation);
  runner.scale = 0.05;

  score = 0;
  end = 0;

  bombGroup = new Group;
}

function draw() {
  background(0);

  stroke = "white"
  textSize(20);
  text("Your score was: "+ score, 115,100);

  if(path.y > 400){
    path.y = 100;
  }

  if(end === 0){
    score = score + Math.round(frameCount/60);

  }

  if(runner.x = 205){
  if(keyDown("RIGHT_ARROW")){
    runner.x = 320;
  }
  else if(keyDown("LEFT_ARROW")){
    runner.x = 95;
  }}



  if (frameCount % 90 === 0) {
    bomb = createSprite(0,0,40,10);
   rand = Math.round(random(1,3));
   bomb.addImage(bombImage);
   bomb.scale = 0.1;
   bomb.velocityY = 3;
   
   if(rand === 1){
     bomb.x = 95;
   }

   if(rand === 2){
    bomb.x = 205;
  }

  if(rand === 3){
    bomb.x = 320;
  }
   
   bomb.lifetime = 134;
   
   bombGroup.add(bomb);

 }

 if(end === 1){
   bomb.destroy();
   textSize(50);
   text("You Lost!", 100, 200) 

   textSize(20);
   text("Click - R - to restart", 120, 250) 

   if(keyDown("R")){
    path = createSprite(200, 200);
    path.addImage(pathImage)
    path.velocityY = 4;
    path.scale = 1.2;

    runner = createSprite(205, 350);
    runner.addAnimation("running", runnerAnimation);
    runner.scale = 0.05;
    
    end = 0;
   }

 } 

  if(bombGroup.isTouching(runner)){
    runner.destroy();
    path.destroy();
    end = 1;
    
  }

  drawSprites();
}

