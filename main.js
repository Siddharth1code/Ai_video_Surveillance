video="";
status="";
function perload()
{
    video=createVideo('video.mp4');
}
function setup()
{
    canvas=createCanvas(450,380);
    canvas.center();
    video.hide();
}
function draw()
{
    image(video,0,0,450,380);
}
function start()
{
    objectDectector=ml5.objectDectector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="STatus: Dectecting object";
}
function modelLoaded()
{
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}