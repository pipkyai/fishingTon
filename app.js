const tg = window.Telegram.WebApp;


var startTime = Math.floor(Date.now() / 100);
var float = getFloat();

if (window["Telegram"]) {
    window["Telegram"].WebApp.ready();
    window["Telegram"].WebApp.expand();
}

window.onload = function() {
    callMe();
    load();
};

function callMe(){
    document.getElementById("username").textContent='Привет ' +  tg.initDataUnsafe?.user?.username;
}


function klik() {
    var element = document.getElementById('rod'),
    style = window.getComputedStyle(element),
    opa = style.getPropertyValue('opacity');

    if (opa === "1") {
        document.getElementById("rod").style.opacity = 0;
        document.getElementById('fish').style.display = "none";

        }else{
        document.getElementById("rod").style.opacity = 1;
        var catchedTime = Math.floor(Date.now() / 100);
        var duration = catchedTime - startTime;
        // alert("гиф номер: " + float[0] + " " + duration + "ms. " );
        
        var x = (duration/float[2] - Math.floor(duration/float[2])).toFixed(2);
        if((x > (float[1]/float[2]))&&(x < 1)){
            counterIncrement();
        }else{
            // alert("Не поймал!");
        }
        load();
    }
}


function load(){
    float = getFloat();
    document.getElementById("gif").src = "gifs/" + float[0];
    startTime = Math.floor(Date.now() / 100);
}


function getFloat(){
    const floats = ["1.gif/148/160", "2.gif/98/110", "3.gif/78/97", "4.gif/78/90", "6.gif/57/67", "7.gif/109/130", "8.gif/64/80", "9.gif/110/133", "10.gif/54/66", "11.gif/95/110"];
    const random = Math.floor(Math.random() * floats.length);
    const floatData = floats[random].split("/");
    return floatData;
}

function counterIncrement(){

    var x = Number(document.getElementById("counter").textContent);
    var random = Math.floor(Math.random() * 20);
    x = x + random;
    document.getElementById("counter").textContent = x;
    document.getElementById("fish").textContent = " +карась " + random + "кг. ";
    document.getElementById('fish').style.display = "block";

}
