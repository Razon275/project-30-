class Particle {
    constructor(x, y, r) {
      var options = {
          
          restitution:0.4,
          
      }
      
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      noStroke()
      rotate(angle);
      fill(this.color)
      ellipseMode(CENTER);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };