import {expect,assert} from 'chai';
import Vector from '../src/Vector';
import  VectorMath from '../src/VectorMath';

describe('Basic vector addition', () => {
    it('Should add two vectors', () => {
      const v1 = new Vector(1,2,3,4,5);
      const v2 = new Vector(1,2,3,4,5);
      expect( VectorMath.VectorAdd(v1,v1).get()).to.eql([2,4,6,8,10]);
    }); 
});