rightwristX=0;
leftwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ffb6c1');

    textSize(difference);
    fill('purple');
    text('Rose',50,400);
    textFont('Segoe UI')

}

function modelLoaded(){
    console.log("PoseNet is initiated");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX - rightwristX);

        console.log("LeftwristX="+leftwristX+"RightwristX="+rightwristX+"Difference="+difference);
    }
}

