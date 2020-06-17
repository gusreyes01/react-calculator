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
    let obj = {userTotal: '800', calcVal: null, operand: '%', curVal: '='}
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

 