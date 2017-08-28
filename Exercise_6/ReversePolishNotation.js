function calculate(argument, extraOperators) {
    if (!argument) throw new Error(`${argument} is not allowed`);
    const signs = argument.split(' ');
    const operators = {
        '*': (firstValue, secondValue) => firstValue * secondValue,
        '+': (firstValue, secondValue) => firstValue + secondValue,
        '-': (firstValue, secondValue) => secondValue - firstValue
    };


    if (extraOperators) {
        Object.assign(operators, extraOperators);
    }

    function isNumber(sign) {
        return !isNaN(parseInt(sign)) && isFinite(sign);
    }

    function isValidOperator(sign) {
        return operators.hasOwnProperty(sign);
    }

    const resultStack = signs.reduce((stack, sign) => {
        if (isNumber(sign)) {
            stack.push(parseInt(sign));
        } else if (isValidOperator(sign)) {
            if (stack.length < 2)throw new Error('Number of operators is not correct');
            const firstValue = stack.pop();
            const secondValue = stack.pop();
            stack.push(operators[sign](firstValue, secondValue));
        } else {
            throw new Error(`${sign} is not valid argument element`)
        }
        return stack;
    }, []);

    if (resultStack.length !== 1) throw new Error('Number of digits  is not correct');
    return resultStack.pop();
}

module.exports.calculate = calculate;
