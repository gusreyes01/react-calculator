import Operation from './index.js';
import expect from 'expect';

test('test equals', () => {
  let obj = {userTotal: '2', calcTotal: '4', curVal: '='}
  obj = Operation(obj)
  expect(obj).toEqual({
    userTotal: '4',
    calcTotal: null,
    curVal: null,
    operand: null,
  });
});

test('test percent', () => {
    let obj = {userTotal: '800', calcTotal: null, curVal: '%'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 8,
      calcTotal: null,
      curVal: null,
      operand: null,
    });
  });


  test('test decimal', () => {
    let obj = {userTotal: '2', calcTotal: null, curVal: '.'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: "2.",
      calcTotal: null,
      curVal: null,
      operand: null,
    });
  });

  test('test substraction', () => {
    let obj = {userTotal: '8', calcTotal: '8', curVal: '2', operand: '−'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 6,
      curVal: null,
      operand: null,
    });
  });

  test('test addition', () => {
    let obj = {userTotal: '2', calcTotal: '2', curVal: '2', operand: '+'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 4,
      curVal: null,
      operand: null,
    });
  });

  test('test mupltiplication', () => {
    let obj = {userTotal: '4', calcTotal: '4', curVal: '2', operand: '×'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 8,
      curVal: null,
      operand: null,
    });
  });

  test('test division', () => {
    let obj = {userTotal: '2', calcTotal: '2', curVal: '2', operand: '÷'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 2,
      calcTotal: 1,
      curVal: null,
      operand: null,
    });
  });

 