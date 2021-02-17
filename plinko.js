class Plinko{
    constructor(x,y){
   var options = {
   isStatic : true,
   restitution : 0.1,
   friction : 0.5,
   density : 1.2
   
      }
      this.r=15
    
    this.body=Bodies.circle(x,y,this.r,options)
    
   
    World.add(world,this.body);
    
    }
   display(){
      push();
      
   translate(this.body.position.x,this.body.position.y)
   fill("white")
   ellipse(0,0,this.r,this.r)
   pop();
  
   }
}