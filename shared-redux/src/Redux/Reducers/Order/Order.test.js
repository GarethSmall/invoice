// @flow
import { initialState, OrderReducer } from './Order';
import { Reducer } from 'redux-testkit';

const { describe, test, expect } = global;

describe('Order', () => {
  test('should have initial state', () => {
    expect(OrderReducer()).toEqual(initialState);
  });
});
