const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground,pig1,log1,pig2,log2,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,300,50,50);
    box2 = new Box(850,300,50,50);
    box3 = new Box(1000,220,50,50);
    box4 = new Box(850,220,50,50);
    ground = new Ground(600,390,1200,10);
    pig1= new Pig(925,320);
    log1= new Log(920,250,240,PI/2);
    pig2= new Pig(925,220);
    log2= new Log(920,190,240,PI/2);
    box5 = new Box(925,150,50,50);
    log3= new Log(950,160,85,-PI/5);
    log4= new Log(905,160,85,PI/5);
    bird1= new Bird(400,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}    