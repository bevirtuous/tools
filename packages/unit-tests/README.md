# Virtuous' unit test suite

This configuration uses [Jest](https://facebook.github.io/jest/) for running the tests.
It is only an extension of the default Jest configuration.

## Installation

### NPM

```sh
npm install --save-dev @virtuous/unit-tests
```

### Yarn

```sh
yarn add --dev @virtuous/unit-tests
```

## Usage

All test files should follow the naming convention of `*(spec|test).js`. But that is not mandatory.
You can also put your test files into one or multiple `__tests__` folder(s).

_**NOTE**: It is considered a best practice to create `__tests__` folder(s) **AND** have the file endings like `*.spec.js` or `*.test.js`!_

## Test Setup

You have two options of how to create a configuration for Jest:

- You can create your own configuration following the [Jest Documentation](https://facebook.github.io/jest/docs/en/getting-started.html)
- You can use Virtuous' pre-defined configuration and extend it as you wish.

__NOTE: Using and extending the Virtuous configuration is the preferred way!__

### 1. Using Virtuous' configuration

Create a file called `jest.config.js` in the root of your project.
Add the following line to it:

```js
module.exports = require('@virtuous/unit-tests/jest.config');
```

### 2. Extending Virtuous' configuration

Create a file called `jest.config.js` in the root of your project.
Add the following line in the beginning of the file:

```js
const defaultConfig = require('@virtuous/unit-tests/jest.config');
```

This will load the default configuration. Now you can extend it by spreading the `defaultConfig`
into a newly created configuration object:

```js
module.exports = Object.assign({}, defaultConfig, {}
  [Your config goes here],
});
```

## Example Configuration

Here is an example showing how to extend the default configuration:

```js
const defaultConfig = require('@virtuous/unit-tests/jest.config');

module.exports = Object.assign({}, defaultConfig, {
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/components',
    '^Styles(.*)$': '<rootDir>/styles',
  },
});
```
