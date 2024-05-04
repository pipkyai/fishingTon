const tg = window.Telegram.WebApp;


function callMe(){
    var welcome = 'Привет ' +  tg.initDataUnsafe?.user?.username
    alert(welcome);
}

function catchFish() {
    alert("Ты поймал рыбу!");
}
