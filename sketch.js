const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var boy;
var mango,boyImage,tree,treeImage,Stone,sling ;

function preload(){
    boyImage=loadImage("sprites/boy.png")
    treeImage=loadImage("sprites/tree.png")
    
	}


function setup(){
	
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    var boy_options ={
        isStatic: true
    }

    boy = Bodies.rectangle(100,330,80,200,boy_options);
    World.add(world,boy)

    
    tree = Bodies.rectangle(500,200,300,300,boy_options);
    World.add(world,tree);

  
	

    Stone= new stone(200,200)


    

   

}

function draw(){
    background(225);
    Engine.update(engine);
    rectMode(CENTER);
    fill("yellow");
	image(boyImage,boy.position.x,boy.position.y,80,200);
    Stone.display();
    sling.display();
	image(treeImage,tree.position.x,tree.position.y,300,300);


	
}






