// @flow
import React, { PureComponent } from 'react';
import { OrderItem, Product } from 'shared-flow';
import { moneyFormat } from '../../../../../Helpers/Math/math';

type Props = {
  products : Product[],
  item : OrderItem,
  orderId : number,
  onSave : (item : OrderItem) => void,
  isEditMode : boolean,
  onCancel : () => void,
};

type State = {
  productId : number,
  quantity : number,
  productPrice : number,
  totalPrice : number,
}

export default class InvoiceTableRowForm extends PureComponent<Props, State> {
  static defaultProps = {
    isEditMode: false,
  };

  state = {
    productId: this.props.item.product._id,
    quantity: this.props.item.quantity,
    productPrice: this.props.item.product.price,
    totalPrice: this.props.item.price,
  };

  onSave = () => {
    const { onSave, products, orderId, item, isEditMode } = this.props;
    const { productId, quantity, totalPrice } = this.state;
    const itemToSave : OrderItem = {
      orderId,
      product: products.filter(product => product._id === productId),
      quantity,
      price: totalPrice,
    };
    if (isEditMode) itemToSave._id = item._id;
    onSave(itemToSave);
  };

  render() {
    const { products, onCancel } = this.props;
    const { productId, quantity, productPrice, totalPrice } = this.state;

    return (
      <tr>
        <td>
          <select>
            {products.map(product => (
              <option
                value={product._id}
                selected={product._id === productId}
              >
                {product.name}
              </option>
            ))}
          </select>
        </td>
        <td><input type="number" value={quantity} /></td>
        <td>{moneyFormat(productPrice)}</td>
        <td>{moneyFormat(totalPrice)}</td>
        <td><button onClick={this.onSave}>Save</button></td>
        <td><button onClick={onCancel}>Cancel</button></td>
      </tr>
    );
  }
}