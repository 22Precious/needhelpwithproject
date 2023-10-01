function preload(){

}
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();


}

function draw(){
    image(video,0,0,640,480);
    circle(0, 640, 40);
    circle(640,480, 40);
    circle(0, 480, 40);
    circle(480, 640, 40);


}

function take_snapshot(){
    save('hooray.png');
}