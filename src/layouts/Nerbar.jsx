import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import imagelogo from "../../public/logo.png";
import List from "../components/List";
import Flex from "../components/Flex";
import { NavLink } from "react-router-dom";
const Nerbar = () => {
  return (
    <nav className="py-16">
      <Container>
        <Flex>
          <div className="w-3/12">
            <NavLink to="/">
              <Image src={imagelogo} />
            </NavLink>
          </div>
          <div className="w-8/12">
            <ul className="flex gap-x-20">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <List text="Shop" />
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact</li>
              </NavLink>
              <NavLink to="/products">
                <li>Products</li>
              </NavLink>
              <List text="Journal" />
              <NavLink to="/signup">
                <li>Sign Up</li>
              </NavLink>
              <NavLink to="/login">
                <li>Login</li>
              </NavLink>
            </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Nerbar;
