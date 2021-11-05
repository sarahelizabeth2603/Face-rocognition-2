//https://teachablemachine.withgoogle.com/models/qRNN5tgiC/

Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});

Webcam.attach("#Webcam");

function Take_snapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = "<img id='captured_image' src="+data_uri+">"

    });
}
console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qRNN5tgiC/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

function Check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}

function gotresult(error , result ){

    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("Person_name").innerHTML = result[0].label;
        document.getElementById("Person_Accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}

