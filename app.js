const tg = window.Telegram.WebApp;


window.onload = function() {
    callMe();
};

function callMe(){
    document.getElementById("username").textContent='Привет ' +  tg.initDataUnsafe?.user?.username;
}

function catchFish() {
    var video = document.getElementById('video');
    let dur = video.duration;
    let cur = video.currentTime;
    if ((dur-cur)<1){
        alert("Ты поймал рыбу!")
    }else{
        alert("Ты ничего не поймал!")
    }
}


