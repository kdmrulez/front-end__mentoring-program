const assert = require('assert');
const chai = require('chai');
const calculate = require('../ReversePolishNotation').calculate;

describe('ReversePolishNotationTests',()=> {

    describe('Sums', ()=>{

        it('should return 5',()=> {
            assert.equal(calculate("3 2 +"), 5);
        });

        it('should return 10',()=>{
            assert.equal(calculate("-30 10 20 + 10 + +"),10);
        });

        it('should return -6', ()=>{
            assert.equal(calculate("-1 -2 -3 + +"),-6);
        });

        it('should return 0', ()=>{
            assert.equal(calculate("0"),0);
        });

        it('should return 1000', ()=>{
            assert.equal(calculate("300 200 500 + +"),1000);
        })
    });

    describe('Subtractions', ()=>{

        it('should return 3',()=> {
            assert.equal(calculate("7 4 -"), 3);
        });

        it('should return -20',()=>{
            assert.equal(calculate("10 20 - 10 -"),-20);
        });

        it('should return -2', ()=>{
            assert.equal(calculate("-1 -2 -3 - -"),-2);
        });

        it('should return 0', ()=>{
            assert.equal(calculate("5 5 -"),0);
        });

        it('should return 600', ()=>{
            assert.equal(calculate("300 200 500 - -"),600);
        })
    });


    describe('Multiplications', ()=>{

        it('should return 142',()=> {
            assert.equal(calculate("71 2 *"), 142);
        });

        it('should return -300',()=>{
            assert.equal(calculate("10 30 * -1 *"),-300);
        });

        it('should return -15', ()=>{
            assert.equal(calculate("-5 -3 -1 * *"),-15);
        });

        it('should return 0', ()=>{
            assert.equal(calculate("5 0 *"),0);
        });

        it('should return 30000000', ()=>{
            assert.equal(calculate("300 200 500 * *"),30000000);
        })
    });

    describe('Mixed operators', ()=>{

        it('should return 14',()=> {
            assert.equal(calculate("5 1 2 + 4 * 3 - +"), 14);
        });

        it('should return 7',()=>{
            assert.equal(calculate("4 2 5 * + 1 3 2 * + -"),7);
        });

        it('should return 2', ()=>{
            assert.equal(calculate("-5 -3 - -1 *"),2);
        });

        it('should return 0', ()=>{
            assert.equal(calculate("0 5 2 3 - + *"),0);
        });

        it('should return 2210000', ()=>{
            assert.equal(calculate("1300 2200 500 - *"),2210000);
        })
    });

    describe('Invalid arguments', ()=>{

        it('should throw error',()=> {
            chai.expect(calculate.bind(calculate,"asfsaafsafs")).to.throw(Error);
        });

        it('should throw error',()=> {
            chai.expect(calculate.bind(calculate,"1+ ")).to.throw(Error);
        });

        it('should throw error',()=> {
            chai.expect(calculate.bind(calculate,null)).to.throw(Error);
        });

        it('should throw error',()=> {
            chai.expect(calculate.bind(calculate,"653 + - *")).to.throw(Error);
        });

        it('should throw error',()=> {
            chai.expect(calculate.bind(calculate,"23+32")).to.throw(Error);
        });
    });
});

