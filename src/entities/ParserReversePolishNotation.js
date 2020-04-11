/* eslint-disable class-methods-use-this */

class ParserReversePolishNotation {
  peek(stack) {
    return stack[stack.length - 1];
  }

  isNumber(symbol) {
    const regExp = /^[-+]?[0-9]\d*(\.\d+)?$/;

    return symbol.match(regExp) !== null;
  }

  isOpenBracket(symbol) {
    return symbol === '(';
  }

  isClosedBracket(symbol) {
    return symbol === ')';
  }

  parse(expression) {
    if (expression === '') return [];

    const operators = {
      '(': 0,
      ')': 0,
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3,
    };

    const stack = [];
    const output = [];

    const arrayOfElements = expression.split(' ');

    // eslint-disable-next-line array-callback-return
    arrayOfElements.map((element) => {
      if (this.isNumber(element)) {
        output.push(Number(element));
        return;
      }

      if (this.isOpenBracket(element)) {
        stack.push(element);
        return;
      }

      if (this.isClosedBracket(element)) {
        while (stack.length !== 0) {
          const elementFromStask = stack.pop();
          if (this.isOpenBracket(elementFromStask)) {
            return;
          }
          output.push(elementFromStask);
        }
        return;
      }

      if (element in operators) {
        let elementFromStask = this.peek(stack);
        while ((operators[elementFromStask] >= operators[element]) && stack.length !== 0) {
          output.push(stack.pop());
          elementFromStask = this.peek(stack);
        }
        stack.push(element);
      }
    });

    while (stack.length !== 0) {
      output.push(stack.pop());
    }

    return output;
  }
}

export default ParserReversePolishNotation;
