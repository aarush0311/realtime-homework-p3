nosex=0;
nosey=0;
leftwristX=0;
RightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}
function modelLoaded(){
    console.log("poseNet is intialised");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+" ,nosey="+nosey);
        leftwristX=results[0].pose.leftWrist.x;
        RightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-RightWristX);
        console.log("leftwristX="+leftwristX+" ,RightwristX="+RightWristX+" ,difference="+difference);
    }

}
function draw(){
    background("#0000FF");
    document.getElementById("font_side").innerHTML="width and height of the square will be ="+difference+"px";
    fill("#FF0000");
    stroke("#FF0000");
    square(nosex,nosey,difference);
}





