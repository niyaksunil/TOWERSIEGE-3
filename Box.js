// created the Box class
class Box {

  constructor(x,y,width = 30, height = 40) {
    var options = {
      'restitution':0.3,
      'friction':0.5,
      'density':0.5,
      isStatic:false
    }

// created the rectangle body
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = Math.round(random(1,4));
    this.Visiblity = 255;
    World.add(world, this.body);

  }

// displaying the function 
  display(){
    var pos =this.body.position;

    push();
    // rectMode(CENTER);

// generate the random colours
    switch(this.color){
      case 1:
        fill(255,183,178);
        break;
      case 2:
        fill(255,218,193);
        break;
      case 3:
        fill(181,234,215);
        break;
      case 4:
        fill(199,206,234);
        break;
    }
   
// changing  the colour of the box 
    if(this.body.position.y > 390){
      fill("red");
    }

// reduction of visiblity when the speed is != 3
    if(this.body.position.y > 500){

      if(this.body.speed < 3){
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      }else{
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 3;
        tint(255,this.Visiblity);
      }

    }else{
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }

    pop();
  } 

// created the score function
  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++;
    }
  }
}
