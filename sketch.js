var background,backgroundImage;
var tom,tomImage,tomAnimation,tomSit;
var jerry,jerryImage,jerryAnimation;
function preload() {
    //load the images here
    backgroundImage=loadImage("blank-landscape-nature-park-scene-with-many-pines_1308-50065.jpg")
    tomImage=loadImage("cat1.png");
    tomAnimation=loadAnimation("cat2.png","cat3.png");
    tomSit=loadImage("cat4.png");
    jerryImage=loadImage("mouse1.png");
    jerryAnimation=loadAnimation("mouse2.png","mouse3.png","mouse4.png");
    jerryStay=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600,10,10);
    tom.addImage("tomImage",tomImage);
    tom.addAnimation("tomAnimation",tomAnimation);
    tom.addImage("tomSit",tomSit)
    tom.scale=0.2;
    jerry=createSprite(200,600,10,10);
    jerry.addImage("jerryImage",jerryImage);
    jerry.addAnimation("jerryAnimation",jerryAnimation)
    jerry.addImage("jerryStay",jerryStay);
    jerry.scale=0.2;

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    collision_Detection();
    if(!(tom.x-jerry.x < (tom.width/2) - (jerry.width/2) && tom.x!=800)){
    keyPressed();
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW))
  {
    tom.x = tom.x-5;
    tom.changeAnimation("tomAnimation",tomAnimation);
    jerry.changeAnimation("jerryAnimation",jerryAnimation)
  }
  else if(tom.x!=800)
  {
    tom.changeAnimation("tomSit",tomSit);
    jerry.changeAnimation("jerryStay",jerryStay);
  }
}
function collision_Detection(){
  if(tom.x-jerry.x < (tom.width/2) - (jerry.width/2) && tom.x!=800){

    tom.changeAnimation("tomSit",tomSit);
    jerry.changeAnimation("jerryStay",jerryStay);
    
  }
}
