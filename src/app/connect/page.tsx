"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../__components/header/Header'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image'
import backArrow from "../__assets/images/svgs/backArrow.svg"
import DownArrow from "../__assets/images/svgs/downArrow.svg"
import Button from '../__components/buttons/Button'
import FooterLogo from "../__assets/images/svgs/footerLogo.svg"
import Container from '../__components/container/Container'

gsap.registerPlugin(ScrollTrigger);

const Connect = () => {
  const router = useRouter()

  useEffect(()=> {
    gsap.from("#connectFade", {
      opacity: 0, 
      x: 800, 
      duration: 1
      
    });
    // gsap.from("#connectHeading", {
    //   opacity: 0, 
    //   x: -800, 
    //   duration: 1
      
    // });
  }, [])
  return (
    <div>
      <div className="h-[100%]">

        <div className="h-[100vh] bg-black pt-[30px] sm:pt-[50px] md:pt-[80px] xl:pt-[120px] relative">
          <Container>
            <div id='connectHeading'>
              <h1 className='text-[60px] sm:text-[100px] md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[275px] text-white font-bold xl:tracking-[-16.5px] uppercase leading-[70px]'>
                Connect
              </h1>
            </div>
            <div className="h-[90vh] w-[100%] sm:h-[85vh] sm:w-[90%] md:h-[82vh] md:w-[80%] xl:h-[82vh] 2xl:h-[85vh] xl:w-[70%] 2xl:w-[75%] bg-[#E3FF00] absolute bottom-0 right-0" id='connectFade'>
              <div className="relative h-[90vh] sm:h-[85vh] md:h-[81vh] xl:h-[82vh] 2xl:h-[85vh]">
                <div className="grid grid-cols-12">
                  <div className="col-span-4 lg:col-span-5">
                    <div>
                      <Image className='cursor-pointer w-[50px] h-[50px] 2xl:h-[151px] xl:h-[100px] 2xl:w-[151px] xl:w-[100px] lg:h-[80px] lg:w-[80px] md:h-[60px] md:w-[60px]' src={backArrow} alt='back arrow' onClick={() => {
                                        router.back()
                                    }} />
                    </div>
                  </div>
                  <div className="col-span-8 lg:col-span-7">
                    <div className="mt-5 border-y-[1px] border-black flex justify-between items-center pr-4 2xl:pr-4  xl:pr-3">
                      <h2 className='text-[20px] 2xl:text-[35px] xl:text-[26px] lg:text-[24px] md:text-[22px] font-semibold lg:font-[500] xl:font-semibold  leading-[40px] 2xl:leading-[70px] xl:leading-[50px] lg:leading-[50px] md:leading-[45px]  lg:tracking-[-2.1px]'>Tell us your story :</h2>
                      <Image className='w-[25px] h-[25px] lg:h-[35px] lg:w-[35px]' src={DownArrow} alt='DownArrow' />
                    </div>
                    <div className="mb-[40px] 2xl:mb-[111px] xl:mb-[40px] lg:mb-[40px] md:mb-[50px]">

                      <div className="border-b-[1px] border-black">
                        <input className='w-[100%] bg-transparent border-[0px] focus:outline-0 placeholder-[#00000066] lg:tracking-[-2.1px] font-semibold lg:font-[500] xl:font-semibold  text-[20px] 2xl:text-[35px] xl:text-[24px] lg:text-[24px] md:text-[22px] text-[#00000066] pr-4 2xl:pr-4 py-2 2xl:py-4 xl:pr-3 xl:py-3' type="text" placeholder='What do we call you?' />
                      </div>
                      <div className="border-b-[1px] border-black">
                        <input className='w-[100%] bg-transparent border-[0px] focus:outline-0 placeholder-[#00000066] lg:tracking-[-2.1px] font-semibold lg:font-[500] xl:font-semibold  text-[20px] 2xl:text-[35px] xl:text-[24px] lg:text-[24px] md:text-[22px] text-[#00000066] pr-4 2xl:pr-4 py-2 2xl:py-4 xl:pr-3 xl:py-3' type="text" placeholder='Telephone, maybe?' />
                      </div>
                      <div className="">
                        <input className='w-[100%] bg-transparent border-[0px] focus:outline-0 placeholder-[#00000066] lg:tracking-[-2.1px] font-semibold lg:font-[500] xl:font-semibold  text-[20px] 2xl:text-[35px] xl:text-[24px] lg:text-[24px] md:text-[22px] text-[#00000066] pr-4 2xl:pr-4 py-2 2xl:py-4 xl:pr-3 xl:py-3' type="text" placeholder='Mail' />
                      </div>
                    </div>
                    <div className="">
                      <Button btnClasses={"bg-transparent text-black border-2 border-black w-[162px] h-[26px] rounded-[19.5px] text-[18px] mb-3 pb-[2px]"} btntext={"SUBMIT"} />
                      <div className="text-sm w-[55%] lg:w-[35%] text-[#00000033]">
                        By clicking the “Submit” button,
                        you agree to the privacy policy.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 lg:bottom-1 xl:bottom-1 2xl:bottom-3 left-4">
                  <div className="grid grid-cols-12">
                    <div className="col-span-4 lg:col-span-5"></div>
                    <div className="col-span-8 lg:col-span-5">

                      <h2 className='text-[20px] 2xl:text-[35px] xl:text-[28px] lg:text-[26px] ml-[-16px] font-semibold lg:font-[500] xl:font-semibold  leading-[25px] 2xl:leading-[41px] xl:leading-[35px] lg:leading-[30px] lg:tracking-[-2.1px] pr-4'>We will contact you within 16 hours after
                        you submit the form.</h2>
                    </div>
                  </div>
                  <div className="text-[10px] md:text-[12px] lg:text-lg font-semibold lg:font-[500] xl:font-semibold  leading-3 lg:leading-5 md:leading-4 lg:tracking-[-1.08px] pr-4 flex justify-between items-end gap-4 sm:gap-0">
                    <div>
                      <div>
                        MG Road,
                      </div>
                      <div>
                        62/63 Church St, Bangalore
                      </div>
                      <div>
                        Karnataka, India
                      </div>
                    </div>
                    <div>connect@kien.travel</div>
                    <div>+91 9703937100</div>
                    <div className='flex items-end gap-1'>
                      <Image className='w-[50px] sm:w-[60px] lg:w-auto' src={FooterLogo} alt='Footer Logo' />
                      <div>©</div>
                      <div>2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

      </div>
    </div>
  )
}

export default Connect