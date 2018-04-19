// @flow
import { initialState, ProductReducer } from './Product';
import { Reducer } from 'redux-testkit';

const { describe, test, expect } = global;

describe('Product', () => {
  test('should have initial state', () => {
    expect(ProductReducer()).toEqual(initialState);
  });
});
