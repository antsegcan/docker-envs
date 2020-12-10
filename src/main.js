import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const localCfg = {
  title: "This is the local environment",
  anotherAttribute: "Hello local, I was configured with Docker!",
};

const App = () => {
  const [result, setResult] = useState(localCfg);
  const setEnv = (resp) => {
    if (typeof resp.data === "object") {
      setResult(resp.data);
    }
  };
  useEffect(() => {
    axios.get("environment.json").then(setEnv);
  }, []);
  return (
    <ul>
      <li>Title: {result.title}</li>
      <li>Description: {result.anotherAttribute}</li>
    </ul>
  );
};

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
