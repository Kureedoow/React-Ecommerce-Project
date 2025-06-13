import React, {useState} from 'react'
import Container from '../components/Container'
import Nerbar from './Nerbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Flex from '../components/Flex'
import {useSelector } from 'react-redux'
import { increment } from '../slices/CounterSlices'
import { NavLink } from 'react-router-dom'
import { PiGreaterThanFill } from 'react-icons/pi'
const Shop = () => {
let data = useSelector((state)=> state.BreadCrump.prevvalue);
// let data2 = useSelector((state)=> state.BreadCrump.workingvalue);
  return (
 <section>
    <Nerbar/>
    <Sidebar/>
   <Container>

   <h1 className="text-5xl font-dm font-bold hover:text-gray-500 pt-24"> Shop </h1>
    <h2 className="text-[#767676] text-xl hover:text-black hover:font-semibold"> <NavLink to={data=="Home" ? "/" : `/${data}`}>{data}</NavLink> > Shop </h2>
     
    </Container>
    <div>
        <Footer/>
    </div>
 </section>
  )
}

export default Shop