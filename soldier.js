class soldier{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
          
            
        }
        this.body=Bodies.rectangle(x,y,250,250,options);
        this.width=250;
        this.height=250;
        this.image=loadImage("soldier.png")
        World.add(world,this.body);
          //this.image=loadImage("bullet.png");
          //this.body=Bodies.rectangle(x+50,y,50,50);
          //World.add(world,this.body);


    }
display(){
   var x=this.body.position.x;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);

    


    //if(keyCode===32){
   //     image(this.image,x+50,0,50,50);
   // }
   
    pop();

   
}
right(){
    this.body.position.x+=3   
}

}