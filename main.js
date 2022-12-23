function preload(){

}
function setup(){
canvas = createCanvas(700,450);
canvas.center();
}
function draw(){
stroke("red");
fill("red");
circle(80,80,100);
circle(630,80,100);
circle(80,380,100);
circle(630,380,100);
stroke("green");
fill("green");
rect(130,65,450,20);
rect(130,370,450,20);
rect(85,100,20,300);
}
function take_snapshot(){
save("image.jpeg");
}