// GameStates
var PLAY = 1;
var END = 0 ;
var gameState=1;

var sword , swordImage ;
var fruit1 , fruit1Image ;
var fruit2 , fruit2Image ;
var fruit3 , fruit3Image ;
var fruit4 , fruit4Image ;
var fruit;
var fruitGroup;
var monster , monsterImage;
var gameOverImage;

var score = 0 ;

function preload(){
  
  swordImage = loadImage("sword.png");
  
   fruit1Image = loadImage("fruit1.png");
   fruit2Image = loadImage("fruit2.png");
   fruit3Image = loadImage("fruit3.png");
   fruit4Image = loadImage("fruit4.png");
  
monsterImage = loadAnimation("alien1.png","alien2.png");
  
  gameOverImage = loadImage("gameover.png");
  
}

function setup(){
  createCanvas(500,500);
  
  //creating sword
  sword = createSprite( 40 , 200 , 20 , 20 );
  sword.addImage(swordImage);
  sword.scale = 0.7 ;
  
  //creating groups
  fruitGroup = new Group ();
  enemyGroup = new Group ();
 
}

function draw(){
    background("lightblue");
    fill("black");
    textSize(20);
    text("score: "+score,400,25);
  
 if (gameState === PLAY){
   
   //moving the sword
      sword.y = mouseY;
      sword.x = mouseX;
   
   fruits();
   enemy();
 }
  //adding score
   if(sword.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score=score+1;
  }
  
  //game over
  if(sword.isTouching(enemyGroup)){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    gameState=END;
    sword.addImage(gameOverImage);
    sword.scale=1.2;
    sword.x=250;
    sword.y=250;
  }
  drawSprites();
}

 function fruits() {
  if (World.frameCount%80===0) {
    fruit=createSprite(400, 200, 20, 20);
    fruit.scale=0.2;
    //fruit.debug=true;
    r = Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruit1Image);
    } else if (r == 2) {
      fruit.addImage(fruit2Image);
    } else if (r == 3) {
      fruit.addImage(fruit3Image);
    } else {
      fruit.addImage(fruit4Image);
    }
    
    fruit.y=Math.round(random(50,440));
    fruit.velocityX = -7;
    fruit.lifetime = 100;
    
    fruitGroup.add(fruit);
  }
  }


function enemy() {
  if (World.frameCount % 200 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(100, 300));
    monster.velocityX = -8;
    monster.setlifetime = 50;

    enemyGroup.add(monster);

  }
}
