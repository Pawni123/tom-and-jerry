var cat, catImg1, catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var garden, gardenImg;

function preload(){
 catImg1=loadAnimation("images/cat1.png");
 catImg2=loadAnimation("images/cat2.png","images/cat3.png");
 catImg3=loadAnimation("images/cat4.png");
 mouseImg1=loadAnimation("images/mouse1.png");
 mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png",);
 mouseImg3=loadAnimation("images/mouse4.png");
 gardenImg=loadImage("images/garden.png");
}
function setup(){
    createCanvas(1000,800);
    cat=createSprite(850,600,50,50);
    cat.addAnimation("catStanding",catImg1);
    cat.scale=0.15;

    mouse=createSprite(200,600,30,30);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.2;

}


function draw(){
   background(gardenImg);

   if(cat.x-mouse.x < (cat.width-mouse.width)/2){
       cat.velocityX=0;
       cat.addAnimation("catLastStage",catImg3);
       cat.x=300;
       cat.changeAnimation("catLastStage");
       cat.scale=0.2;
       mouse.addAnimation("mouseLastStage",mouseImg3)
       mouse.changeAnimation("mouseLastStage");
       mouse.scale=0.2;
   }


    drawSprites();
}
function keyPressed(){
  if(keyDown(LEFT_ARROW)){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      cat.scale=0.2;
      mouse.addAnimation("mouseRunning",mouseImg2);
      mouse.changeAnimation("mouseRunning");
  }
}
