//@flow
import type { OrderState } from './OrderState';
import type { OrderItemState } from './OrderItemState';
import type { ProductState } from './ProductState';

export type State = {
  Order : OrderState,
  OrderItem : OrderItemState,
  Product : ProductState,
};
