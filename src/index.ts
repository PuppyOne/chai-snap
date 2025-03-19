import snapshot from 'snap-shot-it';

export default function (_chai, utils) {
  utils.addMethod(_chai.Assertion.prototype, 'snapshot', function (expected) {
    const obj = utils.flag(this, 'object');
    snapshot(obj);
  });
}
