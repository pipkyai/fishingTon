const tg = window.Telegram.WebApp;

var startTime = Math.floor(Date.now() / 100);

window.onload = function() {
    callMe();
};

function callMe(){
    document.getElementById("username").textContent='Привет ' +  tg.initDataUnsafe?.user?.username;
}


function catchFish() {
    var catchTime = Math.floor(Date.now() / 100);
    var deltaTime = catchTime - startTime;
    // alert(deltaTime);
    if ((deltaTime > 143)&&(deltaTime<156)) {
        alert('Поймал!');
        stopCast();
    }else{
        alert('Не поймал');
        stopCast();
    }
}

function cast(){
    document.getElementById("rod").style.display="none";
    startTime = Math.floor(Date.now() / 100);
    document.getElementById("gif").style.display="block";
}

function stopCast(){
    document.getElementById("gif").src = "1.gif"+"?a="+Math.random();
    document.getElementById("gif").style.display="none";
    startTime = Math.floor(Date.now() / 100);
    document.getElementById("rod").style.display="block";
}


