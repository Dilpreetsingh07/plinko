const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies

var particles = [];
var plinkos = [];
var plinko;


function setup() {
  createCanvas(700,800);
  engine = Engine.create();
	world = engine.world;
  stick1= new Stick(2,700,10,300);
  stick2= new Stick(150,700,10,300);
  stick3= new Stick(320,700,10,300);
  stick4= new Stick(500,700,10,300);
  stick5= new Stick(693,700,10,300);
  ground = new Stick(350,790,700,10);
 


      
for (var j =70;j  <=width;j=j+50){

plinkos.push(new Plinko(j,75))


}
for (var j =40;j  <=width-10;j=j+50){

  plinkos.push(new Plinko(j,175))
  
  
  }
  for (var j =70;j  <=width;j=j+50){

    plinkos.push(new Plinko(j,275))
    
    
    }
    for (var j =40;j  <=width-10;j=j+50){

      plinkos.push(new Plinko(j,375))
      
      
      } 
     
   

console.log(plinkos)
  Engine.run(engine);
}

function draw() {
  background("black"); 
  stick1.display(); 
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  ground.display();
  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
  }
  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  drawSprites();
}
