const keys = [
    [
        {
            content: ["~", "`"],
            code: "Backquote",
            type: "simple",
            ru: "Ё"
        },
        {
            content: ["!", "1"],
            code: "Digit1",
            type: "simple"
        },
        {
            content: ["@", "2"],
            code: "Digit2",
            type: "simple"
        },
        {
            content: ["#", "3"],
            code: "Digit3",
            type: "simple"
        },
        {
            content: ["$", "4"],
            code: "Digit4",
            type: "simple"
        },
        {
            content: ["%", "5"],
            code: "Digit5",
            type: "simple"
        },
        {
            content: ["^", "6"],
            code: "Digit6",
            type: "simple"
        },
        {
            content: ["&", "7"],
            code: "Digit7",
            type: "simple"
        },
        {
            content: ["*", "8"],
            code: "Digit8",
            type: "simple"
        },
        {
            content: ["(", "9"],
            code: "Digit9",
            type: "simple"
        },
        {
            content: [")", "0"],
            code: "Digit0",
            type: "simple"
        },
        {
            content: ["_", "-"],
            code: "Minus",
            type: "simple"
        },
        {
            content: ["+", "="],
            code: "Equal",
            type: "simple"
        },
        {
            content: "Backspace",
            code: "Backspace",
            type: "spec"
        }
    ],
    [
        {
            content: "Tab",
            code: "Tab",
            type: "spec"
        },
        {
            content: "Q",
            code: "KeyQ",
            type: "simple",
            ru: "Й"
        },
        {
            content: "W",
            code: "KeyW",
            type: "simple",
            ru: "Ц"
        },
        {
            content: "E",
            code: "KeyE",
            type: "simple",
            ru: "У"
        },
        {
            content: "R",
            code: "KeyR",
            type: "simple",
            ru: "К"
        },
        {
            content: "T",
            code: "KeyT",
            type: "simple",
            ru: "Е"
        },
        {
            content: "Y",
            code: "KeyY",
            type: "simple",
            ru: "Н"
        },
        {
            content: "U",
            code: "KeyU",
            type: "simple",
            ru: "Г"
        },
        {
            content: "I",
            code: "KeyI",
            type: "simple",
            ru: "Ш"
        },
        {
            content: "O",
            code: "KeyO",
            type: "simple",
            ru: "Щ"
        },
        {
            content: "P",
            code: "KeyP",
            type: "simple",
            ru: "З"
        },
        {
            content: ["{", "["],
            code: "BracketLeft",
            type: "simple",
            ru: 'Х'
        },
        {
            content: ["}", "]"],
            code: "BracketRight",
            type: "simple",
            ru: 'Ъ'
        },
        {
            content: ["|", '\\'],
            code: "Backslash",
            type: "simple"
        },
        {
            content: "Delete",
            code: "Delete",
            type: "spec"
        }
    ],
    [
        {
            content: "Caps Lock",
            code: "CapsLock",
            type: "spec"
        },
        {
            content: "A",
            code: "KeyA",
            type: "simple",
            ru: "Ф"
        },
        {
            content: "S",
            code: "KeyS",
            type: "simple",
            ru: "Ы"
        },
        {
            content: "D",
            code: "KeyD",
            type: "simple",
            ru: "В"
        },
        {
            content: "F",
            code: "KeyF",
            type: "simple",
            ru: "А"
        },
        {
            content: "G",
            code: "KeyG",
            type: "simple",
            ru: "П"
        },
        {
            content: "H",
            code: "KeyH",
            type: "simple",
            ru: "Р"
        },
        {
            content: "J",
            code: "KeyJ",
            type: "simple",
            ru: "О"
        },
        {
            content: "K",
            code: "KeyK",
            type: "simple",
            ru: "Л"
        },
        {
            content: "L",
            code: "KeyL",
            type: "simple",
            ru: "Д"
        },
        {
            content: [":", ";"],
            code: "Semicolon",
            type: "simple",
            ru: 'Ж'
        },
        {
            content: ['"', "'"],
            code: "Quote",
            type: "simple",
            ru: 'Э'
        },
        {
            content: "Enter",
            code: "Enter",
            type: "spec"
        }
    ],
    [
        {
            content: "Shift",
            code: "ShiftLeft",
            type: "spec"
        },
        {
            content: "Z",
            code: "KeyZ",
            type: "simple",
            ru: "Я"
        },
        {
            content: "X",
            code: "KeyX",
            type: "simple",
            ru: "Ч"
        },
        {
            content: "C",
            code: "KeyC",
            type: "simple",
            ru: "С"
        },
        {
            content: "V",
            code: "KeyV",
            type: "simple",
            ru: "М"
        },
        {
            content: "B",
            code: "KeyB",
            type: "simple",
            ru: "И"
        },
        {
            content: "N",
            code: "KeyN",
            type: "simple",
            ru: "Т"
        },
        {
            content: "M",
            code: "KeyM",
            type: "simple",
            ru: "Ь"
        },
        {
            content: ["<", ","],
            code: "Comma",
            type: "simple",
            ru: "Б"
        },
        {
            content: [">", "."],
            code: "Period",
            type: "simple",
            ru: "Ю"
        },
        {
            content: ["?", "/"],
            code: "Slash",
            type: "simple",
            ru: [",", "."]
        },
        {
            content: "Shift",
            code: "ShiftRight",
            type: "spec"
        }
    ],
    [
        {
            content: "Ctrl",
            code: "ControlLeft",
            type: "spec"
        },
        {
            content: "Win",
            code: "MetaLeft",
            type: "spec",
        },
        {
            content: "Alt",
            code: "AltLeft",
            type: "spec",
        },
        {
            content: " ",
            code: "Space",
            type: "spec",
        },
        {
            content: "Alt",
            code: "AltRight",
            type: "spec",
        },
        {
            content: "Ctrl",
            code: "ControlRight",
            type: "spec"
        },
        [
            {
                content: '&#9651;',
                code: "ArrowUp",
                type: "spec"
            },
            {
                content: '&#9665;',
                code: "ArrowLeft",
                type: "spec"
            },
            {
                content: '&#9661;',
                code: "ArrowDown",
                type: "spec"
            },
            {
                content: '&#9655;',
                code: "ArrowRight",
                type: "spec"
            }
        ]]
];

export default keys;