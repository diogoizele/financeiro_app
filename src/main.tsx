import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import moment from "moment";
import 'moment/locale/pt-br.js';  

import { UserProvider } from "./context";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./styles/main.css";

moment.locale("pt-br");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
