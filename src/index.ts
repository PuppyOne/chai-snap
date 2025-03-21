import snapshot from 'snap-shot-it';

export default function chaiSnap(_chai:Chai.ChaiStatic, utils:Chai.ChaiUtils) {
  utils.addMethod(_chai.Assertion.prototype, 'snapshot', function (this:Chai.Assertion) {
    const obj = utils.flag(this, 'object');
    snapshot(obj);
  }); 
}

declare global {
  namespace Chai {
    interface Assertion {
      snapshot(): Assertion;
    }
  }
}
