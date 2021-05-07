var bgImg
    var catImg,mouseImg
    var parkImg
    var mouseImg1 , catImg1 , mouseImg2 , catImg2
    var LEFT_ARROW
 function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png")
    catImg = loadAnimation("images/cat4.png")
    mouseImg = loadAnimation("images/mouse1.png")
    parkImg = loadImage("images/garden.png")
    mouseImg1 = loadAnimation("images/mouse3.png")
    catImg1 = loadAnimation("images/cat2.png" , "images/cat3.png")
catImg2 = loadAnimation("images/cat1.png" )
mouseImg2 = loadAnimation("images/mouse2.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

garden = createSprite(500,400,1000,800)    
garden.addImage("park" , parkImg)

cat = createSprite(800,500,20,20)
cat.addAnimation("cat" , catImg)
cat.scale = 0.25
cat.debug = false
cat.setCollider("rectangle" , 0,0,600,1000)

mouse = createSprite(200,500,20,20)
mouse.addAnimation("mouse" , mouseImg)
mouse.scale = 0.25
mouse.debug = false
mouse.setCollider("rectangle",0,0,600,1000)
}

function draw() {

    if(cat.isTouching(mouse)){
        cat.addAnimation("happyCat" , catImg2)
        cat.changeAnimation("happyCat")
        mouse.addAnimation("happyMouse" , mouseImg2)
        mouse.changeAnimation("happyMouse")
        cat.velocityX = 0
    }

    background(255);
    //Write condition here to evalute if tom and jerry collide
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("LEFT_ARROW")){
  mouse.addAnimation("mousey" , mouseImg1)
mouse.changeAnimation("mousey" )
cat.addAnimation("tom", catImg1)
cat.changeAnimation("tom")
cat.velocityX = -4
console.log("mouse")





}
}
