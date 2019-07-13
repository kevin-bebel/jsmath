import {expect} from 'chai';
import Calculator from '../src/Calculator'

describe('calculate', function() {
    it('Add two Numbers', function() {
      let result = Calculator.Sum(5, 2);
      expect(result).equal(7);
    }); 

    it('Subtract two numbers', function() {
      let result = Calculator.Difference(5, 2);
      expect(result).equal(3);
    });
});