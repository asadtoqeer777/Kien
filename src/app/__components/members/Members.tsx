import React from 'react'
import Header from '../header/Header'
import BrandLogo from "../__assets/images/pngs/logo.png"
import MembersBg from "../__assets/images/pngs/members.png"
import Image from 'next/image'
import Button from '../buttons/Button'

const MembersPage = () => {
  return (
    <div>

      <div className="grid grid-cols-11 mt-[40px] uppercase">
        <div className="col-span-6 relative ">
          <div className="w-[1px] h-[100%] bg-black absolute top-[-10px] right-0"></div>
          <div className="2xl:w-[318px] xl:w-[300px] lg:w-[280px] md:w-[260px] w-[70%] flex justify-between 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px] leading-5 font-medium relative  ml-3">
            <div>
              <div>
                Team
              </div>
              <div>
                ( CO - FOUNDER )
              </div>
            </div>
            <div>Members</div>

            <div className="w-[1px] h-[96vh] bg-black absolute top-[-10px] right-[-12px]"></div>
            <div className="w-[1px] h-[96vh] bg-black absolute top-[-10px] left-0"></div>
          </div>
          <h1 className="2xl:text-[78px] xl:text-[70px] lg:text-[65px] md:text-[60px] sm:text-[50px] text-[30px] font-bold leading-[70px] mt-8  ml-3">
            SIVA
          </h1>
          <div className="mt-[90px] relative">
            <Image className='w-[100%] h-[] sm:h-[] md:h-[65vh] lg:h-[60vh] xl:h-[62vh] 2xl:h-[64vh]' src={MembersBg} alt='' />
            <div className="w-[100vw] h-[3px] bg-black absolute top-0 left-0"></div>
          </div>
        </div>
        <div className="col-span-5">

          <div className="grid grid-cols-12">
            <div className="col-span-5 relative">
              <Image className='w-[253px] h-[75px] mx-3' src={BrandLogo} alt='' />
              <div className="relative">

                <div className="text-[48px] sm:text-[] md:text-[] lg:text-[68px] xl:text-[78px] 2xl:text-[88px] font-medium tracking-[-5.28px] 2xl:w-[145px] xl:w-[115px]  break-words leading-[68px] mt-2 relative text-end m-auto ">
                  2023
                </div>
                <div className="w-[46px] h-[40vh] bg-black absolute top-[14%] left-[29%]"></div>
              </div>

              <div className="w-[1px] h-[96vh] bg-black absolute top-[-10px] right-[-24px]"></div>
              {/* <div className="w-[1px] h-[100vh] bg-black absolute top-[-10px] left-[-12px]"></div> */}
            </div>
            <div className="col-span-7 pl-7 pr-3">
              <div>
                <div className=" flex justify-between text-[22px] leading-5 font-medium relative ">
                  <div>
                    <div>
                      Team
                    </div>

                  </div>
                  <div>Members</div>

                </div>
                <div className="mt-[10px] text-[12px] font-medium pl-1">

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
                <div className="mb-[115px]">
                  <div className=" flex justify-between text-[12px] leading-[15px] font-medium relative tracking-[-0.72px]">
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
                  <div className="text-[78px] font-bold leading-[65px] text-right tracking-[-4.68px]">
                    2023
                  </div>
                </div>

              </div>
            </div>
            <div className="col-span-12">
              <div className=" pr-3">
                <div className="text-[78px] leading-[70px] tracking-[-4.68px] font-bold text-end">
                  ideation
                  wizard
                </div>
              </div>

            </div>

            <div className="col-span-5"></div>
            <div className="col-span-7 pl-7 pr-3">
              <div className="text-[12px] leading-[15px] font-medium relative tracking-[-0.72px]">
                <div className='w-[60%] flex justify-between'>
                  <div className=''>
                    (04)
                  </div>
                  <div className=''>
                    IND
                  </div>
                </div>
                <div className='flex flex-col xl:flex-row xl:justify-between'>
                  <div>
                    chakkaravarthy@kien.travel
                  </div>
                  <div className='mt-4 xl:mt-0'>
                    <Button btnClasses={"bg-secondary text-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"} btntext={"Connect Here"} />
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