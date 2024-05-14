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
        alert('Поймал!')
    }else{
        alert('Не поймал!')
    }
}


