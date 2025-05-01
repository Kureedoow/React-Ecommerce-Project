import React from "react";
import Nerbar from "../layouts/Nerbar";
import Container from "../components/Container";
import product1 from "../../public/product1.png";
import product2 from "../../public/product2.png";
import product3 from "../../public/product3.png";
import product4 from "../../public/product4.png";
import Flex from "../components/Flex";
import Sidebar from "../layouts/Sidebar";
import { IoMdStarOutline } from "react-icons/io";
import Footer from "../layouts/Footer";
const Products = () => {
  return (
    <>
      <div>
        <Nerbar />
        <Sidebar />
      </div>
      <section className="pt-24">
        <Container>
          <Flex className="gap-16">
            <div className="w-3/5">
              <img src={product1} alt="" />
            </div>
            <div className="w-3/5">
              <img src={product2} alt="" />
            </div>
          </Flex>
          <div className="flex pt-44 gap-24">
            <div className="w-3/5">
              <img src={product3} alt="" />
            </div>
            <div className="w-3/5">
              <img src={product4} alt="" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h1 className="text-6xl font-extrabold font-dm">Products</h1>
          <Flex>
            <div className="flex text-yellow-500 text-3xl relative pt-8">
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </div>
            <div className="gap-2 absolute left-145 pt-8">
              <p className="text-gray-500 text-xl">1 Review</p>
            </div>
          </Flex>
          <div className="flex gap-32 pt-8 pb-4">
            <p className="text-2xl font-dm font-smibold line-through">$88.00</p>
            <p className="text-2xl font-dm font-smibold">$44.00</p>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />
          <div className="flex gap-8 py-16 ">
            <p className="text-5xl font-semibold">COLOR:</p>
            <h1 className="w-[50px] h-[50px] bg-[#979797] rounded-[100%] hover:scale-[1.7]"></h1>
            <h1 className="w-[50px] h-[50px] bg-[#FF8686] rounded-[100%] hover:scale-[1.7]"></h1>
            <h1 className="w-[50px] h-[50px] bg-[#7ED321] rounded-[100%] hover:scale-[1.7]"></h1>
            <h1 className="w-[50px] h-[50px] bg-[#B6B6B6] rounded-[100%] hover:scale-[1.7]"></h1>
            <h1 className="w-[50px] h-[50px] bg-[#15CBA5] rounded-[100%] hover:scale-[1.7]"></h1>
          </div>
          <div className="flex gap-26">
            <p className="text-5xl font-semibold">Size:</p>
            <select
              name=""
              id=""
              className="text-xl font-dm py-4 px-24 border rounded"
            >
              <option value="">None</option>
              <option value="">S</option>
              <option value="">L</option>
              <option value="">M</option>
              <option value="">X</option>
              <option value="">XL</option>
              <option value="">XXXL</option>
            </select>
          </div>
          <div className="flex gap-8 pt-16 pb-16">
            <p className="text-4xl font-semibold">QUANTITY:</p>
            <select
              name=""
              id=""
              className="text-xl font-dm py-4 px-26 border rounded"
            >
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />

          <div className=" flex gap-24 pt-8 pb-8">
            <p className="text-4xl font-semibold">STATUS:</p>
            <p className="text-gray-500 text-4xl">in stock</p>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />

          <div className=" flex gap-24 pt-8 pb-8">
            <button className="bg-gray-300 py-6 px-16 text-2xl border rounded font-bold">
              Add to Wish List
            </button>
            <button className="bg-black py-6 px-18 text-2xl border rounded text-white font-bold">
              Add to Cart
            </button>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />

          <div className=" flex gap-24 pt-8 pb-8">
            <p className="text-4xl font-bold">FEATURES & DETAILS</p>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />

          <div className=" flex gap-24 pt-8 pb-8">
            <p className="text-4xl font-bold">FEATURES & DETAILS</p>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />
          <div className=" flex gap-24 pt-8 pb-8">
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />
          <div className="gap-24 flex pt-16 pb-8">
            <p className="font-bold text-4xl">Description</p>
            <p className="text-gray-500 text-4xl">Review(1)</p>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />
          <p className="text-gray-500 text-4xl pt-8">1 review for Product</p>
          <div className="flex text-yellow-500 text-2xl relative pt-8 pb-8 gap-16">
            <p className="font-bold text-2xl text-black">
              Abdirahman Abdullahi
            </p>
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />
          <div className="gap-24 flex pt-16 pb-8">
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />
          <div className="gap-24 flex pt-16 pb-8">
            <p className="font-bold text-4xl">Add a Review</p>
          </div>
          <div className="pt-16 pb-3">
            <p className="font-bold text-xl">Name</p>
            <input
              type="text"
              placeholder="You Name"
              className="w-[900px] py-4 rounded outline-none"
            />
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />

          <div className="pt-16 pb-3">
            <p className="font-bold text-xl">Email</p>
            <input
              type="text"
              placeholder="Your email here"
              className="w-[900px] py-4 rounded outline-none"
            />
          </div>
          <hr className=" w-[800px] text-[#F0F0F0]" />

          <div className="pt-16 pb-3">
            <p className="font-bold text-xl">You review</p>
            <input
              type="text"
              placeholder="Your review here"
              className="w-[900px] py-4 rounded outline-none"
            />
          </div>
          <hr className=" w-[800px] text-[#F0F0F0] pb-8 " />
          <button className="bg-black py-6 px-28 text-2xl border rounded text-white font-bold">
            Post Now
          </button>
        </Container>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
