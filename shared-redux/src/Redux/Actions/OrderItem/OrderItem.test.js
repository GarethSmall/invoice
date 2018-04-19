//@flow
import ActionTypes from '../../ActionTypes';
import type { OrderItem } from 'shared-flow';
import { addOrderItem, deleteOrderItem, dismissOrderItemMessages, editOrderItem } from './OrderItem';
const { describe, test, expect } = global;

describe('OrderItem Action', () => {
  test('should be able to add an OrderItem', () => {

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

    /**
     * In a real world this example wouldn't work. We would need to first mock our http, and in which case our message would
     * most likely be dynamic if it were an error/success
     */
    const expectedAction = {
      type: ActionTypes.OrderItem.ADD_ORDER_ITEM,
      payload: {
        message: 'You have successfully added an order item.',
        orderItem,
      }
    };

    expect(addOrderItem(orderItem)).toEqual(expectedAction);
  });

  test('should be able to edit an OrderItem', () => {

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

    /**
     * In a real world this example wouldn't work. We would need to first mock our http, and in which case our message would
     * most likely be dynamic if it were an error/success
     */
    const expectedAction = {
      type: ActionTypes.OrderItem.EDIT_ORDER_ITEM,
      payload: {
        message: 'You have successfully edited an order item.',
        orderItem,
      }
    };

    expect(editOrderItem(orderItem)).toEqual(expectedAction);
  });

  test('should be able to delete an OrderItem', () => {
    /**
     * In a real world this example wouldn't work. We would need to first mock our http, and in which case our message would
     * most likely be dynamic if it were an error/success
     */
    const expectedAction = {
      type: ActionTypes.OrderItem.DELETE_ORDER_ITEM,
      payload: {
        message: 'You have successfully deleted an order item.',
        orderItemId: '1'
      }
    };

    expect(deleteOrderItem('1')).toEqual(expectedAction);
  });

  test('should be able to dismiss OrderItem messages', () => {
    const expectedAction = {
      type: ActionTypes.OrderItem.DISMISS_ORDER_ITEM_MESSAGES,
    };

    expect(dismissOrderItemMessages()).toEqual(expectedAction);
  });
});