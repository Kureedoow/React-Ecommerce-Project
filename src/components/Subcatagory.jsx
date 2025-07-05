import React from 'react'
import { FiPlus } from 'react-icons/fi'

const Subcatagory = ({text,type,className}) => {
     let handleSubcatagory=()=>{
  console.log("pressed");
  
    }
  return (
   <section>
         <div className={`flex items-center justify-between pt-8  pb-12 border-b  border-zinc-200 ${className}`}>
                   <h1>{text}</h1>
                   <div>
                       {
                       type=="true" && <FiPlus onClick={handleSubcatagory}/>
                   }
                   </div>
                 </div>
                  {/* <hr className='mt-12 text-[#F0F0F0] w-[330px] bg-white shadow' /> */}
      </section> 
  )
}

export default Subcatagory