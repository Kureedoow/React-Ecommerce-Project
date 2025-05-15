import React from "react";
import Cards from "../pages/Cart";
import Nerbar from "./Nerbar";
import Sidebar from "./Sidebar";
import { PiGreaterThanFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import CartImage from "../../public/cartph1.png";
import { RxCross2 } from "react-icons/rx";
import Footer from "./Footer";
const Cardlayout = () => {
  return (
    <section>
      <div>
        <Nerbar />
        <Sidebar />
      </div>
      <Container>
        <div>
          <h1 className="text-7xl font-dm font-bold hover:text-gray-500 pt-24">
            Cart
          </h1>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <h1 className="text-[#767676] text-xl hover:text-black hover:font-semibold">
            <NavLink to="/" className="list-none">
              <li>Home</li>
            </NavLink>
          </h1>
          <PiGreaterThanFill />
          <h2 className="text-[#767676] text-xl hover:text-black hover:font-semibold">
            About
          </h2>
        </div>

        <div>
          <ul className="flex max-w-[100%] m-auto gap-x-100 bg-gray-200 h-[120px] items-center  rounded mt-52  font-dm font-extrabold border-x-4">
            <NavLink to="/products" className="ml-8 ">
              <li>Product</li>
            </NavLink>
            <NavLink to="/products" className="ml-24 ">
              <li>Price</li>
            </NavLink>
            <NavLink to="/products">
              <li>Quantity</li>
            </NavLink>
            <NavLink to="/products">
              <li>Total</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <ul className="flex  m-auto gap-x-87 bg-white h-[120px] items-center mt- rounded  border-x-4 border-b-1 text-sm font-dm font-extrabold">
            <NavLink to="/products" className=" flex items-center gap-4">
              <RxCross2 /> <img src={CartImage} alt="" className="" />
              <li>Product name</li>
            </NavLink>
            <NavLink to="/products">
              <li>$44.00</li>
            </NavLink>
            <NavLink to="/products" className="ml-4 ">
              <button className="bg-gray-200 py-2 px-8 flex items-center gap-8 rounded border-1">
                {" "}
                <li>-</li> <li>+</li>
              </button>
            </NavLink>
            <NavLink to="/products" className="ml-10">
              <li>$44.00</li>
            </NavLink>
          </ul>
        </div>

        <div>
          <ul className="flex  m-auto gap-x-87 bg-white h-[120px] items-center mt- rounded  border-x-4 border-b-1 font-dm font-bold">
            <NavLink to="" className=" flex items-center gap-4">
              <select name="" id="" className=" py-4 px-24 border ml-8">
                <option value="#">Size</option>
                <option value="#">M</option>
                <option value="#">L</option>
                <option value="#">xl</option>
                <option value="#">xx</option>
                <option value="#">xxl</option>
                <option value="#">xxx</option>
              </select>
              <li className="text-2xl font-dm font-bold">Apply coupon</li>
            </NavLink>

            <NavLink to="/products" className="ml-150 ">
              <button className="bg-gray-200 py-2 px-8 flex items-center  rounded border-1">
                {" "}
                <li>Update cart</li>
              </button>
            </NavLink>
          </ul>
        </div>
      </Container>
      <div className="mt-100">
        <Footer />
      </div>
    </section>
  );
};

export default Cardlayout;
