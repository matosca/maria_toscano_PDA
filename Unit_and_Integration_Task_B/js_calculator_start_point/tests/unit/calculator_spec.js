var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const expected = calculator.runningTotal;
    assert.equal(5, expected);
  });

  it('should be able to subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const expected = calculator.runningTotal;
    assert.equal(3, expected);
  });

  it('should be able to multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const expected = calculator.runningTotal;
    assert.equal(15, expected);
  });

  it('should be able to divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const expected = calculator.runningTotal;
    assert.equal(3, expected);
  });
});
