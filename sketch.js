const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine,world;

function setup(){
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    background(221);
    
}