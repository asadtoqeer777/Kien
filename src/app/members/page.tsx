import React from 'react'

import BrandLogo from "../__assets/images/pngs/logo.png"
import MembersBg from "../__assets/images/pngs/members.png"
import Image from 'next/image'
import Header from '../__components/header/Header'
import Button from '../__components/buttons/Button'

const MembersPage = () => {
  return (
    <div>

      <div className="grid grid-cols-11 pt-[40px] uppercase">
        <div className="col-span-6 relative ">
          <div className="w-[1px] h-[100%] bg-black absolute top-[-10px] right-0"></div>
          <div className="2xl:w-[318px] xl:w-[300px] lg:w-[280px] md:w-[260px] w-[70%] flex justify-between 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px] text-[12] leading-5 font-medium relative  ml-3">
            <div>
              <div>
                Team
              </div>
              <div>
                ( CO - FOUNDER )
              </div>
            </div>
            <div>Members</div>

            <div className="w-[1px] h-[95.8vh] bg-black absolute top-[-10px] right-[-12px]"></div>
            <div className="w-[1px] h-[95.8vh] bg-black absolute top-[-10px] left-0"></div>
          </div>
          <h1 className="2xl:text-[78px] xl:text-[68px] lg:text-[65px] md:text-[60px] sm:text-[50px] text-[30px] font-bold leading-[70px] mt-8  ml-3">
            SIVA
          </h1>
          <div className="mt-[90px]  relative">
            <Image className='w-[100%] h-[57vh] md:h-[57vh] lg:h-[59.5vh] xl:h-[62vh] 2xl:h-[64vh]' src={MembersBg} alt='' />
            <div className="w-[100vw] h-[3px] bg-black absolute top-0 left-0"></div>
          </div>
        </div>
        <div className="col-span-5">

          <div className="grid grid-cols-12">
            <div className="col-span-5 relative px-3 2xl:px-0">
              <Image className='2xl:w-[253px] xl:w-[100%]  2xl:h-[75px] xl:h-[75px] mx-3' src={BrandLogo} alt='' />
              <div className="relative">

                <div className="text-[48px] lg:text-[68px] xl:text-[78px] 2xl:text-[88px] font-medium tracking-[-5.28px] 2xl:w-[145px] xl:w-[115px] md:w-[42%] w-[52%]   break-words 2xl:leading-[68px] leading-[50px] mt-2 relative text-end m-auto ">
                  2023
                </div>
                <div className="2xl:w-[46px] w-[40px] h-[40vh] bg-black absolute top-[14%] xl:left-[29%] md:left-[20%] left-[12%]"></div>
              </div>

              <div className="w-[1px] h-[95.8vh] bg-black absolute top-[-10px] right-[-24px]"></div>
              {/* <div className="w-[1px] h-[100vh] bg-black absolute top-[-10px] left-[-12px]"></div> */}
            </div>
            <div className="col-span-7 pl-7 pr-3">
              <div>
                <div className=" flex justify-between 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px] text-[12] leading-5 font-medium relative ">
                  <div>
                    <div>
                      Team
                    </div>

                  </div>
                  <div>Members</div>

                </div>
                <div className="mt-[10px] 2xl:text-[12px] text-[10px] font-medium pl-1">

                  <div className=" flex justify-between">
                    <div>
                      (01)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                  <div className="  flex justify-between">
                    <div>
                      (02)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                  <div className="  flex justify-between">
                    <div>
                      (03)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                  <div className="  flex justify-between">
                    <div>
                      (04)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[140px]">
                <div className="2xl:mb-[115px] xl:mb-[85px] mb-[25px] ">
                  <div className=" flex justify-between 2xl:text-[12px] text-[10px] leading-[15px] font-medium relative tracking-[-0.72px]">
                    <div>
                      <div>
                        (04)
                      </div>
                      <div>
                        RELEVANT INFO
                      </div>
                    </div>
                    <div>IND</div>
                    <div>
                      <div>
                        (04)
                      </div>
                      <div>
                        RELEVANT INFO
                      </div>
                    </div>

                  </div>
                  <div className="2xl:text-[78px] xl:text-[68px] lg:text-[65px] md:text-[55px] sm:text-[50px] text-[30px] font-bold leading-[65px] text-right tracking-[-4.68px]">
                    2023
                  </div>
                </div>

              </div>
            </div>
            <div className="col-span-12">
              <div className=" pr-3">
                <div className="2xl:text-[78px] xl:text-[67px] lg:text-[65px] md:text-[50px] sm:text-[50px] text-[30px] 2xl:leading-[70px] leading-[55px] tracking-[-4.68px] font-bold text-end">
                  ideation
                  wizard
                </div>
              </div>

            </div>

            <div className="col-span-5"></div>
            <div className="col-span-7 pl-7 pr-3">
              <div className=" 2xl:text-[12px] text-[10px] leading-[15px] font-medium relative tracking-[-0.72px]">
                <div className='w-[60%] flex justify-between'>
                  <div className=''>
                    (04)
                  </div>
                  <div className=''>
                    IND
                  </div>
                </div>
                <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                  <div>
                    chakkaravarthy@kien.travel
                  </div>
                  <div className='mt-2 2xl:mt-0'>
                    <Button btnClasses={"bg-secondary text-black w-[122px] h-[25px] rounded-[19.5px] text-[10px] 2xl:text-[12px]"} btntext={"Connect Here"} />
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>
      </div>


    </div>
  )
}

export default MembersPage




// import React from "react";
// import Slider from "react-slick"

// const MembersMain = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   )
// }

// export default MembersMain

