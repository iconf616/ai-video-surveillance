
status="";
function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(480,380);
}
function draw()
{
    image(video,0,0,480,380);
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Model Detecting Objects";
    object_name=document.getElementById("object_name").value;

}
function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}