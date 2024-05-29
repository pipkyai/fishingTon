const tg = window.Telegram.WebApp;


var startTime = Math.floor(Date.now() / 100);
var float = getFloat();


window.onload = function() {
    callMe(); 
};

function callMe(){
    document.getElementById("username").textContent='Hi ' +  tg.initDataUnsafe?.user?.username;
}


function catchFish() {
    var catchTime = Math.floor(Date.now() / 100);
    var deltaTime = catchTime - startTime;
    // alert(deltaTime);
    if ((deltaTime > Number(float[1]))&&(deltaTime<Number(float[2]))) {
        alert('Поймал!');
        var counter = document.getElementById("counter").textContent;
        document.getElementById("counter").textContent = Number(counter) + 1;
        stopCast();
    }else{
        alert('Не поймал!');
        stopCast();
    }
}


function cast(){
    float = getFloat();
    document.getElementById("gif").src = "gifs/" + float[0] + "?a=" + Math.random();
    document.getElementById("gif").style.display="block";
    document.getElementById("rod").style.display="none";
    startTime = Math.floor(Date.now() / 100);
}

function stopCast(){
    document.getElementById("gif").src = "gifs/" + float[0] + "?a=" + Math.random();
    document.getElementById("gif").style.display="none";
    document.getElementById("rod").style.display="block";
}

function getFloat(){
    const floats = ["1.gif/143/160", "2.gif/100/110"];
    const random = Math.floor(Math.random() * floats.length);
    const floatData = floats[random].split("/");
    return floatData;
}
