// @flow
import React from 'react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import shallow from 'enzyme/shallow';
import InvoiceTableRow from './';
import { OrderItem } from 'shared-flow';

const { describe, test, expect } = global;

Enzyme.configure({ adapter: new Adapter() });

describe('InvoiceTableRow', () => {
  test('should render', () => {
    const mockItem : OrderItem =  {
      _id: '1',
      order: '1',
      product: {
        _id: '1',
        name: 'Test T-shirt',
        price: 32.00,
      },
      quantity: 2,
      price: 64.00,
    };
    const component = shallow((
      <InvoiceTableRow item={mockItem} />
    ));
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
