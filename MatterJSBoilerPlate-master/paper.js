class paper {

    constructor(x,y){
        this.body = Bodies.circle(x,y,20,{isStatic:false,restitution:0.3,density:1.2});
        this.radius = 25;
        //this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
       var position = this.body.position

        push ();
        rectMode(CENTER);
        fill ("red");
        circle(position.x,position.y,this.radius);
       // imageMode (CENTER);
        //image (this.image,0,0,70)
        pop ();
    }
}