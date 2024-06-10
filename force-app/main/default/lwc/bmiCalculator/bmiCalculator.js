import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
        ];
    }

    isselectunit = false;
    age = '';
    gender = '';
    height = '';
    weight = '';
    calcplace = '';
    calcplace1 = '';
    decider='';
    result='';
    issubmit=false;

    usunithandler() {
        this.isselectunit = true;
        this.calcplace = 'Enter the height in feet.inches (e.g., if your height is 5 feet 2 inches, enter 5.2)';
        this.calcplace1 = 'Enter the weight in pounds';
        this.decider='usunit';
    }

    metricunithandler() {
        this.isselectunit = true;
        this.calcplace = 'Enter the height in cm';
        this.calcplace1 = 'Enter the weight in kg';
        this.decider='metricunit';
    }

    agehandler(event) {
        this.age = parseInt(event.target.value);
    }
    
    genderhandler(event) {
        this.gender = event.target.value;
    }

    heighthandler(event) {
        this.height = parseFloat(event.target.value);
    }

    weighthandler(event) {
        this.weight = parseFloat(event.target.value);
    }

    handlesubmit() {
        this.issubmit=true
        if (this.decider==='metricunit'){
            this.result=this.weight / (2 * this.height);
        }
        else if (this.decider==='usunit'){
            this.result=(this.weight * 702) / (2 * this.height);
        }
        console.log(this.result);
    }

    handleknow() {
        window.location.href = 'https://en.wikipedia.org/wiki/Body_mass_index';
    }

    handlereset() {
        this.isselectunit = false;
        this.age = '';
        this.gender = '';
        this.height = '';
        this.weight = '';
        this.calcplace = '';
        this.calcplace1 = '';
    }
}
