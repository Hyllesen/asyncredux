import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import PeopleApp from "./containers/PeopleApp";

import reducer from "./redux/reducers/peopleReducer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const storeWithMiddleware = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={storeWithMiddleware}>
        <PeopleApp />
      </Provider>
    );
  }
}
