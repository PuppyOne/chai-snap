# chai-snap

[![npm version](https://img.shields.io/npm/v/chai-snap.svg?style=flat-square)](https://www.npmjs.com/package/chai-snap)
[![language](https://img.shields.io/badge/language-TypeScript-3178c6?style=flat-square)](https://www.typescriptlang.org/)
[![CI Status](https://img.shields.io/github/actions/workflow/status/PuppyOne/chai-snap/test-and-publish.yml?style=flat-square)](https://github.com/PuppyOne/chai-snap/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/PuppyOne/chai-snap?tab=MIT-1-ov-file#readme)

Built on [snap-shot-it](https://www.npmjs.com/package/snap-shot-it), [chai-snap](https://www.npmjs.com/package/chai-snap) extends [Chai](https://www.npmjs.com/package/chai) with a fluent assertion API for snapshot testing.

Instead of using snap-shot-it's native assertions:

```typescript
snapshot('test');
```

you can just say:

```typescript
expect('test').to.snapshot();
'test'.should.snapshot();
```

## Features ✨

- Intuitive assertion syntax: `expect(value).to.snapshot()`
- Simple snapshot testing integration for Chai
- Chainable assertions: Seamlessly combine with other Chai methods
- Type safety
- Compatible with Mocha and other test runners

## Installation 📦

```bash
npm install chai-snap --save-dev
```

## Usage 🚀

1. Add `chai-snap` to your test setup:

```typescript
use(chaiSnap);
```

2. Use in your tests:

```typescript
expect('test').to.snapshot();
```

Or if you prefer `should`:

```typescript
'test'.should.snapshot();
```

Snapshot can also be named for more intuitive:
```typescript
expect('test').to.snapshot('test-snapshot');
```

### Basic Example

```typescript
import { expect, use } from 'chai';
import chaiSnap from 'chai-snap';

// Add snapshot support to Chai
use(chaiSnap);

describe('Snapshot Testing', () => {
  it('should match snapshot', () => {
    expect('test').to.snapshot().and.be.a('string');
  });
});
```

### Updating Snapshots

Set environment variable to update snapshots:

```bash
SNAPSHOT_UPDATE=1 npm test
```

## API Documentation 📖

### `expect(value).to.snapshot()`

- **`value`**: Any value to compare against stored snapshot
- **Behavior**:
  - Creates new snapshot on first run
  - Compares against stored snapshot in subsequent runs
  - Updates snapshot when `SNAPSHOT_UPDATE=1` is set
