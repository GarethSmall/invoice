// @flow
import React, { PureComponent } from 'react';

type Props = {};
export default class InvoiceTableHeader extends PureComponent<Props> {
  render() {
    return (
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
    );
  }
}