import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Router>
      <Provider store={store}>
        <App />
        <ToastContainer/>
      </Provider>
    </Router>
  
);
