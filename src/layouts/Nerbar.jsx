import React, { use } from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import imagelogo from "../../public/logo.png";
import List from "../components/List";
import Flex from "../components/Flex";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeButton } from "../slices/BreadCrump";
const Nerbar = () => {
  let dispatch=useDispatch();
  let handleclick=(name)=>{
  dispatch(activeButton(name));
  //console.log("OK");
  
 
  }
  return (
    <nav className="py-16">
      <Container>
        <Flex>
          <div className="w-3/12">
            <NavLink to="/" onClick={handleclick}><Image src={imagelogo} /></NavLink>
          </div>
          <div className="w-8/12"> <ul className="flex gap-x-20">
              <NavLink to="/" onClick={()=>handleclick("Home")}> <List text="Home" className="text-xl font-bold"/></NavLink>
              <NavLink to="/shop" onClick={()=>handleclick("Shop")}> <List text="Shop"className="text-xl font-bold" /></NavLink>
              <NavLink to="/about" onClick={()=>handleclick("About")}><List text="About" className="text-xl font-bold"/>  </NavLink>
            
              <NavLink to="/contact" onClick={()=>handleclick("Contact")}><List text="Contact" className="text-xl font-bold"/> </NavLink>
              <NavLink to="/products" onClick={()=>handleclick("Products")}><List text="Products" className="text-xl font-bold"/></NavLink>
    
              
              {/* <List text="Journal" /> */}
              <NavLink to="/signup" onClick={()=>handleclick("SignUp")}><List text="SignUp" className="text-xl font-bold"/> </NavLink>
              <NavLink to="/login" onClick={()=>handleclick("Login")}><List text="Login" className="text-xl font-bold"/> </NavLink> 
            </ul>
          </div>
        </Flex>
      </Container>
      
    </nav>
  )
}; 

export default Nerbar
