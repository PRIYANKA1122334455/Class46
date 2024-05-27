var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy,boyImg;
var obstaclesGroup,car1,car2,car3,truck;
var CoinsGroup,coin;
var road, roadImg;

var Score=0;

var gameOver, Reset;

function preload(){
    boyImg = loadAnimation("Boy1_Img.png","Boy2_Img.png","Boy3_Img.png","Boy4_Img.png");
    roadImg = loadImage("Bg_Img.jpg");
    coin = loadImage("Coin_Img.png");
    truck = loadImage("Truck_Img.png");
    car1 = loadImage("Car1_Img.png");
    car2 = loadImage("Car2_Img.png");
    car3 = loadImage("Car3_Img.png");
}

function setup(){
    createCanvas(800,600);

    boy = createSprite(50,550,50,20);
    boy.addAnimation("running",boyImg);
    boy.scale = 0.5;

    road = createSprite(200,100);
    road.addImage(roadImg);
    road.velocityX = -5;
    
    obstaclesGroup = new Group ();
    CoinsGroup = new Group ();
}

function draw(){

}