import {expect,assert} from 'chai';
import Vector from '../src/Vector'

describe('Vector Intialization', () => {
    it('Initialize without breaking', () => {
      const vector = new Vector(1,2,3,4,5);
      assert.typeOf(vector, "object")
    }); 

    it('Sum a vector successfully', () => {
        const vector = new Vector(1,2,3,4,5);
        expect(vector.sum()).equals(15)
    });
});