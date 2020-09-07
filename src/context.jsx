import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "asdf":
      return { name: state.name + action.p };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    name: "johne",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
