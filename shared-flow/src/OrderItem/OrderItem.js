//@flow
import type { OrderId } from '../Order';
import type { Product } from '../Product';

/**
 * _id as a string which would be indicative of a Mongo id
 */
export type OrderItemId = string;

export type OrderItem = {
  _id : OrderItemId,
  order : OrderId,
  product : Product,
  quantity : number,
  price : number,
}