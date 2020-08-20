class SlingShot{

    constructor(bodyA,point){
         var options={
             bodyA: bodyA,
             pointB: point,
             length:200,
             stiffness:0.1,
         }

         this.chain=Constraint.create(options)
    }

    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
        strokeWeight(4);

        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}