
// is it failed?
let inputValue = document.querySelector('.currentInput');
let outputValue = document.querySelector('.currentOutput');
let button = document.querySelectorAll('button');
// let number = document.classList('c_btn');
// let op = document.classList('c_btn2');
let evalbtn = document.querySelector('#evaluate');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');

let screenValue = [];

button.forEach((btn) => {

    btn.addEventListener('click', () => {
    //if button is not bcsp
    if(!btn.id.match("erase")){
        screenValue.push(btn.value);
        inputValue.innerHTML = screenValue.join('')
    }  
    // button is a number
    if(btn.classList.contains('c_btn')){
        outputValue.innerHTML = eval(screenValue.join(''))
    }

    if(btn.id.match('erase')){
        screenValue.pop();
        inputValue.innerHTML = screenValue.join('')
        outputValue.innerHTML = eval(screenValue.join(''))
    }
    if(btn.id.match('clear')){
        inputValue.innerHTML = 0;
        outputValue.innerHTML = 0;
        screenValue = ['']
    }
    if(btn.id.match('glitter_switch')){
        btn.classList.toggle('btn_glitter')
    }
    if(typeof eval(screenValue.join('')) == "undefined"){
        outputValue.innerHTML = 0;
    }
    
})
})