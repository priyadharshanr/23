class ComputerBase{
     constructor(x,y,w,h){
         this.image = loadImage("base1.png");
         this.x = x;
         this.y = y;
         this.w = w;
         this.h = h;
          
     }
     display(){
      ImageMode(CENTER)
      image(this.image, this.x, this.y, this.w, this.h);
     }
}