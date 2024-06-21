import React from "react";
import { Route, Routes } from "react-router";
import RegisterForm from "./components/RegisterForm.jsx";
import LoginForm from "./components/Login.jsx";
import DashBoard from "./components/Dashboard.jsx";
import Logout from "./components/Logout.jsx";
import PrivateRoute from "./components/Privateroute.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/products"
          element={
            <PrivateRoute component={<DashBoard />}/>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/payment-success/:payment_id" element={<PaymentSuccess/>} />
      </Routes>
    </>
  );
};

export default App;
