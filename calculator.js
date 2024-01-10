
function valueButton(e) {
    calculatorform.screen.value += e.value.replace(/x/g, 'x');
}

function Clear() {
    calculatorform.screen.value = null;
}

function Calculate() {
    calculatorform.screen.value = eval(calculatorform.screen.value.replace(/x/g, '*'));
}
