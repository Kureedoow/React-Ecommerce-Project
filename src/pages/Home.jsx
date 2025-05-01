import React from "react";
import Nerbar from "../layouts/Nerbar";
import Sidebar from "../layouts/Sidebar";
import Banner from "../layouts/Banner";
import Footer from "../layouts/Footer";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Nerbar />
      <Sidebar />
      <Banner />
      <Footer />
      <Products />
    </div>
  );
};

export default Home;
