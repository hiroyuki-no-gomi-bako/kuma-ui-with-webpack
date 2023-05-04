import React from "react";
import ReactDOM from "react-dom";
import { styled } from "@kuma-ui/core";

function App() {
  return (
    <div>
      <h1>ハロー</h1>
      <Text>これはテストです！！！</Text>
    </div>
  );
}

const Text = styled("p")`
  color: red;
  background-color: tomato;
`;

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
