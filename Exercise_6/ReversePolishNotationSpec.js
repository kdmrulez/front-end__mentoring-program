const assert = require('assert');
const chai = require('chai');
const calculate = require('./ReversePolishNotation').calculate;

describe('ReversePolishNotation', () => {

    describe('Check single digit', () => {
        it('should return the same digit', () => {
            assert.equal(calculate('0'), 0);
        })
    })

    describe('Single operations', () => {
        it('should return the sum', () => {
            assert.equal(calculate('2 3 4 5 6 + + + +'), 20);
        })
        it('should return the subtraction', () => {
            assert.equal(calculate('4 2 - 3 4 - -'), 3);
        })
        it('should return the multiplication', () => {
            assert.equal(calculate('12 3 * 4 *'), 144);
        })
    })

    describe('Check mixed operations', () => {
        it('+ - *', () => {
            assert.equal(calculate('5 1 2 + 4 * 3 - +'), 14);
        })
        it('+ *', () => {
            assert.equal(calculate('4 2 5 * + 1 3 2 * + +'), 21);
        })
        it('+ -', () => {
            assert.equal(calculate('2 3 + 4 12 1 3 - - + +'), 23);
        })
        it('* -', () => {
            assert.equal(calculate('5 6 2 1 - * *'), 30);
        })
    })

    describe('Check extra operators', () => {
        it('add / to operators', () => {
            assert.equal(calculate('4 2 5 * + 1 3 2 * + /',
                {'/': (firstValue, secondValue) => secondValue / firstValue}), 2)
        })

        it('add % to operators', () => {
            assert.equal(calculate('4 2 %', {'%': (firstValue, secondValue) => secondValue % firstValue}), 0)
        })
    })

    describe('When argument is invalid', () => {
        it('should throw error with message "null is not allowed" for null argument', () => {
            chai.expect(() => calculate(null)).to.throw('null is not allowed');
        })
        it('should throw error with message "undefined is not allowed" for undefined argument', () => {
            chai.expect(() => calculate(undefined)).to.throw('undefined is not allowed');
        })
        it('should throw error with message "is not allowed" for empty argument', () => {
            chai.expect(() => calculate('')).to.throw('is not allowed');
        })
        it('should throw error with message "is not valid argument element" for empty spaces', () => {
            chai.expect(() => calculate('   ')).to.throw('is not valid argument element');
        })
        it('should throw error with message "is not valid argument element"', () => {
            chai.expect(() => calculate('2 3a +')).to.throw('is not valid argument element');
        })
        it('should throw error with message "Number of operators is not correct"', () => {
            chai.expect(() => calculate('2 3 4 + + -')).to.throw('Number of operators is not correct');
        })
        it('should throw error with message "Number of digits is not correct"', () => {
            chai.expect(() => calculate('2 3 4 + + 8')).to.throw('Number of digits  is not correct');
        })
    })

    describe('Handling invalid extra operators', () => {

        it('should throw error with message "A is not valid argument element"', () => {
            chai.expect(() => calculate('2 3 A +', 'A')).to.throw('A is not valid argument element');
        })

        it('should return correct value if the argument is correct', () => {
            assert.equal(calculate('2 3 +', {'a': ''}), 5)
        })
    })
});

