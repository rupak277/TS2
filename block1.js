class Block1{
    constructor(x,y,width,height){
        var options = {
            
            restituition: 0.4,
            friction:0.0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);

    }

    display(){
        if(this.body.speed<5)
      {
        this.body.display();
      }

      else
      {
        push();
        World.remove(world , this.body);
        this.Visiblity = this.Visiblity - 5;
        tint(255, this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50,50);
        pop();
       
      }
        var angle = this.body.angle;
        var pos= A
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
         
        fill(125,200,225);
        visualViewport.offsetLeft
        strokeWeight(1.5);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
     
        
    }
}