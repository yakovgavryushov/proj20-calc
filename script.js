/*
let currentInput = document.querySelector('.currentInput');
let output = document.querySelector('.output');
let buttons = document.querySelector('button');
let clear = document.querySelector('#clear');
let erase = document.querySelector('#erase');
let evaluate = document.querySelector('#evaluate');

let screenValueRT = [];

clear.addEventListener('click', () => {
    screenValueRT = [''];
    output.innerHTML = 0;
    currentInput.className = 'currentInput';
    output.className = 'output';
    output.style.color = " "
}
)

    buttons.forEach((btn) => {

        btn.addEventListener('click', () =>
        {
            if(!btn.id.match('erase')) {
                screenValueRT.push(btn.value)
                currentInput.innerHTML = screenValueRT.join('');

                if(btn.classList.contains('c_btn')){
                    output.innerHTML = screenValueRT.join('')
                }
            }
            if(btn.id.match('erase')) {
                screenValueRT.pop();
                currentInput.innerHTML = screenValueRT.join('');
                output.innerHTML = eval(screenValueRT,join(''));
            }
            if(btn.id.match('evaluate')){
                currentInput.className = 'output';
                output.className = 'currentInput';
                output.style.color = 'white';
            }
            if(typeof eval(screenValueRT.join('')) == 'undefined'){
                output.innerHTML = 0;
            }
        })

    })




    //вот это писал не я и оно работает багованно(у меня вообще не работает кст)
   // Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.output');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');



// Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'output';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'output';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})
    */


// it is strangely corrupted
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');



// Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.8)";
})

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('c_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }
    })
})