document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '';
    let operator = null;
    let firstValue = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');
            if (value === 'C') {
                displayValue = '';
                operator = null;
                firstValue = null;
            } else if (value === '=') {
                try {
                    displayValue = eval(displayValue);
                } catch {
                    displayValue = 'Error';
                }
            } else if (['+', '-', '*', '/', '(', ')', '^'].includes(value)) {
                displayValue += value === '^' ? '**' : value;
            } else if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'log' || value === 'sqrt') {
                displayValue += value + '(';
            } else {
                displayValue += value;
            }
            display.value = displayValue;
        });
    });
});
