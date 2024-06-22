import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { SiProducthunt } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Product from "./Product";
import { logout } from "../store/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidLogOut } from "react-icons/bi";
import { fetchProducts } from "../store/actions/productActions";

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  // toast.success("User Logged In");
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const products = useSelector((state) => state.product.products) || [];
  const token = useSelector((state) => state.auth.token) || null;
  useEffect(() => {
    if (!token) navigate("/");
    else {
      dispatch(fetchProducts());
    }
  }, [token]);

  return (
    <div className="h-screen relative w-screen overflow-x-hidden bg-[#FFFFFF] lg:flex ">
      <div className="lg:hidden flex justify-between items-center p-4 bg-[#000A30] text-[#F7F9FA]">
        <h1 className="text-xl font-semibold">DashBoard</h1>
        <button onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
      </div>

      <div
        className={`lg:block ${
          isOpen ? "block" : "hidden"
        } lg:fixed top-0 left-0 z-10 lg:w-2/12 bg-[#000A30] py-3 px-4 absolute h-full`}
      >
        <h1 className="hidden lg:block text-xl lg:text-2xl font-semibold text-[#F7F9FA] mb-4 lg:mb-8">
          DashBoard
        </h1>
        <p className="text-[#F7F9FA] bg-[#152561] flex items-center justify-start gap-3 mb-3 py-2 px-3 rounded-lg">
          <RiShoppingCart2Line /> Products
        </p>
        <button
          className="text-[#F7F9FA] flex items-center justify-start gap-3 hover:bg-[#152561] py-2 px-3 rounded-lg"
          onClick={logoutHandler}
        >
          {" "}
          <BiSolidLogOut /> Logout
        </button>
      </div>

      <div className="flex flex-col overflow-y-auto m-auto py-6 lg:ml-[17.6667%]">
        <h2 className="text-4xl font-semibold mb-6 px-4">Your Products</h2>
        <div className="flex flex-wrap ">
          {products.map((product, index) => (
            <Product
              key={index}
              id={product._id}
              productName={product.productName}
              price={product.price}
              productInfo={product.productInfo}
              productImage={product.productImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
