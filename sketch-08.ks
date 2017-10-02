var x=10;
var y=10
var h=5;
var w=5;

while (y<=330){
	ellipse(x,y,h,w);
  y=y+15;
  if(y>=330){
    y=10;
    x=x+10;
  }
}
