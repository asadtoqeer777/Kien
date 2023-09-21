import React from 'react'
import LogoImage from "../__assets/images/pngs/logo.png"
import loginBar from "../__assets/images/pngs/loginBar.png"
import Image from 'next/image'
import Input from '../__components/inputs'
import Button from '../__components/buttons'

const Login = () => {
  return (
    <div className='bg-white  flex justify-center px-5 sm:px-0'>
      <div className="container w-[390px] pt-[99px] relative sm:pt-[140px] md:pt-[140px] lg:pt-[159px] xl:pt-[150px] 2xl:pt-[170px]">

        <div className="mainImage text-center">
          <Image className='h-[auto] w-[310px] md:h-[117px] md:w-[360px] m-auto ' src={LogoImage} alt="LogoImage" />
          <div className="text-[27px] font-semibold text-[#000]">
            Travel Experiences
          </div>
          <div className="barImage">
            <Image className='h-[465px] w-[35px] sm:h-[500px] md:h-[536px] lg:h-[556px] xl:h-[548px] 2xl:h-[621px] absolute top-0 right-[10px] z-10' src={loginBar} alt="loginBar" />
          </div>
        </div>

        <div className="mt-[78px] mb-[15px] 2xl:mb-[30px]">
          <div>
            <Input inputLabel={"email address / user name"} inputLabelExtCSS={"text-[#00000080]"} inputExtCSS={"border-[#00000080]  text-[#00000080]"} inputType={"text"} />
          </div>
          <div className='mt-[26px]'>
            <Input inputLabel={"password"} inputLabelExtCSS={"text-[#00000080]"} inputExtCSS={"border-[#00000080]  text-[#00000080]"} inputType={"password"} />
          </div>
          <div className="mt-3 text-right">
            <Button btnClasses={"bg-[#E3FF00] w-[114px] h-[20px] rounded-[19.5px] text-[13px] font-medium"} btntext={"LOGIN"} />
          </div>
          <div className="mt-[39px] sm:mt-[49px] md:mt-[59px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] text-center">
            <Button btnClasses={"bg-transparent w-[114px] h-[20px] rounded-[19.5px] text-[13px] font-semibold	text-[#00000080]"} btntext={"Forgot Password?"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login