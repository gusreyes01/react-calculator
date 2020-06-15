import Operation from './index.js';
import expect from 'expect';

test('test equals', () => {
  let obj = {userTotal: '2', calcTotal: '4', newVal: '='}
  obj = Operation(obj)
  expect(obj).toEqual({
    userTotal: '4',
    calcTotal: '4',
    newVal: null,
  });
});

test('test percent', () => {
    let obj = {userTotal: '800', calcTotal: null, newVal: '%'}
    obj = Operation(obj)
    expect(obj).toEqual({
      userTotal: 8,
      calcTotal: null,
      newVal: null,
    });
  });