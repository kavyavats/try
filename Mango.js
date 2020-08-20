class Mango {
    constructor(x, y) {
 
    
      this.body = Bodies.circle(x, y, 20);
      this.radius = 20;
  
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
    
      fill("red");
      circle(pos.x, pos.y , this.radius*2);
      
    }
  };