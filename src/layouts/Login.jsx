import React from "react";
import Nerbar from "./Nerbar";
import Sidebar from "./Sidebar";
import Container from "../components/Container";
import { PiGreaterThanFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Flex from "../components/Flex";
import Footer from "./Footer";
const Login = () => {
  return (
    <section>
      <div>
        <Nerbar />
        <Sidebar />
      </div>
      <Container>
        <div>
          <h1 className="text-6xl font-dm font-bold hover:text-gray-500 pt-24">
            Login
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
        <p className="text-3xl font-dm font-semibold pt-24 text-gray-400 hover:text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. lorem <br />
          Ipsum has been the industry's standard dummy text ever since the.
        </p>
        <div>
          <h1 className="text-6xl font-dm font-bold mt-24">
            Returning Customer
          </h1>
        </div>

        <Flex>
          <div className="w-2/5">
            <form action="">
              <p className="font-bold text-xl mt-16">Email Address</p>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-[900px] py-4 rounded outline-none"
              />
              <hr className=" w-[500px] text-[#F0F0F0]" />
            </form>
          </div>
          <div className="w-4/5">
            <p className="font-bold text-xl mt-16">Your password</p>
            <input
              type="text"
              placeholder="*****************"
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
          </div>
        </Flex>
        <div className="mt-24">
          <button className="text-3xl font-dm font-bold border rounded py-3 px-18 hover:bg-blue-500 hover:text-4xl hover:font-extrabold">
            Continue
          </button>
        </div>

        <div>
          <h1 className="text-6xl font-dm font-bold mt-24">New Customer</h1>
        </div>
        <p className="text-3xl font-dm font-semibold pt-24 text-gray-400 hover:text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. lorem <br />
          Ipsum has been the industry's standard dummy text ever since the.
        </p>
        <div className="mt-24">
          <button className="text-3xl font-dm font-bold border rounded py-3 px-18 hover:bg-blue-500 hover:text-4xl hover:font-extrabold">
            Continue
          </button>
        </div>
      </Container>
      <div className="mt-24">
        <Footer />
      </div>
    </section>
  );
};

export default Login;
