import { expect, assert } from 'chai';
import Vector from '../src/Vector';
import VectorMath from '../src/VectorMath';

describe('Basic vector arithmetic operations', () => {
  it('Should add two vectors', () => {
    const v1 = new Vector(5, 4, 5, 6, 7, 7);
    const v2 = new Vector(2, 4, 3, 6, 4, 2);

    expect(VectorMath.VectorAdd(v1, v2).get()).to.eql([7, 8, 8, 12, 11, 9]);
  });


  it('Should subtract ( a - b )', () => {
    const v1 = new Vector(5, 4, 5, 6, 7, 7);
    const v2 = new Vector(2, 4, 3, 6, 4, 2);

    expect(VectorMath.VectorSubtract(v1, v2).get()).to.eql([3, 0, 2, 0, 3, 5]);
  });

  it('Should subtract ( b -  a )', () => {
    const v1 = new Vector(5, 4, 5, 6, 7, 7);
    const v2 = new Vector(2, 4, 3, 6, 4, 2);

    expect(VectorMath.VectorSubtract(v2, v1).get()).to.eql([-3, 0, -2, 0, -3, -5]);
  });

});