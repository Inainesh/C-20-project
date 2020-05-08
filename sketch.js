var def,weight,speed;

var car1,car2,car3;
var wall;
var A,B,C;
var speed1,speed2,speed3;



function setup() {
  createCanvas(800,400);

  

   car1 = createSprite(100,380,10,10);
   car2 = createSprite(100,340,10,10);
   car3 = createSprite(100,300,10,10);

   wall = createSprite(800,400,10,800);


   
   weight =  random(400,1500);
   console.log(weight);

  speed1=random(55,90);
  console.log(speed1);
  car1.velocityX= speed1; 

  speed2=random(80,90);
  console.log(speed2);
  car2.velocityX= speed2;
  
  speed3=random(50,70);
  console.log(speed3);
  car3.velocityX= speed3;
}

function draw() {
  background(255,255,255); 
  
  
  
  
  

  A=deformation(car1,speed1);
  B=deformation(car2,speed2);
  C=deformation(car3,speed3);

  changeColor(A,car1);
  changeColor(B,car2);
  changeColor(C,car3);

  drawSprites();
}
function deformation(car1,speed1)
{
  if(car1.collide(wall)){
    car1.velocityX=0;
    def=(0.5*weight*speed1*speed1)/22500;
    
    return def;
  }
}
function changeColor(A,car1)
{
  //console.log(car1.velocityX);
  if(A<100)
  {
    car1.shapeColor=color(0,255,0);
    
  }
  else if((A>=100) && (A<=180))
  {
    car1.shapeColor=color(230,230,0);
  }
  else if (A>180)
  {
    car1.shapeColor=color(255,0,0);
  }
}