// @flow
import React, { PureComponent } from 'react';
import { Order, Product } from 'shared-flow';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';

type Props = {
  products : Product[],
  order : Order,
};

export default class InvoiceTable extends PureComponent<Props> {
  render() {
    const { order } = this.props;
    return (
      <table>
        <InvoiceTableHeader />
        <tbody>
          {order.items.map(item => <InvoiceTableRow key={`${item._id}`} item={item} />)}
        </tbody>
      </table>
    );
  }
}