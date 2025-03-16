import React from "react";
import ReactDOM from "react-dom/client"; // ✅ 최신 방식으로 변경
import App from "./App";
import "./index.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
