import ParserReversePolishNotation from './entities/ParserReversePolishNotation';
import CalculatorReversePolishNotation from './entities/CalculatorReversePolishNotation';
import Calculator from './entities/Calculator';

const calculate = (expression) => {
  // eslint-disable-next-line max-len
  const calculator = new Calculator(new ParserReversePolishNotation(), new CalculatorReversePolishNotation());

  const result = calculator.calculate(expression);

  return result;
};

export default calculate;
