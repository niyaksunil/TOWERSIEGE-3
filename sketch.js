// created the constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// created the variables
var ground;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,
block14,block15,block16;
var block01,block02,block03,block04,block05,block06,block07;
var polygon;
var backgroundImg,bg;
var score = 0;

// created the preload function
function preload() {
  getBackgroundImage();
}

function setup(){
  createCanvas(948,600);
  
// created the engine and the world
  engine = Engine.create();
	world = engine.world;

// created the ground and the stands 
  ground = new Ground(474,592,948,20);
  stand1 = new Ground(378,389,307,10);
  stand2 = new Ground(769,220,200,10);

// created the blocks 
  block1 = new Box(330,253);
  block2 = new Box(360,253);
  block3 = new Box(390,253);
  block4 = new Box(420,253);
  block5 = new Box(450,253);
  block6 = new Box(480,253);
  block7 = new Box(300,253);

  block8 = new Box(330,195);
  block9 = new Box(360,195);
  block10 = new Box(390,195);
  block11 = new Box(420,195);
  block12 = new Box(450,195);

  block13 = new Box(360,311);
  block14 = new Box(390,311);
  block15 = new Box(420,311);

  block16 = new Box(390,369);

  block01 = new Box(730,188);
  block02 = new Box(760,188);
  block03 = new Box(790,188);
  block04 = new Box(820,188);

  block05 = new Box(760,130);
  block06 = new Box(790,130);

  block07 = new Box(775,72);

// created the polygon and chain
  polygon = new Polygon(146,195,24);
	chain = new SlingShot(polygon.body,{x:146,y:195});

  Engine.run(engine);
  
}

function draw() {
  background(255,185,151);  

// calling the backgroundImg
  if(backgroundImg){
    background(backgroundImg);
  }
  
// displaying the text "Score"
  fill(226,219,247);
  textSize(28);
  text("Score:"+ score,689,40);
  

// displaying the variables and obtaining the score
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block01.display();
  block01.score();
  block02.display();
  block02.score();
  block03.display();
  block03.score();
  block04.display();
  block04.score();
  block05.display();
  block05.score();
  block06.display();
  block06.score();
  block07.display();
  block07.score();

  polygon.display();
  chain.display();

  drawSprites();
}

// created the function mouseDragged
function mouseDragged(){
	
  Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});

}
  
// created the function mouseReleased
function mouseReleased(){

  chain.fly(); 

}

// created the function keyPressed
function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(polygon.body,{x:146,y:195});
    chain.attach(polygon.body);
  }
} 

// created the async function getBackgroundImage
async function getBackgroundImage(){

// fetching the response 
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    // var response = await fetch("http://worldclockapi.com/api/json/est/now");

    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

// displaying the background of day and night
    if(hour >= 06 && hour <= 18){
      bg = "images/bg_day.png";
    }else{
      bg = "images/bg_night.jpg";
    }

    backgroundImg = loadImage(bg);
}

