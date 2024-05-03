const tg = window.Telegram.WebApp;

function callMe(){
    alert("Hello World!");
    alert(tg.initDataUnsafe?.user?.username);
}
