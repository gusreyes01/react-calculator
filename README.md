# react-calculator

A simple calculator using React.

[![Build Status](https://travis-ci.com/gusreyes01/react-calculator.svg?branch=master)](https://travis-ci.com/gusreyes01/react-calculator)

<hr>

## View example on [react-calculator-9002.surge.sh](https://react-calculator-9002.surge.sh)

## How to run this project

```sh
$ cd react-calculator
$ npm install 
$ npm start 
```

## How to test this project

```sh
$ cd react-calculator
$ npm test 
```

For the same quality gates used in CI:

```sh
npm run lint
npm run test:ci
npm run build
```

## Architecture

`App` owns the calculator state and routes key presses into the pure operation
engine. `CalculatorKeyboard` and `CalculatorKey` emit user input, while
`CalculatorScreen` renders the current total. The operation engine accepts and
returns a new `{ userTotal, calcVal, curVal, operand }` state object; it does not
mutate caller-owned state. Invalid arithmetic and division by zero produce an
explicit `Error` display state instead of a browser alert.

The CI test command disables Jest's cache so every run exercises the checked
out source. The production build is also compiled on every pull request.


## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [an issue](https://github.com/gusreyes01/react-calculator/issues).


## Contributors

[<img src="https://avatars0.githubusercontent.com/u/2120129?v=4" width="100px;"/><br /><sub><b>Gustavo Reyes</b></sub>](https://github.com/gusreyes01)<br />[💬](#question-gusreyes01 "Answering Questions") [💻](https://github.com/gusreyes01/react-calculator/commits?author=gusreyes01 "Code") 


## Discussion and Collaboration

Use the [GitHub Issues](https://github.com/gusreyes01/react-calculator/issues)
page for reproducible bugs and feature proposals. See
[CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request and
[SECURITY.md](SECURITY.md) for private vulnerability reports.

## License

Licensed under the MIT License.
