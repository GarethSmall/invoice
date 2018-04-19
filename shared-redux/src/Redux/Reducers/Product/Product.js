//@flow
import type { ProductState } from '../../../Flow/State/ProductState';
import type { ProductActions } from '../../../Flow/Actions/ProductActions/ProductActions';

export const initialState : ProductState = {
  products: [
    /**
     * This will be our mock products
     */
    {
      _id: '1',
      name: 'T-shirt',
      price: 12.00,
    },
    {
      _id: '2',
      name: 'Jeans',
      price: 20.00,
    }
  ]
};

export function ProductReducer(state : ProductState = initialState, action? : ProductActions) : ProductState {
  switch (action != null && action.type) {
    default: return state;
  }
}