function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    s=window.speechSynthesis;
    }
    function preload(){
        classifier=ml5.imageClassifier("DoodleNet");
    }
    function draw(){
        strokeWeight(13);
        stroke(0);
        if(mouseIsPressed){
         line(pmouseX,pmouseY,mouseX,mouseY);
        }
    }
    function classifyCanvas(){
        classifier.classify(canvas,gotresult);
    }
    function gotresult(error,result){
        if (error){
            console.error(error);
        }
        console.log(result);
    document.getElementById("label").innerHTML="label:"+result[0].label;
    document.getElementById("confidence").innerHTML="confidence:"+Math.round(result[0].confidence*100)+"%";
    utterthis=new SpeechSynthesisUtterance(result[0].label);
    s.speak(utterthis);
    }
    function clearcanvas(){
        background("white");
    }