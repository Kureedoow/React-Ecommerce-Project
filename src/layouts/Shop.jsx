import React, { useState } from 'react'
import Container from '../components/Container'
import Navbar from "../layouts/Nerbar"
import Sidebar from './Sidebar'
import Footer from './Footer'
import Flex from '../components/Flex'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoGrid } from "react-icons/io5"
import { FaBars } from "react-icons/fa6"
import Pagination from '../components/Pagination'
import { FiPlus } from 'react-icons/fi'
import Catagory from '../components/Catagory'
import Subcatagory from '../components/Subcatagory'

const Shop = () => {
  let data = useSelector((state) => state.BreadCrump.prevvalue);
  let catagory = useSelector((state) => state.catagory.value);
  console.log(catagory);
  
  let [selectItem, setselectItem] = useState("6");
  let [disclose,setdisclose]=useState(true);
  // let [showCatagory,setshowCatagory]=useState(false);
  let handleChange=(e)=>{
 setselectItem(e.target.value);
 
 
  }
  console.log(selectItem);
  let handledisclose=()=>{
  setdisclose(!disclose)
  }
  return (
    <section>
      <Navbar />
      <Sidebar />
      <Container>
        <h1 className="text-5xl font-dm font-bold hover:text-gray-500 pt-24">Shop</h1>
        <h2 className="text-[#767676] text-xl hover:text-black hover:font-semibold">
          <NavLink to={data === "Home" ? "/" : `/${data}`}>{data}</NavLink> <span className='mx-1'> &gt; </span> Shop
        </h2>

        <Flex className="pt-[100px]">
          <div className='w-3/12 text-xl font-dm font-bold pr-16'>Shop by Category
        <Catagory text='Catagory 1' type="true"/>
        {
       catagory &&   <div className='text-red-500 ml-8'>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
        </div>
        }
          <Catagory text='Catagory 2' type="true"/>
        {
       catagory &&   <div className='text-red-500 ml-8'>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
        </div>
        }
          <Catagory text='Catagory 3' type="true"/>
        {
       catagory &&   <div className='text-red-500 ml-8'>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
        </div>
        }
        
        {/* <div className='text-red-500 ml-8'>
             <Catagory text='Laptops' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
                <Subcatagory text='Lenovo' type="true"/>
        </div> */}
       

          
          </div>

          <div className='w-10/12'>
            <Flex className="justify-between mb-24">
              <div onClick={handledisclose} className='flex gap-x-16 text-4xl'>
                <IoGrid />
                <FaBars />
              </div>

              <div className='flex gap-x-4 text-xl items-center ml-[300px]'>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" className="border px-16 py-1 roundednpm">
                  <option value="featured">Featured</option>
                  <option value="l">L</option>
                  <option value="m">M</option>
                  <option value="s">S</option>
                  <option value="x">X</option>
                </select>
              </div>

              <div className='flex gap-x-4 text-xl items-center'>
                <label htmlFor="show">Show:</label>
                <select onChange={handleChange} id="show" className="border px-8 py-1 rounded">
                  <option value="6">6</option>
                  <option value="12">12</option>
                  <option value="18">18</option>
                  <option value="36">36</option>
                </select>
              </div>
            </Flex>

            {
              disclose
              ?
              <Pagination itemsPerPage={selectItem==6?6
              :selectItem==12?12
              :selectItem==18?18
              :selectItem==36?36
              :12} />
              :
          <p>Please appear and make another Pagination design</p>
            }
          </div>
        </Flex>
      </Container>

      <div className='pt-24'>
        <Footer />
      </div>
    </section>
  )
}

export default Shop
