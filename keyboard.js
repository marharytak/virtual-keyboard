export default class Keyboard {

    constructor(keys) {
        this.value = '';
        this.isCapsOn = false;
        this.isShiftPressed = false;
        this.lang = 'en';
        this.keys = keys;
    }

    init() {
        document.querySelector('body').innerHTML += `
        <main class="main">
            <div class="container">
                <h1>Virtual keyboard</h1>
                <h2>The keyboard was created in the Linux operating system</h2>
                <h2>To switch the language use combination: left CTRL + ALT</h2>
                <textarea name="" id="" cols="100" rows="10" autofocus></textarea>
                <div class="keyboard-container"></div>
            </div>
        </main>`

        for (let i = 0; i < this.keys.length; i++) {
            this._append(this.keys[i], i);
        }

        this._addBtnEL();
    }

    switchLang() {
        const newLang = this.lang === 'en' ? 'ru' : 'en';
        if (newLang !== this.lang) {
            this.lang = newLang;
            for (let line = 0; line < this.keys.length; line++) {
                for (let key = 0; key < this.keys[line].length; key++) {
                    if (Object.prototype.hasOwnProperty.call(this.keys[line][key], 'ru')) {
                        const btn = document.querySelector(`button[data-code="${this.keys[line][key].code}"]`);
                        const txt = this.lang === 'ru' ? this.keys[line][key].ru : this.keys[line][key].content;
                        if (Array.isArray(txt)) {
                            btn.innerHTML = `<sup>${txt[0]}</sup>`;
                            btn.innerHTML += `${txt[1]}`;
                        } else {
                            btn.innerHTML = `${txt}`;
                        }
                    }
                }
            }
        }
    }

    _addBtnEL() {
        const textarea = document.querySelector('textarea');

        document.querySelectorAll('button').forEach(btn => btn.addEventListener('mousedown', () => {
            btn.classList.add('active');
            this._handleBtn(btn);
        }));

        document.querySelectorAll('button').forEach(btn => btn.addEventListener('mouseup', () => {
            setTimeout(() => btn.classList.remove('active'), 250);
            if (btn.getAttribute('data-code') === 'ShiftLeft' || btn.getAttribute('data-code') === 'ShiftRight') {
                this.isShiftPressed = false;
            }
            textarea.focus();
        }));

        document.addEventListener('keydown', (event) => {
            const btns = document.querySelectorAll('button');
            const activeBtn = [...btns].filter(btn => btn.getAttribute('data-code') === event.code)[0];
            activeBtn.classList.add('active');
            if (event.code !== 'F12' && event.code !== 'F5') {
                event.preventDefault();
            }
            if (event.altKey && event.ctrlKey) {
                this.switchLang();
            } else {
                this._handleBtn(activeBtn);
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') { this.isShiftPressed = false; }
            document.querySelector(`button[data-code="${event.code}"]`).classList.remove('active');
        });
    }

    _append(data, i) {
        const container = document.querySelector('.keyboard-container');
        container.innerHTML += `<div class="row row-${i}"></div>`;
        const rowContainer = document.querySelector(`.row-${i}`);
        for (let i = 0; i < data.length; i++) {
            if (Array.isArray(data[i])) {
                const arrowsContainer = document.createElement('div');
                const arrowsTop = document.createElement('div');
                const arrowsBottom = document.createElement('div');

                rowContainer.append(arrowsContainer);
                arrowsContainer.append(arrowsTop);
                arrowsContainer.append(arrowsBottom);

                arrowsContainer.classList.add('arrows-container');
                arrowsTop.classList.add('arrows-top');
                arrowsBottom.classList.add('arrows-bottom');
                for (let j = 0; j < data[i].length; j++) {
                    const arrowBtn = document.createElement('button');
                    arrowBtn.setAttribute('data-code', data[i][j].code);
                    arrowBtn.innerHTML += `${data[i][j].content}`;
                    arrowBtn.classList.add(`btn-${data[i][j].type}`);
                    j > 0 ? arrowsBottom.append(arrowBtn) : arrowsTop.append(arrowBtn);
                }
            } else {
                const btn = document.createElement('button');
                btn.setAttribute('data-code', data[i].code);

                if (Array.isArray(data[i].content)) {
                    btn.innerHTML += `<sup>${data[i].content[0]}</sup>`;
                    btn.innerHTML += `${data[i].content[1]}`;
                } else {
                    btn.innerHTML += `${data[i].content}`;
                }
                btn.classList.add(`btn-${data[i].type}`);
                if (data[i].code === 'Space') { btn.classList.add('space'); }
                rowContainer.append(btn);
            }
        }
    }

    _handleBtn(btn) {
        const textarea = document.querySelector('textarea');
        const txtAreaLen = textarea.value.split('\n')[0].length || textarea.value.split('\r\n')[0].length;
        const position = this._getCaretPosition(textarea);
        const txtLeft = textarea.value.substring(0, position.start);
        const txtRight = textarea.value.substring(position.start);
        console.log(textarea.value.split('\n'))
        switch (btn.getAttribute('data-code')) {
            case 'Enter':
                console.log(position)
                textarea.value = txtLeft + '\n' + txtRight;
                this._setCaretPosition(textarea, position.start + 1, position.end + 1);
                break;
            case 'Space':
                textarea.value = txtLeft + ' ' + txtRight;
                this._setCaretPosition(textarea, position.start + 1, position.end + 1);
                break;
            case 'Tab':
                textarea.value = txtLeft + '    ' + txtRight;
                this._setCaretPosition(textarea, position.start + 4, position.end + 4);
                break;
            case 'Backspace':
                textarea.value = textarea.value.substring(0, position.start - 1) + txtRight;
                this._setCaretPosition(textarea, position.start - 1, position.end - 1);
                break;
            case 'Delete':
                textarea.value = txtLeft + textarea.value.substring(position.start + 1);
                this._setCaretPosition(textarea, position.start, position.end);
                break;
            case 'CapsLock':
                this.isCapsOn = !this.isCapsOn;
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.isShiftPressed = true;
                break;
            case 'AltLeft':
            case 'AltRight':
            case 'ControlLeft':
            case 'ControlRight':
            case 'MetaLeft':
                break;
            case 'ArrowLeft':
                this._setCaretPosition(textarea, position.start - 1, position.end - 1);
                break;
            case 'ArrowRight':
                this._setCaretPosition(textarea, position.start + 1, position.end + 1);
                break;
            case 'ArrowUp':
                this._setCaretPosition(textarea, position.start - txtAreaLen - 1, position.end - txtAreaLen - 1);
                break;
            case 'ArrowDown':
                this._setCaretPosition(textarea, position.start + txtAreaLen + 1, position.end + txtAreaLen + 1);
                break;
            default:
                if (position.end === textarea.value.length) {
                    if (btn.textContent.length > 1 && btn.classList.contains('btn-simple')) {
                        const key = btn.textContent.split('');
                        textarea.value += this.isCapsOn || this.isShiftPressed ? key[0] : key[1];
                    } else {
                        textarea.value += this.isCapsOn || this.isShiftPressed ? btn.textContent : btn.textContent.toLowerCase();
                    }
                } else {
                    let btnTxt = '';
                    if (btn.textContent.length > 1 && btn.classList.contains('btn-simple')) {
                        const key = btn.textContent.split('');
                        btnTxt = this.isCapsOn || this.isShiftPressed ? key[0] : key[1];
                    } else {
                        btnTxt = this.isCapsOn || this.isShiftPressed ? btn.textContent : btn.textContent.toLowerCase();
                    }
                    const posBackSp = this._getCaretPosition(textarea);
                    const strBackSp = textarea.value.substring(0, posBackSp.start) + btnTxt + textarea.value.substring(posBackSp.start);
                    textarea.value = strBackSp;
                    this._setCaretPosition(textarea, posBackSp.start + 1, posBackSp.end + 1);
                }
                break;

        }
    }

    _getCaretPosition(ctrl) {
        if (ctrl.selectionStart || ctrl.selectionStart == '0') {
            return {
                'start': ctrl.selectionStart,
                'end': ctrl.selectionEnd
            };
        } else {
            return {
                'start': 1,
                'end': 1
            };
        }
    }

    _setCaretPosition(ctrl, start, end) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(start, end);
        }
    }
}