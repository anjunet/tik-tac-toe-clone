import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Provider from "./contexts/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
