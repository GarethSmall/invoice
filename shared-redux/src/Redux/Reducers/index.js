//@flow
import { OrderReducer } from './Order';
import { OrderItemReducer } from './OrderItem';

const Reducers = {
  Order: OrderReducer,
  OrderItem: OrderItemReducer,
};

export default Reducers;
