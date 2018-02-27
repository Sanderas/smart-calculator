class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.expression = String(initialValue);
        this.result = eval(initialValue);
    }

    add(number) {
        // your implementation
        this.expression += ("+" + String(number));
        this.result = eval(this.expression);
        return this;
    }

    subtract(number) {
        // your implementation
        this.expression += ("-" + String(number));
        this.result = eval(this.expression);
        return this;
    }

    multiply(number) {
        // your implementation
        this.expression += ("*" + String(number));
        this.result = eval(this.expression);
        return this;
    }

    devide(number) {
        // your implementation
        this.expression += ("/" + String(number));
        this.result = eval(this.expression);
        return this;
    }

    pow(number) {
        // your implementation
        var coincidence=parseInt(this.expression.match(/\d+\)*$/)[0]);
        var pow_result='Math.pow(Number('+coincidence+'), '+number+')';
        var parenthes=this.expression.match(/\)*$/);
        this.expression=this.expression.replace(/\d+\)*$/, pow_result+parenthes);
        this.result = eval(this.expression);
        return this;
    }

    toString() {
        return this.result;
    }
}

module.exports = SmartCalculator;
