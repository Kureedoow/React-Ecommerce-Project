import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import BannerImage from "../../public/slider1.png";
import { MdLocalShipping } from "react-icons/md";
//import AddImage1 from "../../public/Adv.jpg";
//import AddImage2 from "../../public/Ad_2.jpg";
//import AddImage3 from "../../public/Ad_3.jpg";

//import AddImage4 from "../../public/image1.png";
// import AddImage5 from "../../public/image2.jpg";
// import AddImage6 from "../../public/image3.png";
// import AddImage7 from "../../public/image4.png";
// import AddImage8 from "../../public/image5.png";
// import AddImage9 from "../../public/image6.png";
// import AddImage10 from "../../public/image7.png";
// import AddImage11 from "../../public/image8.png";
// import AddImage12 from "../../public/image9.png";
// import AddImage13 from "../../public/image10.png";
// import AddImage14 from "../../public/image11.png";
// import AddImage15 from "../../public/image12.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import axios from "axios";
import Products from "../pages/Products";
import { IoIosHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";



const Banner = () => {
  let [alldata,setalldata]=useState([]);
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
    
  };


  useEffect(()=>{
 async function Alldata(){
  let data=await axios.get("https://dummyjson.com/products")
  setalldata(data.data.products);

}
Alldata();

},[])
console.log(alldata);

return (
    <>
      {/* <section className="bg-[#F0FFF0] py-24">
        <Container>
          <Flex>
            <div className=" w-2/5 relative">
              <p className=" text-4xl font-dm  absolute -left-[100px] top-[90px]">
                01|
              </p>
              <h1 className="text-6xl font-semibold font-dm pb-8">
                Final Offer
              </h1>
              <p className="font-dm text-lx font-[#6D6D6D]">
                Up to <span className="font-extrabold text-4xl">50%</span> sale
                for all furniture items!
                <div>
                  <button className="bg-black text-white text-2xl font-dm py-3 px-12 mt-16 rounded">
                    Shop Now
                  </button>
                </div>
              </p>
            </div>
            <div className="w-3/5 relative">
              <img
                className=" -w-[400px] absolute right-[120px] -top-[20px] "
                src={BannerImage}
                alt=""
              />
            </div>
          </Flex>

        </Container>

      </section> */}

      {/* Another Section definedn here */}
      <section className="p-8 bg-gray-300">
        <Container>
          <Flex className="justify-between font-dm text-2xl">
            <div className="w-3/5 relative">
              <span className="absolute -left-15 ">02|</span>
              <p>Two years warranty</p>
            </div>
            <div className="w-3/7 relative">
              <MdLocalShipping className="absolute -left-11 top-1" />

              <p>Free shipping</p>
            </div>
            <div className="w-4/12">
              <p>Return policy in 30 days</p>
            </div>
          </Flex>
        </Container>
      </section>
      {/*Another new section */}
      <section className="py-20">
        <Container>
          <Flex className="gap-24">
            <div className="pt-16">
              <img src="public/Adv.jpg" alt="" />
            </div>
            <div className="pt-16">
              <img src="public/Ad_2.jpg" alt="" />
              <div className="pt-16">
                <img src="public/Ad_3.jpg" alt="" />
              </div>
            </div>
          </Flex>
        </Container>
      </section>
      {/* shoping tools section  */}

       
      <section className="bg-[#F0FFF0] py-24">
        <Container>
          <h1 className="text-4xl font-bold text-dm pb-8">New Arrivals</h1>
   <Slider {...settings}>
  {
    alldata.map((item, index) => (
      (index >= 8 && index <= 32) && (
        <div key={index} className="flex justify-center">
          <div className="w-[370px] flex flex-col items-center">
            
            {/* Product Image + Hover Actions */}
            <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
              <img className="w-full h-full object-cover rounded" src={item.thumbnail} alt="" />

              {/* Hover Panel */}
              <div className="
                absolute bottom-0 left-0 w-full h-[150px] bg-amber-600 
                opacity-0 translate-y-full transition-all duration-300 ease-in-out
                group-hover:opacity-100 group-hover:translate-y-0
              ">
                <ul className='flex flex-col items-end px-[20px] py-4 gap-y-4 font-dm font-bold text-sm text-white'>
                  <li>Add to watch list <IoIosHeart className='inline ml-4' /></li>
                  <li>Compare <TfiReload className='inline ml-6' /></li>
                  <li>Add to cart <FaShoppingCart className='inline ml-4' /></li>
                </ul>
              </div>

              {/* "New" Button */}
              <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
                New
              </button>
            </div>

            {/* Product Info BELOW the image */}
            <div className="mt-4 w-full px-1">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-dm font-bold">{item.title}</h1>
                <p className="text-lg font-semibold">${item.price}</p>
              </div>
              <p className="font-dm font-medium text-gray-700">Black</p>
            </div>
          </div>
        </div>
      )
    ))
  }
</Slider>


          
        </Container>
      </section>
      {/* Another new section */}
      <section className="bg-lightgray py-24">
        <Container>
          {/* card-1 */}
          <h1 className="text-4xl font-bold text-dm pb-8 mb-">
            New Our Bestsellers
          </h1>
          <Flex className="gap-16">
            {/* card-1 */}

<Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image4.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>



            {/* card-2 */}

<Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image5.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>


            {/* card-3 */}
            <Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image5.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>

            {/* card-4 */}
           <Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image5.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>
          </Flex>
        </Container>
      </section>

      <section className="pt-24 py-24 bg-red-100">
        <Container>
          <Flex>
            <div className="w-2/7">
              <img src="/public/image8.png" alt="" className="rounded" />
            </div>
            <div className="w-4/7 ml-24">
              <h1 className="text-6xl text-dm font-bold">Phone of the year</h1>
              <p className="pt-4 text-2xl font-dm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <button className="bg-black text-white text-2xl font-dm py-3 px-12 mt-16 rounded">
                Shop Now
              </button>
            </div>
          </Flex>
        </Container>
      </section>

      <section className="bg-lightgray py-24">
        <Container>
          {/* card-1 */}
          <h1 className="text-4xl font-bold text-dm pb-8">Special Offers</h1>
          <Flex className="gap-16">
            <Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image9.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>
            {/* card-2 */}
<Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image10.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>

            {/* card-3 */}
            <Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image11.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>

            {/* card-4 */}
            <Flex className="gap-16">
  <div className="w-[370px] h-auto flex flex-col items-center">
    
    {/* Image + Hover Actions */}
    <div className="relative group overflow-hidden bg-white shadow rounded h-[400px] w-full">
      <img
        className="w-full h-full object-cover rounded"
        src="Image12.png"  // ✅ Corrected path
        alt="Product"
      />

      {/* Hover Action Panel */}
      <div className="
        absolute bottom-0 left-0 w-full h-[150px] bg-amber-600
        opacity-0 translate-y-full transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
      ">
        <ul className="flex flex-col items-end px-5 py-4 gap-y-4 font-dm font-bold text-sm text-white">
          <li>Add to watch list <IoIosHeart className="inline ml-4" /></li>
          <li>Compare <TfiReload className="inline ml-6" /></li>
          <li>Add to cart <FaShoppingCart className="inline ml-4" /></li>
        </ul>
      </div>

      {/* "New" Button */}
      <button className="bg-black text-white font-dm py-2 px-6 rounded absolute top-4 left-4 z-10">
        New
      </button>
    </div>

    {/* Product Info */}
    <div className="mt-4 w-full px-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-dm font-bold">
          Basic Crew Neck Tee
        </h1>
        <p>$44.00</p>
      </div>
      <p className="font-dm font-medium text-gray-700">Black</p>
    </div>
  </div>
</Flex>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Banner;
