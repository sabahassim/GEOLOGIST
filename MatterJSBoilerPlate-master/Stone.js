class Stone {
    constructor(x, y, width, height) {
      var options = {
        'density':1,
        'friction':5,
        'restitution':0.3  
      };

      this.body = Bodies.circle(x, y, options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      pop();
    }
  };