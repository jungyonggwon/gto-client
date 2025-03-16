import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";  // 스타일 적용을 위한 import

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")  // 'root'라는 ID를 가진 div에 App을 렌더링
);
