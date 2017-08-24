// const process = require('process');
// console.log(calculate(process.argv[2]));

function calculate(argument,extraOperators) {
    const invalidArgumentError = new Error('The argument ' + argument + ' is invalid');
    const signs = argument.split(' ');
    const stack=[];

    function isNumber(sign) {
        return !isNaN(parseInt(sign)) && isFinite(sign);
    }

    function isValidOperator(sign) {
        const isValidOperatorRegex = new RegExp(/^[+\-*]$/);
        return isValidOperatorRegex.test(sign);
    }


    signs.reduce((stack,sign) => {
        if (isNumber(sign)) {
            stack.push(parseInt(sign));
        } else if (isValidOperator(sign)) {
            if (stack.length < 2) throw invalidArgumentError;
            const firstValue = stack.pop();
            const secondValue = stack.pop();
            switch (sign) {
                case "+":
                    stack.push(firstValue + secondValue);
                    break;
                case "-":
                    stack.push(secondValue - firstValue);
                    break;
                case "*":
                    stack.push(firstValue * secondValue);
                    break;
            }
        } else throw invalidArgumentError;
      return stack;
    },stack);
    if (stack.length !== 1) throw invalidArgumentError;
    return stack.pop();
}

module.exports.calculate = calculate;
