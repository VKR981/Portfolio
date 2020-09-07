import React from "react";
import { Consumer } from "./context";

export default function component() {
  const handleclick = (dispatch) => dispatch({ type: "asdf", p: "h" });
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div>
            <h1>{value.name}</h1>
            <button onClick={() => handleclick(dispatch)}>button</button>
          </div>
        );
      }}
    </Consumer>
  );
}
