class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentValue = '';
        this.currentOperator = '';
        this.firstValue = null;
        this.resultDisplayed = false;
        this.attachEventListeners();
    }

    attachEventListeners() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button));
        });
    }

    handleButtonClick(button) {
        const { value, operation } = button.dataset;

        if (value) {
            this.handleValueClick(value);
        } else if (operation) {
            this.handleOperationClick(operation);
        }
    }

    handleValueClick(value) {
        if (this.resultDisplayed) {
            this.currentValue = '';
            this.resultDisplayed = false;
        }
        this.currentValue += value;
        this.display.value = this.currentValue;
    }

    handleOperationClick(operation) {
        if (operation === 'clear') {
            this.clear();
        } else if (operation === 'calculate') {
            this.calculate();
        } else {
            if (this.firstValue === null) {
                this.firstValue = parseFloat(this.currentValue);
                this.currentValue = '';
                this.currentOperator = operation;
            } else {
                this.calculate();
                this.currentOperator = operation;
            }
        }
    }

    calculate() {
        if (this.currentOperator === 'add') {
            this.firstValue += parseFloat(this.currentValue);
        } else if (this.currentOperator === 'subtract') {
            this.firstValue -= parseFloat(this.currentValue);
        } else if (this.currentOperator === 'multiply') {
            this.firstValue *= parseFloat(this.currentValue);
        } else if (this.currentOperator === 'divide') {
            if (parseFloat(this.currentValue) === 0) {
                this.display.value = 'Error';
                this.clear();
                return;
            }
            this.firstValue /= parseFloat(this.currentValue);
        }
        this.display.value = this.firstValue;
        this.resultDisplayed = true;
    }

    clear() {
        this.currentValue = '';
        this.currentOperator = '';
        this.firstValue = null;
        this.display.value = '';
    }
}

new Calculator();