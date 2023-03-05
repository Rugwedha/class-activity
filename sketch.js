const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var gift1

function preload(){
  bgImg = loadImage("assets/bg.jpeg")
}

function setup() {
  createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world;
  
  tree = createImg("assets/tree.png");
  tree.position(150,-20)
  tree.size(700,500)
  
  gift1 = new Gifts(950,450,100,100)
  gift2 = new Gifts(700,550,100,100)
  gift3 = new Gifts(300,550,100,100)
  gift4 = new Gifts(50,450,100,100)

  star1 = new Stars(488,45,85,80)
  star2 = new Stars(145,200,60,60)
  star3 = new Stars(190,200,60,60)
  star4 = new Stars(167,231,60,60)

  star5 = new Stars(779,200,60,60)
  star6 = new Stars(825,200,60,60)
  star7 = new Stars(801,231,60,60)
}


function draw() {
  background(bgImg);
  Engine.update(engine);
   gift1.show()
   gift2.show()
   gift3.show()
   gift4.show()

   star1.show()
   star2.show()
   star3.show()
   star4.show()

   star5.show()
   star6.show()
   star7.show()

}

