
Webcam.set({
    width:360,
    height:251,
    image_format:"png",
    png_quality:90


}) 


function takesnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="image"src="'+data_url+'">'
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ddoOzhcvm/model.json",model_loaded)



    
function speakk() {
    var api = window.speechSynthesis;
    data = "taking your selfie in 5 seconds" 
    var audio = new SpeechSynthesisUtterance(data)
    api.speak(audio)
Webcam.attach("#camera")
setTimeout(function(){
    takesnapshot()
    save()
},5000)

}


function model_loaded(){
    classifier.classify(gotResult)

    console.log("model is loaded")
}

function gotResult(error,result){

    if(error){
        console.error(error)
    }
    else{document.getElementById("model_name").innerHTML=result[0].label
    document.getElementById("model_gesture").innerHTML=result[0].confidence
}



}

function check(){
    img=document.getElementById("image")
    classifier.classify(gotResult)


}