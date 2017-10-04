var y=1;
var x=0;
var x1=1;
var y1=0;

while (y<=340){
  line(x,y,x1,y1);
       x1=x1+3;
       y=y+3;
}
while(y>=340){
  line(x,y,x1,y1);
    var y=340;
    x=x+3;
    var x1=340;
    y1=y1+3;
  }
