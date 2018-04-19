// @flow
import React from 'react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import shallow from 'enzyme/shallow';
import InvoiceTable from './';
import { Order } from 'shared-flow';

const { describe, test, expect } = global;

Enzyme.configure({ adapter: new Adapter() });

describe('InvoiceTable', () => {
  test('should render', () => {
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
    const component = shallow((
      <InvoiceTable order={mockOrder} />
    ));
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
