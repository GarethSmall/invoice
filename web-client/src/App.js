// @flow
import React, { PureComponent } from 'react';
import { Reducers } from 'shared-redux';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Invoice from './Pages/Invoice';

type Props = {};

const store = createStore(combineReducers(Reducers));

/**
 * Did not go the route of adding react-router since its not needed in this example.
 */
export default class App extends PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <Invoice />
      </Provider>
    );
  }
}
