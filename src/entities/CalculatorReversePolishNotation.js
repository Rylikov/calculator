/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

class CalculatorReversePolishNotation {
  calculate(array) {
    const operators = {
      '+': (a, b) => a + b,
      '/': (a, b) => a / b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '^': (a, b) => a ** b,
      // square: (a, _) => Math.square(a),
    };
    const stack = [];

    const result = array.reduce((acc, item) => {
      if (item in operators) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const value = operators[item](operand1, operand2);
        stack.push(value);
        return value;
      }

      stack.push(item);
      return acc;
    }, 0);

    return result;
  }
}

export default CalculatorReversePolishNotation;
