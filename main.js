 var SpeechRecognition=window.webkitSpeechRecognition;
 var recognition=new SpeechRecognition();
 var text_box=document.getElementById("textbox");

 function start(){
 text_box.innerHTML="";
 recognition.start ();   
 }

 recognition.onresult=function (event){
    console.log(event);
    var Content=event.results[0][0].transcript;
     text_box.innerHTML=Content;
    console.log(Content);
    if(Content=="capibara"){
        console.log("toma mi foto");
        speak();
    }
 }

 function speak (){
var synth=window.speechSynthesis;
speak_data="tomando tu foto chida en 5 segundos";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},5000);
 }
 Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
 });
 camera=document.getElementById("camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    
});
}

function save(){
link=document.getElementById("limk");
Image=document.getElementById("selfie_image").src;
link.href=image;
limk.click();
}