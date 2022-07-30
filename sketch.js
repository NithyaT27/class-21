var person ,person_running
function preload(){

}

function setup() {
createCanvas(600,200)

person = createSprite(100,100,20,20)
}

function draw() {
 background("white")
}

ground = createSprite(200,180,400,20)

function draw(){
  background("white") 
}

if(keyDown("space")) {
  person.velocityY = -10
}

person.velocityY = trex.velocityY + 0.8


person.collide(ground)
drawSprites()


