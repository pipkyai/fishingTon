function setThemeClass() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
}

Telegram.WebApp.onEvent('themeChanged', setThemeClass);
setThemeClass();
function callMe(){
    alert("Hello World!");
}
