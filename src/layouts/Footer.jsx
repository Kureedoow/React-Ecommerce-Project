import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Footerlogo from "../../public/logo.png";
const Footer = () => {
  return (
    <section className="bg-[#F5F5F3] py-24">
      <Container>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-between">
            {/* MENU */}
            <div className="flex flex-col w-full sm:w-[45%] md:w-1/5 py-8">
              <h2 className="text-4xl pb-4 text-dm font-bold">MENU</h2>
              {["Home", "Shop", "About", "Contact", "Journal"].map(
                (item, index) => (
                  <p
                    key={index}
                    className="text-xl text-dm text-[#6D6D6D] font-bold hover:font-extrabold hover:text-black pb-4"
                  >
                    {item}
                  </p>
                )
              )}
            </div>

            {/* SHOP */}
            <div className="flex flex-col w-full sm:w-[45%] md:w-1/5 py-8">
              <h2 className="text-4xl pb-4 text-dm font-bold">SHOP</h2>
              {[
                "Category 1",
                "Category 2",
                "Category 3",
                "Category 4",
                "Category 5",
              ].map((cat, index) => (
                <p
                  key={index}
                  className="text-xl text-dm text-[#6D6D6D] font-bold hover:font-extrabold hover:text-black pb-4"
                >
                  {cat}
                </p>
              ))}
            </div>

            {/* HELP */}
            <div className="flex flex-col w-full sm:w-[45%] md:w-1/5 py-8">
              <h2 className="text-4xl pb-4 text-dm font-bold">HELP</h2>
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Special E-shop",
                "Shipping Secure",
                "Payments",
              ].map((help, index) => (
                <p
                  key={index}
                  className="text-xl text-dm text-[#6D6D6D] font-bold hover:font-extrabold hover:text-black pb-4"
                >
                  {help}
                </p>
              ))}
            </div>

            {/* CONTACT */}
            <div className="flex flex-col w-full sm:w-[45%] md:w-1/5 py-8">
              <h2 className="text-4xl pb-4 text-dm font-bold">
                (052) 611-5711
              </h2>
              <p className="text-xl text-dm text-[#6D6D6D] font-bold hover:font-extrabold hover:text-black pb-4">
                company@domain.com
              </p>
              <p className="text-xl text-dm text-[#6D6D6D] font-bold hover:font-extrabold hover:text-black pb-4">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>

            {/* FOOTER LOGO */}
            <div className="flex flex-col w-full sm:w-[45%] md:w-1/5 py-8 items-start">
              <img src={Footerlogo} alt="Footer Logo" />
              <p className="text-dm text-[#6D6D6D] mt-4">
                2020 Orebi Minimal eCommerce Figma Template by Adveits
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
