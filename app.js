const tg = window.Telegram.WebApp;


window.onload = function() {
    callMe();
};

function callMe(){
    document.getElementById("username").textContent='Привет ' +  tg.initDataUnsafe?.user?.username;
}

function catchFish() {
    alert("Ты поймал рыбу!");
}






