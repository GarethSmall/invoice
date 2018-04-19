//@flow
import type { OrderItemState } from '../../../Flow/State/OrderItemState';
import type { OrderItemActions } from '../../../Flow/Actions/OrderItemActions';
import type {
  AddOrderItem, DeleteOrderItem,
  EditOrderItem
} from '../../../Flow/Actions/OrderItemActions/OrderItemActions';
import ActionTypes from '../../ActionTypes';
import type { OrderItem, OrderItemId } from 'shared-flow';

export const initialState : OrderItemState = {
  items: [],
  successMessage: null,
};

export function OrderItemReducer(state : OrderItemState = initialState, action? : OrderItemActions) : OrderItemState {
  switch (action != null && action.type) {
    case ActionTypes.OrderItem.ADD_ORDER_ITEM: {
      const a : AddOrderItem = (action : any);
      const newOrderItem : OrderItem = {
        /** By no means the proper way to manage ids */
        _id: `${state.items.length + 1}`,
        ...a.payload.orderItem
      };
      return {
        ...state,
        successMessage: a.payload.message,
        items: [ ...state.items, newOrderItem],
      }
    }
    case ActionTypes.OrderItem.EDIT_ORDER_ITEM: {
      const a : EditOrderItem = (action : any);
      const updatedItem : OrderItem = a.payload.orderItem;
      const filteredItems : OrderItem[] = state.items.filter(item => item._id !== updatedItem._id);
      return {
        ...state,
        successMessage: a.payload.message,
        items: [ ...filteredItems, updatedItem ],
      }
    }
    case ActionTypes.OrderItem.DELETE_ORDER_ITEM: {
      const a : DeleteOrderItem = (action : any);
      const orderItemId : OrderItemId = a.payload.orderItemId;
      const filteredItems : OrderItem[] = state.items.filter(item => item._id !== orderItemId);
      return {
        ...state,
        successMessage: a.payload.message,
        items: [ ...filteredItems ],
      }
    }
    case ActionTypes.OrderItem.DISMISS_ORDER_ITEM_MESSAGES: {
      return {
        ...state,
        successMessage: null,
      }
    }
    default: return state;
  }
}