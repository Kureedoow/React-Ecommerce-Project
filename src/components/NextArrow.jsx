import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NextArrow = ({className, style, onClick}) => {
  return (
    <div
      className={ `${className} bg-indigo-300 text-red-500 w-[64px] h-[64px] rounded-full flex justify-center items-center text-3xl absolute top-40 -right-7`}
     
      onClick={onClick}
    >
    <FaLongArrowAltRight/>
    </div>
  )
}

export default NextArrow