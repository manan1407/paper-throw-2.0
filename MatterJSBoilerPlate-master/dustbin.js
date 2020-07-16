class dustbin {
    
    constructor(x,y,width,height){
      this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
      this.hieght = height;
      this.width = width;
      //this.image = loadImage();
       World .add(world,this.body);
    }

     display(){
         var position = this.body.position;
         push ();
         
         rectMode(CENTER);
         fill ("green");
         rect(position.x,position.y,this.hieght,this.width,{friction:1});
         // imageMode(CENTER);
         //image (this.image,x,y,this.width,this.height);
         pop ();
     }
}