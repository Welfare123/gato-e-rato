var catimg1, catimg2, catimg3, cat;
var mouse, mouseimg1,mouseimg2,mouseimg3;
var garden,tela;
function preload() {
catimg1=loadAnimation("cat1.png");
catimg2=loadAnimation("cat2.png","cat3.png");
catimg3=loadAnimation("cat4.png");
 
mouseimg1=loadAnimation("mouse1.png");
mouseimg2=loadAnimation("mouse2.png","mouse3.png");
mouseimg3=loadAnimation("mouse4.png");

garden=loadImage("garden.png");

}

function setup(){
    tela=createCanvas(1000,800);
mouse=createSprite(200,600);
cat=createSprite(870,600);
mouse.addAnimation("ratosentado",mouseimg1);
cat.addAnimation("gato",catimg1);
cat.scale=0.2;
mouse.scale=0.2;
}

function draw() {

    background(garden);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
    cat.addAnimation("gatoColidiu",catimg3);
    cat.changeAnimation("gatoColidiu");
    cat.x=300;
    
    
    mouse.addAnimation("ratoColidiu",mouseimg3);
    mouse.changeAnimation("ratoColidiu");
    }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
mouse.addAnimation("ratoProvocando",mouseimg2);
mouse.changeAnimation("ratoProvocando");
mouse.frameDelay = 25;


cat.velocityX= -5;
cat.addAnimation("gatoAndando",catimg2);
cat.changeAnimation("gatoAndando");

  }
}
