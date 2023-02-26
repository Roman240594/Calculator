const btns = document.querySelector('.buttons');
const display = document.querySelector('.display');

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const sings = ['+', '-', '*', '/'];

let a = '';
let b = '';
let sign = '';
let finish = false;

let showResult = () => {
    let key = event.target.textContent;
    if (numbers.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            cutNum(a);
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            display.innerText = b;
            cutNum(b);
        } else {
            b += key;
            display.innerText = b;
            cutNum(b);
        }
        return;
    }

    if (sings.includes(key)) {
        sign = key;
        display.innerText = sign;
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case ('+'):
                a = (+a) + (+b);
                break;
            case ('-'):
                a = (+a) - (+b);
                break;
            case ('*'):
                a = (+a) * (+b);
                break;
            case ('/'):
                if (b === '0') {
                    display.innerText = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = (+a) / (+b);
                break;
        }

        finish = true;
        cutNum(a);
        console.log(a);
    }
};

function cutNum(a) {
    a = String(a);
    (a.length < 14) ? display.innerText = a: display.innerText = a.slice(0, 15)
}

btns.addEventListener('click', showResult);