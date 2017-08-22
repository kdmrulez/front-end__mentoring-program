function calculate(argument) {
    const invalidArgumentError = new Error('The argument is invalid');

    function isNumber(sign) {
        const isNumberRegex = new RegExp("[0-9]");
        return isNumberRegex.test(sign);
    }

    function isValidOperator(sign) {
        const isValidOperatorRegex = new RegExp("[+|*|\-]");
        return isValidOperatorRegex.test(sign);
    }

    let signs = argument.split(' ');

    let stack = [];

    signs.forEach(sign => {
        if (isNumber(sign)) {
            stack.push(parseInt(sign));
        }
        else if (isValidOperator(sign)) {
            if (stack.length < 2)throw invalidArgumentError;
            let firstValue = stack.pop();
            let secondValue = stack.pop();

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
        }
        else throw invalidArgumentError;
    });
    if (stack.length != 1)throw invalidArgumentError;
    return stack.pop();
}