import React from "react";
import Container from "../components/Container";
import { PiGreaterThanFill } from "react-icons/pi";
import brandimg1 from "../../public/brand1.png";
import brandimg2 from "../../public/brand2.png";
import Flex from "../components/Flex";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Aboutpage = () => {
let dispatch = useDispatch();
let data = useSelector((state)=> state.BreadCrump.prevvalue);
 
let handleIncrement = () =>{
dispatch(increment(10));
}
  return (

    <section className="py-8">
    <Container>
       <h1 text="Contact" className="text-5xl font-dm font-bold hover:text-gray-500 pt-24"> About</h1>
   <h2 className="text-[#767676] text-xl hover:text-black hover:font-semibold"><NavLink to={data=="Home" ? "/" : `/${data}`}>{data}</NavLink> > About</h2>

        <div className="flex gap-16 pt-24">
          <img src={brandimg1} alt="" />
          <img src={brandimg2} alt="" />
        </div>
        <div className="pt-16">
          <p className="text-3xl font-dm font-bold leading-10">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </p>
          <Flex className="pt-24 gap-8 pb-24">
            <div className="w-6/12">
              <h1 className="text-5xl font-dm font-bold hover:text-green-500 hover:font-extrabold">
                Our Vision
              </h1>
              <p className="text-lg font-dm font-bold text-[#767676] pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-6/12">
              <h1 className="text-5xl font-dm font-bold hover:text-blue-500 hover:font-extrabold">
                Our Story
              </h1>
              <p className="text-lg font-dm font-bold text-[#767676] pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>
            <div className="w-4/12">
              <h1 className="text-5xl font-dm font-bold hover:text-yellow-500 hover:font-extrabold">
                Our Brands
              </h1>
              <p className="text-lg font-dm font-bold text-[#767676] pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </Flex>
        </div>
     
    </Container>
    </section>
  );
};

export default Aboutpage;
