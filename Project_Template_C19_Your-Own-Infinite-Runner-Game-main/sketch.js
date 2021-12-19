var spaceImg, space;
var asteroidImg, asteroid;
var spaceshipImg, spaceship;
var isTouching
var score = 0


function preload(){
  spaceshipImg = loadImage("clipart4227203.png")
  spaceImg = loadImage("download.jpg")
  asteroidImg = loadImage("kisspng-asteroid-sprite-clip-art-asteroid-png-photos-5a77e8ec80cf24.6423515815178078525276.jpg")
}

function setup() {
  createCanvas(600, 600);
  
  //space = createSprite(300,300)
  //space.addImage("space",spaceImg)
  //space.scale = 4

  spaceship = createSprite(300,550)
  spaceship.addImage("spaceship",spaceshipImg)
  spaceship.scale = .1

  score = 0;

  function spawnAsteroids() {
 
    if (frameCount % 5 === 0) {
      var asteroid = createSprite(300,300,40,10);
      asteroid.y = Math.round(random(0,100));
      asteroid.x = Math.round(random(0,600));
      asteroid.addImage(asteroidImg);
      asteroid.scale = 0.1;
      asteroid.velocityY = 10;
      
   
      asteroid.lifetime = 200;
      
    
      asteroid.depth = spaceship.depth;
      spaceship.depth = spaceship.depth + 1;
  
      
     
     
    }
    if (spaceship.isTouching(asteroid)){
      score = 0
    }
  }
  
}

function draw() {
  background(200);
  spaceship.x = World.mouseX;
  text("Score: "+ score, 500,500);
  
  score = score + Math.round(getFrameRate()/60);

  if (spaceship.isTouching(asteroid)){
    score = 0
  }
   spawnAsteroids()
    drawSprites()
}



