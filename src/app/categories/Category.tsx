import React from 'react'
import Header from '../__components/header'
import logo from "../__assets/images/pngs/logo.png"
import footerLogo from "../__assets/images/pngs/footerLogo.png"
import Image from 'next/image'
import Button from '../__components/buttons'

const Category = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div className="mt-[30px]">
          <div className="grid grid-cols-6 gap-2" style={{
            backgroundImage: "url(./page5heroBg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            borderBottom: "1px solid black",
            backgroundPosition: "center"
          }}>
            <div className="col-span-2"></div>
            <div className="col-span-4 text-[35px] sm:text-[60px] md:text-[70px]: lg:text-[80px] xl:text-[90px] 2xl:text-[120px] leading-[40px] sm:leading-[50px] md:leading-[70px] lg:leading-[100px]	mt-[42px]">
              <h1>
                Peripatetic
              </h1>
              <h1>
                Additional Info
              </h1>
            </div>

          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-6 gap-2 border-b-[1px] border-black pb-5">
            <div className="col-span-2">
              <div className="flex items-center gap-2 ml-4 mt-2">
                <Button btnClasses={"bg-transparent text-black border-[1px] border-black w-[122px] h-[20px] rounded-[19.5px] text-[12px]"} btntext={"USER LOGIN"} />
                <Button btnClasses={"bg-black text-white border-[1px] border-black w-[122px] h-[20px] rounded-[19.5px] text-[12px]"} btntext={"ENROLL NOW"} />

              </div>
            </div>
            <div className="col-span-4">
              <div className=" text-[35px] sm:text-[60px] md:text-[70px]: lg:text-[80px] xl:text-[90px] 2xl:text-[120px] leading-[40px] sm:leading-[50px] md:leading-[70px] lg:leading-[100px] mt-10 sm:mt-[22px] text-[#00000080]">
                <h1>
                  Inquisitive
                </h1>
                <h1>
                  Critical • Profound
                </h1>
              </div>

            </div>

          </div>
        </div>

        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-2"></div>
          <div className="col-span-4">
            <div className="mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[140px] xl:mt-[160px] 2xll:mt-[181px]">
              <div className="text-[25px]  sm:text-[30px] md:text-[40px]: lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-[30px] sm:leading-[70px]	mt-[22px] text-[#00000080]">
                <h1>
                  Peripatetic Refers
                </h1>
              </div>
              <div className="text-[#00000033] text-[16px] sm:text-[20px] md:text-[22px]: lg:text-[25px] xl:text-[28px] 2xl:text-[30px] font-medium w-[90%] sm:w-[70%]">
                <div>
                  A seeker who explores the world's heart to understand its essence, connecting nature, people, and culture on a profound philosophical & critical quest.
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
      <div className="footerArea flex justify-end mt-6">
        <Image className='w-[70px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[200px] 2xl:w-[300px]' src={footerLogo} alt='footerLogo' />
      </div>
    </div>
  )
}

export default Category