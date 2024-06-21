import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/reducers/authSlice";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(login({ username, password }));
      console.log(response)
      if (response.payload.success) {
        navigate("/products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-zinc-900">
      <form onSubmit={handleLogin} className="flex flex-col items-center justify-center">
        <input
          className="bg-gray-200 w-80 h-10 rounded-md p-2 mb-2"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="bg-gray-200 w-80 h-10 rounded-md p-2 mb-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="bg-teal-800 mb-3 text-white py-2 mt-2 px-14 rounded-xl text-xl" type="submit">Login</button>
        <p className="text-white text-sm">New to assignment ? <NavLink className="text-teal-700" to={'/register'}>Register Here</NavLink> </p>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default LoginComponent;
