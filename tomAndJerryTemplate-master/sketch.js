var jerry,jerryImg,jerryRun,jerryWatch;

var garden,gardenImg;

var tom,tomRun,tomStop,tomImg;

function preload() {
    //load the images here
  gardenImg=loadImage("images/garden.png");
  jerryRun=loadAnimation("images/jerryTwo.png","images/jerryThree.png");  
  jerryWatch=loadImage("images/jerryFour.png"); 
  jerryImg=loadImage("images/jerryOne.png");
  tomImg=loadImage("images/tomFour.png");
  tomStop=loadImage("images/tomOne.png");
  tomRun=loadAnimation("images/tomThree.png","images/tomTwo.png");

}
//           ,
// |\/\/\/\|
// |_______|
//
function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here

   garden=createSprite(500,350,1000,800);
   garden.addImage(gardenImg);

   jerry=createSprite(200,550,1000,800);
   jerry.addImage(jerryImg);
   jerry.scale=0.09;
       
   tom=createSprite(600,550,1000,800);
   tom.addImage(tomImg);
   tom.scale=0.3/2;
    
  }

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collideSS
    drawSprites();


    if(tom.x-jerry.x<Tom.width/2-jerry.width/2){
     
    tom.changeAnimation(tomStop);
    jerry.changeAnimation(jerryWatch);
    tom.velocityX=0
    }
  
keyPressed();
   {
    jerry.changeAnimation(jerryImg);   
    tom.changeAnimation(tomImg);
   }
  

  }

function keyPressed(){

  //For tom and changing animation write code here
  if(keyDown("left_arrow")){
    tom.x=tom.x-3;
    tom.changeAnimation=tomRun;
  }
  

  

}
