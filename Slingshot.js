// created the Slingshot class
class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            'restitution' : 0.8,
            'stiffness':0.10,
        }

// created the sling constraint
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

// removing the constraint 
    fly(){
        this.sling.bodyA = null; 
    }

//  displaying the function
    display(){
        if(this.sling.bodyA ){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
       
    }

// attaching the body with sling again 
    attach(polygon){
        this.sling.bodyA = polygon;
    }

}

