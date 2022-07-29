img = "";
status = "";

function modelLoaded(){
    console.log("Model Loaded");
    satus = "true";
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function preload()
{
img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas= createCanvas(640, 420);
    canvas.centre();    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640,420);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text ("cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}