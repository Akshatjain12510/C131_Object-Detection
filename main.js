function setup(){
    canvas= createCanvas(640,420) ;
    canvas.center();
}
img="";

function preload(){
img=loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",90,90);
    stroke("#FF0000");
    noFill();
    rect(80,80,300,300);
    
}
