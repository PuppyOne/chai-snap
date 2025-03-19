import { expect, use } from 'chai';
import chaiSnapshot from '../src/index';

use(chaiSnapshot);

describe('chai-snap', () => {
  it('should pass snapshot', () => {
    expect('test').to.snapshot();
  });
});
