class Calculator {
  constructor(parser, calculateMethod) {
    this.parser = parser;
    this.calculateMethod = calculateMethod;
  }

  calculate(expression) {
    const data = this.parser.parse(expression);
    const result = this.calculateMethod.calculate(data);

    return result;
  }
}

export default Calculator;
