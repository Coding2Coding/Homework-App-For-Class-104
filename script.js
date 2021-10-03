Webcam.set({
    width: 290, 
    height: 290, 
    image_format: 'png', 
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach(camera);

function takePicture() {
    Webcame.snap(function (clickedPictures) {
        document.getElementById("picture").innerHTML = "<img id='clickedPicture' src='"+clickedPictures+"'>";
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W_oS1pVdv/model.json", modelLoaded);

function modelLoaded() {
    console.log("model is loaded successfully");
}