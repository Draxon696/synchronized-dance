const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball, ball2, ball3, ball4, rope, rope2, rope3, rope4

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  ball = new Ball(500, 200, 80, 80);
  ball2 = new Ball(600, 200, 80, 80);
  ball3 = new Ball(700, 200, 80, 80);
  ball4 = new Ball(800, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });
  rope2 = new Rope(ball2.body, { x: 600, y: 50 });
  rope3 = new Rope(ball3.body, { x: 700, y: 50 });
  rope4 = new Rope(ball4.body, { x: 800, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


