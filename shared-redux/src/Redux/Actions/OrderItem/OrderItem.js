//@flow
import { RSAA } from 'redux-api-middleware';
import ActionTypes from '../../ActionTypes';
import type { OrderItem, OrderItemId } from 'shared-flow';
import type { AddOrderItem, EditOrderItem, DeleteOrderItem, DismissOrderItemMessages } from '../../../Flow/Actions/OrderItemActions';

export function addOrderItem(orderItem : OrderItem) : AddOrderItem {
  return {
    type: ActionTypes.OrderItem.ADD_ORDER_ITEM,
    payload: {
      message: 'You have successfully added an order item.',
      orderItem,
    }
  }
}

export function editOrderItem(orderItem : OrderItem) : EditOrderItem {
  return {
    type: ActionTypes.OrderItem.EDIT_ORDER_ITEM,
    payload: {
      message: 'You have successfully edited an order item.',
      orderItem,
    }
  }
}

export function deleteOrderItem(orderItemId : OrderItemId) : DeleteOrderItem {
  return {
    type: ActionTypes.OrderItem.EDIT_ORDER_ITEM,
    payload: {
      message: 'You have successfully deleted an order item.',
      orderItemId,
    }
  }
}

export function dismissOrderItemMessages() : DismissOrderItemMessages {
  return {
    type: ActionTypes.OrderItem.DISMISS_ORDER_ITEM_MESSAGES,
  }
}