import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    input1 = 0;
    input2 = 0;
    result = 0;
    issubmit = false;

    handleInput1Change(event) {
        this.input1 = parseFloat(event.target.value);
    }

    handleInput2Change(event) {
        this.input2 = parseFloat(event.target.value);
    }

    handleAdd() {
        this.result = this.input1 + this.input2;
        this.issubmit = true;
    }

    handleSubtract() {
        this.result = this.input1 - this.input2;
        this.issubmit = true;
    }

    handleMultiply() {
        this.result = this.input1 * this.input2;
        this.issubmit = true;
    }

    handleDivide() {
        if (this.input2 !== 0) {
            this.result = this.input1 / this.input2;
        } else {
            this.result = 'Error: Division by zero';
        }
        this.issubmit = true;
    }
}
