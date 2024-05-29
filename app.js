const tg = window.Telegram.WebApp;


var startTime = Math.floor(Date.now() / 100);
var float = getFloat();


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

        }else{
        document.getElementById("rod").style.opacity = 1;
        var catchedTime = Math.floor(Date.now() / 100);
        alert(catchedTime - startTime);
        load();

    }
}


function load(){
    float = getFloat();
    document.getElementById("gif").src = "gifs/" + float[0];
    startTime = Math.floor(Date.now() / 100);
}


function getFloat(){
    const floats = ["1.gif/143/160", "2.gif/100/110"];
    const random = Math.floor(Math.random() * floats.length);
    const floatData = floats[random].split("/");
    return floatData;
}
