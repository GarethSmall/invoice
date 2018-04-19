// @flow
import { initialState, OrderItemReducer } from './OrderItem';
import { Reducer } from 'redux-testkit';
import ActionTypes from '../../ActionTypes';
import type { OrderItem } from 'shared-flow';
import type { OrderItemState } from '../../../Flow/State/OrderItemState/OrderItemState';

const { describe, test, expect } = global;

describe('OrderItem', () => {
  test('should have initial state', () => {
    expect(OrderItemReducer()).toEqual(initialState);
  });

  test('should be able to add an OrderItem', () => {
    const message : string = 'Yahoo test successful!';
    const orderItem : OrderItem = {
      order: '1',
      product: {
        _id: '1',
        name: 'Test',
        price: 10,
      },
      quantity: 2,
      price: 1,
    };
    const action = {
      type: ActionTypes.OrderItem.ADD_ORDER_ITEM,
      payload: {
        message,
        orderItem,
      }
    };

    Reducer(OrderItemReducer).withState(initialState).expect(action).toReturnState({
      ...initialState,
      items: [{
        _id: '1',
        ...orderItem,
      }],
      successMessage: message,
    })
  });

  test('should be able to edit an OrderItem', () => {
    const message : string = 'Yahoo test successful!';

    const orderItem : OrderItem = {
      _id: '1',
      order: '1',
      product: {
        _id: '1',
        name: 'Test',
        price: 10,
      },
      quantity: 2,
      price: 1,
    };
    const action = {
      type: ActionTypes.OrderItem.EDIT_ORDER_ITEM,
      payload: {
        message,
        orderItem,
      }
    };

    const startingOrderItems : OrderItem[] = [
      {
        _id: '1',
        order: '1',
        product: {
          _id: '1',
          name: 'Test',
          price: 10,
        },
        quantity: 20,
        price: 1,
      },
      {
        _id: '2',
        order: '1',
        product: {
          _id: '1',
          name: 'Test',
          price: 10,
        },
        quantity: 1,
        price: 1,
      }
    ];

    const modifiedInitialState : OrderItemState = {
      ...initialState,
      items: startingOrderItems,
    };

    Reducer(OrderItemReducer).withState(modifiedInitialState).expect(action).toReturnState({
      ...initialState,
      items: [startingOrderItems[1], orderItem],
      successMessage: message,
    });
  });

  test('should be able to delete an OrderItem', () => {
    const message : string = 'Yahoo test successful!';
    const action = {
      type: ActionTypes.OrderItem.DELETE_ORDER_ITEM,
      payload: {
        message,
        orderItemId: '1',
      }
    };

    const startingOrderItems : OrderItem[] = [
      {
        _id: '1',
        order: '1',
        product: {
          _id: '1',
          name: 'Test',
          price: 10,
        },
        quantity: 20,
        price: 1,
      },
      {
        _id: '2',
        order: '1',
        product: {
          _id: '1',
          name: 'Test',
          price: 10,
        },
        quantity: 1,
        price: 1,
      }
    ];

    const modifiedInitialState : OrderItemState = {
      ...initialState,
      items: startingOrderItems,
    };

    Reducer(OrderItemReducer).withState(modifiedInitialState).expect(action).toReturnState({
      ...initialState,
      items: [startingOrderItems[1]],
      successMessage: message,
    });
  });
  test('should be able to dismiss OrderItem nessages', () => {
    const action = {
      type: ActionTypes.OrderItem.DISMISS_ORDER_ITEM_MESSAGES,
    };

    const modifiedInitialState : OrderItemState = {
      ...initialState,
      successMessage: 'Yahoo, test!'
    };

    Reducer(OrderItemReducer).withState(modifiedInitialState).expect(action).toReturnState({
      ...initialState,
      successMessage: null,
    });
  });
});
