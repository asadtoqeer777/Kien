import React from 'react'
import LogoImage from "../__assets/images/pngs/logoWhite.png"
import RegisterBar from "../__assets/images/pngs/loginBar.png"
import Image from 'next/image'
import Input from '../__components/inputs/Input'
import Button from '../__components/buttons/Button'

const Register = () => {
  return (
    <div className='bg-black p-5 sm:p-0 overflow-y-auto h-[100vh] w-[100vw] no-scrollbar'>
      <div className="container flex justify-center m-auto h-[100vh]">
        <div className=' mb-[25px] 2xl:mb-[225px]'>

          <div className="mainImage text-center w-[310px] sm:w-[390px]  pt-[40px] m-auto relative  sm:pt-[50px] md:pt-[60px] lg:pt-[70px] xl:pt-[80px] 2xl:pt-[124px]">
            <Image className='h-auto w-[250px] md:w-[260px]  lg:w-[270px]  xl:w-[300px] 2xl:h-[117px] 2xl:w-[360px] m-auto ' src={LogoImage} alt="LogoImage" />
            <div className="text-[20px] sm:text-[22px] md:text-[23px] lg:md:text-[24px] xl:text-[25px] 2xl:text-[27px] mt-2 font-semibold text-white">
            YOU’RE THE DESTINATION
            </div>
            <div className="barImage">
              <div className='h-[540px] w-[35px] sm:h-[560px] md:h-[600px] lg:h-[568px] xl:h-[640px] 2xl:h-[748px] absolute top-0 right-[10px] sm:right-[35px] xl:right-[10px] z-10 bg-white'></div>
            </div>
          </div>
          <div className="mt-[46px] sm:mt-[56px] md:mt-[46px] lg:mt-[56px] xl:mt-[66px] 2xl:mt-[70px]">
            <div className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px] mb-[15px] lg:b-[20px] xl:mb-[25px] 2xl:mb-[35px] font-semibold text-white">
              Create an Account.
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px]">
              <div>
                <div>
                  <Input inputLabel={"NAME"} inputLabelExtCSS={"text-[#ffffff80]"} inputExtCSS={"border-white  text-[white]"} inputType={"text"} />
                </div>
                <div className='mt-[26px]'>
                  <Input inputLabel={"SURNAME"} inputLabelExtCSS={"text-[#ffffff80]"} inputExtCSS={"border-white  text-[white]"} inputType={"text"} />
                </div>
              </div>
              <div>
                <div className='mt-[26px] lg:mt-0'>
                  <Input inputLabel={"REGISTERED EMAIL ADDRESS"} inputLabelExtCSS={"text-[#ffffff80]"} inputExtCSS={"border-white  text-[white]"} inputType={"text"} />
                </div>
                <div className='mt-[26px]'>
                  <Input inputLabel={"password"} inputLabelExtCSS={"text-[#ffffff80]"} inputExtCSS={"border-white  text-[white]"} inputType={"password"} />
                </div>
                <div className='mt-[26px]'>
                  <Input inputLabel={"RETYPE password"} inputLabelExtCSS={"text-[#ffffff80]"} inputExtCSS={"border-white  text-[white]"} inputType={"password"} />
                </div>
                <div className="mt-3 text-right">
                  <Button btnClasses={"bg-[#E3FF00] w-[114px] h-[25px] rounded-[19.5px] text-[13px] font-medium"} btntext={"Register"} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[30px] sm:mt-[30px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px] 2xl:xl:mt-[180px] text-center">
            <Button btnClasses={"bg-transparent w-[114px] h-[25px] rounded-[19.5px] text-[13px] font-semibold	text-[#ffffff80]"} btntext={"Need Help?"} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Register