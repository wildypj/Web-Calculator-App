const display = document.querySelector('.display');


const updateDisplay = (value) =>{
    display.value = value;
}

const appendToDisplay = (input) =>{
    updateDisplay(display.value + input);
}

const clearDisplay = () =>{
    display.value = "";
}

const calculate = () =>{

    try{
        updateDisplay(eval(display.value).toString());
    }
    catch(error){
        updateDisplay("Error");
    }
    
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Check if the key is a number, operator, or Enter key
    if (/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});