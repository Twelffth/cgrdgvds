Webcam.set({
width: 350,
height:300,
image_format:'png',
png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+ data_uri +'">';
    });

}
console.log("ml5vr",ml5.version);
classfier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", modelloaded);
function modelloaded(){
console.log("done");

}

function check () {
    img=document.getElementById("capture_image");
    classfier.classify(img,gotresult);

}

function gotresult(error,results){
    if (error) {
     console.error(error);   
    } else { 
        console.log(results);
        document.getElementById("result1").innerHTM=results[0].label;
        document.getElementById("result2").innerHTM=results[0].confidence.toFixed(3);
        
    }
}