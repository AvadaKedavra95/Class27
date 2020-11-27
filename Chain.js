class Chain{
   constructor(bodyA,bodyB){
       var option = {
           bodyA : bodyA,
           bodyB : bodyB,
           length : 20,
           stiffness : 0.01
       }

       this.chain=Constraint.create(option);
       World.add(world,this.chain);

   }

   display(){
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
       strokeWeight(1);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
}