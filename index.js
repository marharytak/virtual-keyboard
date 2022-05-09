import keys from "./keys.js";
import Keyboard from "./keyboard.js";

const keyboard = new Keyboard(keys);

window.onload = () => {
    keyboard.init();
}

// Local storage 
// function setLocalStorage() {
//     localStorage.setItem('lang', keyboard.lang);
// }
// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//     keyboard.lang = localStorage.getItem('lang');
//     keyboard.switchLang(keyboard.lang);
// }
// window.addEventListener('load', getLocalStorage);