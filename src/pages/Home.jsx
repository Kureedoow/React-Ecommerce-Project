import React from "react";
import Nerbar from "../layouts/Nerbar";
import Sidebar from "../layouts/Sidebar";
import Banner from "../layouts/Banner";
import Footer from "../layouts/Footer";
import Products from "./Products";
import SingUp from "../layouts/SignUp";
import BannerPage from "../layouts/BannerPage";
const Home = () => {
  return (
    <div>
      <Nerbar />
      <Sidebar />
      <BannerPage/>
      <Banner />
      <Footer />
      <Products />
      <SingUp />
    </div>
  );
};

export default Home;
