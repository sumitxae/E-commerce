import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to={"/register"}>Register</NavLink>
    </>
  );
};

export default Home;
