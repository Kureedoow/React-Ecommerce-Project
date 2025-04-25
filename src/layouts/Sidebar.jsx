import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Sidebar = () => {
  return (
    <section className="bg-[#D8D8D8] p-8">
      <Container>
        <Flex>
          <div className="w-1/5 flex items-center gap-3">
            <FaBarsStaggered />
            <h1 className="text-sn text-secondary font-dm font-semibold">
              Shop by Category
            </h1>
          </div>
          <div className="w-3/3 items-center">
            <div className="relative">
              <input
                className="py-4 px-6 pr-16 bg-white w-full rounded placeholder:text-[#800000]"
                type="text"
                placeholder="Search Products"
              />
              <IoSearchSharp className="absolute top-1/2 right-[30px] -translate-y-1/2" />
            </div>
          </div>
          <div className="w-1/5 flex items-center justify-end gap-4">
            <FaUserAlt />
            <MdOutlineArrowDropDown />
            <FaCartArrowDown />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Sidebar;
