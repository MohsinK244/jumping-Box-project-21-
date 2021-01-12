var canvas;
var surfaceRed;
var surfaceBlue;
var surfacePurple;
var surfaceYellow;
var box;
var music;
var wall1 , wall2 , wall3 , wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    surfaceRed = createSprite(90,580,160,20);
    surfaceRed.shapeColor = 'red';
    surfaceBlue = createSprite(290,580,160,20);
    surfaceBlue.shapeColor = 'Blue';
    surfacePurple = createSprite(490,580,160,20); 
    surfacePurple.shapeColor = 'Purple';
    surfaceYellow = createSprite(690,580,160,20);
    surfaceYellow.shapeColor = 'Yellow';

    wall1 = createSprite(798,300,5,600);
    wall1.shapeColor = 'cyan';
    wall2 = createSprite(400,598,800,5);
    wall2.shapeColor = 'cyan';
    wall3 = createSprite(400,2,800,5);
    wall3.shapeColor = 'cyan';
    wall4 = createSprite(2,300,5,600);
    wall4.shapeColor = 'cyan';

    //create box sprite and give velocity
    box = createSprite(380,40,40,40);
    box.shapeColor = 'white';
    box.velocityX = 2;
    box.velocityY = 2;
    
    
}

function draw() {
    background('cyan');
    
    
    if(surfaceRed.isTouching(box)&& box.bounceOff(surfaceRed)){
         box.shapeColor = 'red';
     }
    if(surfaceBlue.isTouching(box)&& box.bounceOff(surfaceBlue)){
        box.shapeColor = 'Blue';
    }
    if(surfacePurple.isTouching(box)&& box.bounceOff(surfacePurple)){
        box.shapeColor = 'Purple';
    }
    if(surfaceYellow.isTouching(box)&& box.bounceOff(surfaceYellow)){
        box.shapeColor = 'Yellow';
    }
   
    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);
    box.bounceOff(wall4);
    
  drawSprites();
}
