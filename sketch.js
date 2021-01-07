var cat, catImage
var mouse, mouseImage
var background, backgroundImage

function preload() {
    //load the images here
    catImage = loadAnimation("tomOne.png,tomTwo.png,tomThree.png,tomFour.png");
    mouseImage = loadAnimation("jerryOne.png,jerryTwo.png,jerryThree.png,jerryFour.png");
    backgroundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700);
    cat.addAnimation("catImage");

    mouse = createSprite(200,700);
    mouse.addAnimation("mouseImage");

    background = createSprite(500,400,1000,800);
    background.addImage("backgroundImage");

}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
