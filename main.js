status="";
object=[];
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
function gotResults(error,results)
{
     if(error)
    {
        console.log("error");
    }
    console.log(results);
    object=results;
}
function draw()
{
    image(video,0,0,450,380);

    if(status!="")
{
    r=random(255);
    g=random(255);
    b=random(255);
    objectDetector.detect(video,gotResults);
    
    for(i=0;i<object.length;i++)
    {
        document.getElementById("status").innerHTML="Status: Object detected";
        document.getElementById("number_of_object").innerHTML="Number of person detected are "+object.length;
        fill(r,g,b);
        peresent=floor(object[i].confidence*100);
        text(object[i].label+" "+peresent+" % ",object[i].x+ 15, object[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(object[i].x ,object[i].y , object[i].width ,object[i].height);
    }
}
}
