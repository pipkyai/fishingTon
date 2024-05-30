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
        document.getElementById('increment').style.display = "none";

        }else{
        document.getElementById("rod").style.opacity = 1;
        var catchedTime = Math.floor(Date.now() / 100);
        var duration = catchedTime - startTime;
        // alert("гиф номер: " + float[0] + " " + duration + "ms. " );
        
        var x = (duration/float[1] - Math.floor(duration/float[1])).toFixed(2);
        if((x > 0.9)&&(x < 1)){
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
    const floats = ["1.gif/150/160", "2.gif/101/109", "3.gif/85/97", "4.gif/84/92", "6.gif/59/67", "7.gif/115/133", "8.gif/70/81", "9.gif/121/132", "10.gif/55/63", "11.gif/100/113"];
    const random = Math.floor(Math.random() * floats.length);
    const floatData = floats[random].split("/");
    return floatData;
}

function counterIncrement(){

    var x = Number(document.getElementById("counter").textContent);
    x++;
    document.getElementById("counter").textContent = x;
    document.getElementById('increment').style.display = "block";

}
