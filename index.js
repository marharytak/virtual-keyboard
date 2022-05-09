import keys from "./keys.js";
import Keyboard from "./keyboard.js";

const keyboard = new Keyboard(keys, localStorage.getItem('lang') || 'en');

window.onload = () => {
    keyboard.init();
}

// Local storage 
function setLocalStorage() {
    localStorage.setItem('lang', keyboard.lang);
}
window.addEventListener('beforeunload', setLocalStorage);