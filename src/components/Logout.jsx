import React from "react";
import { logout } from "../store/reducers/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Logout = () => {
  
  return <button onClick={logoutHandler}>Logout</button>;
};

export default Logout;
