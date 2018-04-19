//@flow
import { OrderItem } from 'shared-flow';

export type OrderItemState = $ReadOnly<{
  items : OrderItem[],
  successMessage : ?string,
}>