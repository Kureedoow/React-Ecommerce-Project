import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { catagoryFunction } from '../slices/catagorySlice';


const Catagory = ({text,type,className,catagory}) => {
  
  let dispatch=useDispatch();
   catagory = useSelector((state) => state.catagory.value);
  let handleMinus=()=>{
  dispatch(catagoryFunction(false));
 

    }
    let handlePlus=()=>{
  dispatch(catagoryFunction(true));

    }
  return (
   <section>
      <div className={`flex items-center justify-between pt-8  pb-12 border-b  border-zinc-200 ${className}`}>
                <h1>{text}</h1>
                <div>
                    {
                 
                  type=="true"
                  ?catagory
                  ? <FiMinus onClick={handleMinus}/>
                 :  <FiPlus  onClick={handlePlus}/>
                   :""
               
                }
                </div>
              </div>
               {/* <hr className='mt-12 text-[#F0F0F0] w-[330px] bg-white shadow' /> */}
   </section> 
  )
}

export default Catagory