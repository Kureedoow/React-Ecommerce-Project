import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PrevArrow = ({className, style, onClick}) => {
  return (
   <div
        className={ `${className} bg-indigo-300 text-red-500 w-[64px] h-[64px] rounded-full flex justify-center items-center text-3xl absolute top-40 -left-17`}
        
        onClick={onClick}
      >
      <FaLongArrowAltLeft/>
      </div>
  )
}

export default PrevArrow