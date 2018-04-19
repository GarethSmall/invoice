//@flow
import ActionTypes from '../../../Redux/ActionTypes';
import { OrderItem, OrderItemId } from 'shared-flow';

export type AddOrderItem = {
  type : typeof ActionTypes.OrderItem.ADD_ORDER_ITEM,
  payload : {
    message : string,
    orderItem : OrderItem,
  }
}

export type EditOrderItem = {
  type : typeof ActionTypes.OrderItem.EDIT_ORDER_ITEM,
  payload : {
    message : string,
    orderItem : OrderItem,
  }
}

export type DeleteOrderItem = {
  type : typeof ActionTypes.OrderItem.DELETE_ORDER_ITEM,
  payload : {
    message : string,
    orderItemId : OrderItemId,
  }
}

export type DismissOrderItemMessages = {
  type : typeof ActionTypes.OrderItem.DISMISS_ORDER_ITEM_MESSAGES,
}

export type OrderItemActions =
  | AddOrderItem
  | EditOrderItem
  | DeleteOrderItem
  | DismissOrderItemMessages;