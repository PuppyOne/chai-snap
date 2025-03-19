import { Assertion } from 'chai';

declare global {
  namespace Chai {
    interface Assertion {
      snapshot(): void;
    }
  }
}
