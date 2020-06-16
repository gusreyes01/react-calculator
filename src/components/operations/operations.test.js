import Operation from './index.js';
import expect from 'expect';

test('test equals', () => {
  let obj = {userTotal: '2', calcTotal: '4', newVal: '='}
  obj = Operation(obj)
  expect(obj).toEqual({
    userTotal: '4',
    calcTotal: null,
    newVal: null,
    operand: null,
  });
});

test('test percent', () => {
    let obj = {userTotal: '800', calcTotal: null, newVal: '%'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 8,
      calcTotal: null,
      newVal: null,
      operand: null,
    });
  });


  test('test decimal', () => {
    let obj = {userTotal: '2', calcTotal: null, newVal: '.'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: "2.",
      calcTotal: null,
      newVal: null,
      operand: null,
    });
  });

  test('test substraction', () => {
    let obj = {userTotal: '8', calcTotal: '8', newVal: '2', operand: '−'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 6,
      newVal: null,
      operand: null,
    });
  });

  test('test addition', () => {
    let obj = {userTotal: '2', calcTotal: '2', newVal: '2', operand: '+'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 4,
      newVal: null,
      operand: null,
    });
  });

  test('test mupltiplication', () => {
    let obj = {userTotal: '4', calcTotal: '4', newVal: '2', operand: '×'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 8,
      newVal: null,
      operand: null,
    });
  });

  test('test division', () => {
    let obj = {userTotal: '2', calcTotal: '2', newVal: '2', operand: '÷'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 1,
      newVal: null,
      operand: null,
    });
  });

 