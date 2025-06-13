import React from 'react'
import BannerImage from "../../public/slider.png"
import BannerImage2 from "../../public/banner1.jpg"
import BannerImage3 from "../../public/banner2.jpg"
import BannerImage4 from "../../public/banner3.jpg"
import Container from '../components/Container'
import Flex from '../components/Flex'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
const BannerPage = () => {
    var settings = {
    Number:false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
   
    
  };
  return (
     <section className="bg-[#F0FFF0] py-24">
         
              {/* <Flex> 
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
              </Flex> */}
              <Container>
               <Slider {...settings}>
      <div>
     <Flex> 
                  <div className=" w-2/5 relative">
                  <p className=" text-4xl font-dm  absolute left-[0px] z-1 top-[90px] ml-20">
                    01|
                  </p>
                  <h1 className="text-6xl font-semibold font-dm pb-8 ml-60">
                    Final Offer
                  </h1>
                  <p className="font-dm text-lx font-[#6D6D6D] ml-60">
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
      </div>
          
      <div>
    <Flex> 
                <div>
                  <img src={BannerImage4} alt="" className='w-[1500px] h-[500px]' />
                </div>
              </Flex>
      </div>
      <div>
        <Flex>
          <div className=''>
            <img src={BannerImage3} alt="" />
          </div>
        </Flex>
                 
      </div>
     
    </Slider>
           </Container>

          </section>
  
  )
};

export default BannerPage