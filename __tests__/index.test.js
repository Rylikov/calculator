/* eslint-disable max-len */
import ParserReversePolishNotation from '../src/entities/ParserReversePolishNotation';
import CalculatorReversePolishNotation from '../src/entities/CalculatorReversePolishNotation';
import calculator from '../src/index';

const parserReversePolistNotation = new ParserReversePolishNotation();
const calculatorReversePolishNotation = new CalculatorReversePolishNotation();

test('isNumber', () => {
  expect(parserReversePolistNotation.isNumber('-02.41')).toEqual(true);
  expect(parserReversePolistNotation.isNumber('')).toEqual(false);
  expect(parserReversePolistNotation.isNumber('9')).toEqual(true);
  expect(parserReversePolistNotation.isNumber('305')).toEqual(true);
  expect(parserReversePolistNotation.isNumber('-230.05')).toEqual(true);
  expect(parserReversePolistNotation.isNumber('-30f')).toEqual(false);
  expect(parserReversePolistNotation.isNumber('-')).toEqual(false);
  expect(parserReversePolistNotation.isNumber('+')).toEqual(false);
  expect(parserReversePolistNotation.isNumber('text')).toEqual(false);
  expect(parserReversePolistNotation.isNumber('-0.5')).toEqual(true);
});

test('ParserReversePolishNotation', () => {
  expect(parserReversePolistNotation.parse('')).toEqual([]);
  expect(parserReversePolistNotation.parse('3 + ( 8 - 9 )')).toEqual([3, 8, 9, '-', '+']);
  expect(parserReversePolistNotation.parse('1 + 2 * 3')).toEqual([1, 2, 3, '*', '+']);
  expect(parserReversePolistNotation.parse('1 * 3 + 4 / 2')).toEqual([1, 3, '*', 4, 2, '/', '+']);
  expect(parserReversePolistNotation.parse('12 + 2.3 - -30')).toEqual([12, 2.3, '+', -30, '-']);
  expect(parserReversePolistNotation.parse('( ( 3 + 5 ) / ( 5 - 1 ) ) * 10')).toEqual([3, 5, '+', 5, 1, '-', '/', 10, '*']);
  expect(parserReversePolistNotation.parse('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual([3, 6, 2, '*', 8, 5.2, '-', '/', '+', 2, '-']);
  expect(parserReversePolistNotation.parse('300 + 6 * 2 / ( 1 + 5 ) - 2.5')).toEqual([300, 6, 2, '*', 1, 5, '+', '/', '+', 2.5, '-']);
});

test('CalculatorReversePolishNotation', () => {
  expect(calculatorReversePolishNotation.calculate([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
  expect(calculatorReversePolishNotation.calculate([7, 2, 3, '*', '-'])).toBe(1);
  expect(calculatorReversePolishNotation.calculate([1, 2, '+', 2, '*'])).toBe(6);
});

test('calculate', () => {
  // expect(calculator('square 3')).toEqual(9);
  expect(calculator('0')).toEqual(0);
  expect(calculator('3 ^ 3')).toEqual(27);
  expect(calculator('1 + 2 - 3')).toEqual(1 + 2 - 3); // 0
  expect(calculator('1 + 3 - 5')).toEqual(1 + 3 - 5); // -1
  expect(calculator('3 + ( 8 - 9 )')).toEqual(3 + (8 - 9)); // 2
  expect(calculator('3.4 - -8')).toEqual(3.4 - -8); // 1.4
  expect(calculator('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual(3 + (6 * 2) / (8 - 5.2) - 2); // 5.285714285714286
});
