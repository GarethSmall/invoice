// @flow
import React, { PureComponent } from 'react';
import { OrderItem } from 'shared-flow';
import { moneyFormat } from '../../../../../Helpers/Math/math';

type Props = {
  item : OrderItem,
};
export default class InvoiceTableRow extends PureComponent<Props> {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.product.name}</td>
        <td>{item.quantity}</td>
        <td>{moneyFormat(item.product.price)}</td>
        <td>{moneyFormat(item.price)}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    );
  }
}