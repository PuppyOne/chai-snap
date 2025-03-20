import { expect, use } from 'chai';
import chaiSnapshot from '../src/index.js';
import chaiAsPromised from 'chai-as-promised';

use(chaiSnapshot);

use(chaiAsPromised);

describe('chai-snap', () => {
  context('matching different types', () => {
    it('should match string snapshot', () => {
      expect('test').to.snapshot();
    });

    it('should match number snapshot', () => {
      expect(1).to.snapshot();
    });

    it('should match boolean snapshot', () => {
      expect(true).to.snapshot();
    });

    it.skip('should match null snapshot', () => {
      expect(null).to.snapshot();
    });

    it.skip('should match undefined snapshot', () => {
      expect(undefined).to.snapshot();
    });

    it('should match object snapshot', () => {
      expect({ id: 1, I: 'am', a: Object }).to.snapshot();
    });
  });

  context('cooperating with other plugins', () => {
    it('should cooperate with chai-as-promised', () => {
      expect(Promise.resolve('test')).to.eventually.fulfilled;
      expect('test').to.snapshot();
    });
  });
});
