import Operation from './index.js';
import expect from 'expect';

test('test equals', () => {
  let obj = {userTotal: '4', curVal: '='}
  obj = Operation(obj).calculate
  expect(obj).toEqual({
    userTotal: '4',
    calcVal: null,
    curVal: null,
    operand: null,
  });
});

test('test percent', () => {
    let obj = {userTotal: '800', calcVal: null, operand: null, curVal: '%'}
    obj = Operation(obj).calculate
    expect(obj).toEqual({
      userTotal: 8,
      calcVal: null,
      curVal: null,
      operand: null,
    });
  });


  test('test decimal', () => {
    let obj = {userTotal: null, calcVal: '2', operand: null, curVal: '.' }
    obj = Operation(obj).calculate
    expect(obj).toEqual({
      userTotal: null,
      calcVal: "2.",
      curVal: null,
      operand: null,
    });
  });

  test('test substraction', () => {
    let obj = {userTotal: '8', calcVal: '8', operand: '−', curVal: '='}
    obj = Operation(obj).calculate
    expect(obj).toEqual({
      userTotal: 0,
      calcVal: null,
      curVal: null,
      operand: null,
    });
  });

  test('test addition', () => {
    let obj = {userTotal: '2', calcVal: '2', operand: '+', curVal: '='}
    obj = Operation(obj).calculate
    expect(obj).toEqual({
      userTotal: 4,
      calcVal: null,
      curVal: null,
      operand: null,
    });
  });

  test('test multiplication', () => {
    let obj = {userTotal: '4', calcVal: '4', operand: '×', curVal: '='}
    obj = Operation(obj).calculate
    expect(obj).toEqual({
      userTotal: 16,
      calcVal: null,
      curVal: null,
      operand: null,
    });
  });

  test('test division', () => {
    let obj = {userTotal: '2', calcVal: '2',operand: '÷',  curVal: '='}
    obj = Operation(obj).calculate
    expect(obj).toEqual({
      userTotal: 1,
      calcVal: null,
      curVal: null,
      operand: null,
    });
  });

  test('division by zero returns a controlled error state', () => {
    const obj = Operation({
      userTotal: '8',
      calcVal: '0',
      operand: '÷',
      curVal: '='
    }).calculate;

    expect(obj).toEqual({
      userTotal: 'Error',
      calcVal: null,
      curVal: null,
      operand: null,
    });
  });

  test('invalid arithmetic input returns a controlled error state', () => {
    const obj = Operation({
      userTotal: 'not-a-number',
      calcVal: '2',
      operand: '+',
      curVal: '='
    }).calculate;

    expect(obj.userTotal).toEqual('Error');
  });

  test('setting an operand does not mutate the input state', () => {
    const state = { userTotal: '8', calcVal: null, operand: null, curVal: '+' };
    const result = Operation(state).calculate;

    expect(state.operand).toEqual(null);
    expect(result.operand).toEqual('+');
  });
