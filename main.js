video = "";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function start(){
    objectDetector = ml5.objectDetector("cocosd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
    video.play()
    video.speed(1);
    video.volume(0);
}

function pause(){
    video.pause();
    document.getElementById("status").innerHTML = "Status: Video Paused";

}

function stop(){
    video.stop()
    document.getElementById("status").innerHTML = "Status: Video Stopped";
}