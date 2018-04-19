//@flow
/**
 * _id as a string which would be indicative of a Mongo id
 */
import { OrderItem } from '../OrderItem';

export type OrderId = string;

export type Order = {
  _id : OrderId,
  items : OrderItem[],
  subTotalPrice : number,
  taxPrice : number,
  totalPrice : number,
}