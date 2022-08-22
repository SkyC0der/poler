import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Covid from "./pages/Covid";
import PaymentFlow from "./pages/PaymentFlow";
import Pay from "./pages/PaymentFlow/Pay";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/paymentflow" element={<PaymentFlow />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
