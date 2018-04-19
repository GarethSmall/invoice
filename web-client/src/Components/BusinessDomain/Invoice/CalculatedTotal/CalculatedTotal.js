// @flow
import React, { PureComponent } from 'react';
import { moneyFormat } from '../../../../Helpers/Math/math';
import { OrderItem } from 'shared-flow';

type Props = {
  items : OrderItem[],
  taxPercent : number,
};

export default class CalculatedTotal extends PureComponent<Props> {
  static defaultProps = {
    taxPercent: 5,
  };
  render() {
    const { items, taxPercent } = this.props;
    const priceReducer = (accumulator : number, current : OrderItem) => accumulator + current.price;
    const subTotal : number = items.reduce(priceReducer, 0);
    const tax : number = subTotal * (taxPercent / 100);
    const total : number = subTotal + tax;
    return (
      <div>
        <div>Subtotal: {moneyFormat(subTotal)}</div>
        <div>Tax (5%): {moneyFormat(tax)}</div>
        <div>Total: {moneyFormat(total)}</div>
      </div>
    )
  }
}