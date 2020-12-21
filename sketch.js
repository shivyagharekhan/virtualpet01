var dog,happDog,database,foodS,foodStock;
var Food=0;
function preload()
{
dog1=loadImage("images/dog1.png")
dog2=loadImage("images/dog2.png")
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dog1)
  dog.scale=0.5
  database = firebase.database()
  foodStock=database.ref("Food")
 foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
 writeStock(foodS);
 dog.addImage(dog2)
}


  drawSprites();
  textSize(13)
  fill(255,254,255)
  stroke("black")
  text("foodReamaining"+foodS,170,200)
  //add styles here

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
