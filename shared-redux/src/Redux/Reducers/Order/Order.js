//@flow
import type { OrderState } from '../../../Flow/State/OrderState';
import type { OrderActions } from '../../../Flow/Actions/OrderActions/OrderActions';

export const initialState : OrderState = {
  orders: [
    /**
     * This will be our mock order
     */
    {
      _id: '1',
      subPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    }
  ]
};

export function OrderReducer(state : OrderState = initialState, action? : OrderActions) : OrderState {
  switch (action != null && action.type) {
    default: return state;
  }
}