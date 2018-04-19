// @flow
import React, { PureComponent } from 'react';
import CalculatedTotal from '../../Components/BusinessDomain/Invoice/CalculatedTotal';
import InvoiceTable from '../../Components/BusinessDomain/Invoice/InvoiceTable';
import { Order, Product } from 'shared-flow';

type Props = {};
const mockProducts : Product[] = [
  {
    _id: '1',
    name: 'Test T-shirt',
    price: 32.00,
  },
  {
    _id: '2',
    name: 'Test Jeans',
    price: 75.00,
  }
];
const mockOrder : Order = {
  _id : '1',
  items : [
    {
      _id: '1',
      order: '1',
      product: {
        _id: '1',
        name: 'Test T-shirt',
        price: 32.00,
      },
      quantity: 2,
      price: 64.00,
    },
    {
      _id: '2',
      order: '1',
      product: {
        _id: '2',
        name: 'Test Jeans',
        price: 75.00,
      },
      quantity: 2,
      price: 150.00,
    },
  ],
  subTotalPrice: 214.00,
  taxPrice: 10.70,
  totalPrice: 224.70,
};
export default class Invoice extends PureComponent<Props> {
  render() {
    return [
      <InvoiceTable key="1" products={mockProducts} order={mockOrder} />,
      <CalculatedTotal key="2" items={mockOrder.items} />
    ];
  }
}