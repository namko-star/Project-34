//Create variables here
var dog, happyDog, food, foodStock;
var database;
var dogSprite;


function preload()
{
  database = firebase.database();
  //load images here
  dogSprite = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  background(46, 139, 87);
  
  //dog.addImage(dogSprite);

  if(keyWentDown(UP_ARROW)) {
    writeStock(food);
    //dog.addImage(happyDog);
  }

  //add styles here
  fill("white");
  textSize(20);
  text("Press the up arrow to feed Drago milk!", 10, 20);
  text("Food Remaining: " + food, 160, 190);
  drawSprites();
}

function readStock(data) {
  food = data.val();
}

function writeStock(x) {
  if (x <= 0) {
    x = 0;
  }

  else {
    x = x - 1;
  }

  database.ref('/').update({
    Food: x
  });
}
