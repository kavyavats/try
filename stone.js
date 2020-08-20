class stone{
    constructor(x,y){
          this.body=Bodies.rectangle(x,y,20,20)
          this.width=20
          this.height=20

          this.image=loadImage("sprites/stone.png")

          World.add(world,this.body)

    }

    display(){
        
            var pos =this.body.position;
            
          
            fill("red");
            image(this.image,pos.x, pos.y ,this.width,this.height);
            
          
        
    }
}