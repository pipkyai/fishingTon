const tg = window.Telegram.WebApp;

function callMe(){
    var welcome = 'Hello ' +  tg.initDataUnsafe?.user?.username
    alert(welcome);
}
