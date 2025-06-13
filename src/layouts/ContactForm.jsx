import React from "react";
import Nerbar from "./Nerbar";
import Sidebar from "./Sidebar";
import Container from "../components/Container";

import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const ContactForm = () => {
  let data = useSelector((state)=> state.BreadCrump.prevvalue);
  // let data2 = useSelector((state)=>(state.BreadCrump.workingvalue));
  return (
    <section>
      <div>
        <Nerbar />
        <Sidebar />
      </div>
      <Container>
        <h1 className="text-5xl font-dm font-bold hover:text-gray-500 pt-24">
          Contact
        </h1>
<h2 className="text-[#767676] text-xl hover:text-black hover:font-semibold"><NavLink to={data=="Home" ? "/" : `/${data}`}>{data}</NavLink> > Contacts </h2>
      
        <div>
          <h1 className="text-6xl font-dm font-bold hover:text-gray-500 pt-24">
            Fill up this form
          </h1>
        </div>

        <div>
          <p className="font-bold text-xl pt-8">Name</p>
          <input
            type="text"
            placeholder="Your name here."
            required
            className="w-[900px] py-4 rounded outline-none"
          />
          <hr className=" w-[500px] text-[#F0F0F0]" />
        </div>

        <div>
          <p className="font-bold text-xl pt-8">Email</p>
          <input
            type="text"
            placeholder="Your email here."
            className="w-[900px] py-4 rounded outline-none"
          />
          <hr className=" w-[500px] text-[#F0F0F0]" />
        </div>

        <div className="mb-8">
          <p className="font-bold text-xl pt-8">message</p>
          <textarea
            name="message"
            id="messsage"
            placeholder="Your message here"
            className=" rounded py-4 outline-none w-[700px]"
          ></textarea>
          <hr className=" pb-8 w-[500px] text-[#F0F0F0]" />
        </div>
        <div className="mb-8">
          <button className="bg-black py-3 px-24 text-white text-4xl font-dm font-bold rounded hover:bg-blue-500 hover:text-6xl">
            Post
          </button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127591.73873234881!2d45.22426268085347!3d2.059198672217971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425955ce6b53%3A0xbb20eaaa52cc59d9!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sbd!4v1747063999996!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[500px] rounded pt-8"
        ></iframe>
      </Container>
      <div className="pt-26">
        <Footer />
      </div>
    </section>
  );
};

export default ContactForm;
