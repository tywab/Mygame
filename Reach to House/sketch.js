var houseimg,trackimg;
var player;

function preload(){
    houseimg=loadImage("assets/house.png");
    trackimg=loadImage("assets/track.jpg");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    player=createSprite(width/2,height-50,20,32);

}


function draw(){
background("white")
image(trackimg,0,-height*2,width,height*3);
drawSprites();
}