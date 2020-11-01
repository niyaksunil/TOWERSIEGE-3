// created the Polygon class
class Polygon {
  constructor(x,y,radius) {
    var options = {
      'restitution':0.3,
      'friction':0.5,
      'density':0.5,
      isStatic:false
    }
  
// created the circle body
    this.body = Bodies.circle(x,y,radius,options);
    this.width = 50;
    this.height = 50;
    this.radius = radius;
    this.image = loadImage("polygon.png");
    World.add(world, this.body);

  }
 
//  displaying the function
  display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    fill("pink")
    image(this.image, pos.x, pos.y, this.width,this.height);
    pop();
    }

}