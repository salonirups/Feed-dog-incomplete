var dog,sadDog,happyDog;
var feed, add;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}


function setup() {
  createCanvas(800,400);
  dog=createSprite(700,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("FEED THE DOG");
  feed.position(300,100);
  add=createButton("ADD MILK");
  add.position(225,100)
}

function draw() {
  background(46,139,87);
  feed.mousePressed(function(){
    dog.addImage(happyDog)
  })
  

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time

function feedDog(){
  dog.addImage(happyDog)

  if (foodObj.getfoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getfoodStock()*0)
  }
  else{
    foodObj.updateFoodStock(foodObj.getfoodStock()-1)
  }
}

//function to add food in stock

function addFoodStock(){
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}

add.mousePressed(function(){
  addFoodStock();
})