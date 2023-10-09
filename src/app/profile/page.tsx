import React from "react";
import Header from "../__components/header/Header";
import backArrow from "../__assets/images/svgs/backArrowWhite.svg";
import whatsappIcon from "../__assets/images/svgs/whatsappIcon.svg";
import instaIcon from "../__assets/images/svgs/instaIcon.svg";
import facebookIcon from "../__assets/images/svgs/facebookIcon.svg";
import whitePlus from "../__assets/images/svgs/whitePlus.svg";
import Image from "next/image";
import Button from "../__components/buttons/Button";
import footerLogo from "../__assets/images/svgs/footerLogo.svg";
import logo from "../__assets/images/pngs/logo.png";
import ProfileMain from "../__assets/images/pngs/profileMain.png";
import ProfooterLogo from "../__assets//images/svgs/profileFooterLogo.svg";

const Profile = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-black relative">
      <Header navTheme={"bg-[white]"} />

      <div className="flex flex-col justify-between h-[calc(100vh-120px)]">

      <div className=" pt-11 ml-[50px] flex justify-between pr-[14px] items-start">
        <div className="flex gap-10 items-start ">
          <Image src={backArrow} alt="backArrow" />
          <div>
            <div className="2xl:text-[76px] xl:text-[70px] lg:text-[65px] md:text-[50px] sm:text-[50px] text-[30px] 2xl:leading-[70px] font-black text-white leading-[71px] tracking-[-3.8px] uppercase">
              <div>Profile :</div>
              <div>Rajiv Kapoor</div>
            </div>
            <div className="flex  gap-[10px] items-center mt-4">
              <Image src={facebookIcon} alt="facebookIcon" />
              <Image src={instaIcon} alt="instaIcon" />
              <Image src={whatsappIcon} alt="whatsappIcon" />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-screen bg-white absolute top-[319px] left-0"></div>
        <div className="flex gap-[10px] items-center">
          <Image src={whatsappIcon} alt="" />

          <Button
            btnClasses={
              "bg-transparent text-white border-[1px] border-white w-[146px] h-[39px] rounded-[19.5px] text-[27px]"
            }
            btntext={"Raj03"}
          />
        </div>
      </div>

      <div className="ml-[139px]">
        <div className="2xl:text-[76px] xl:text-[70px] lg:text-[65px] md:text-[50px] sm:text-[50px] text-[30px] 2xl:leading-[70px] font-black text-white leading-[71px] tracking-[-3.8px] uppercase">
          <div>+922km</div>
          <div>travelled</div>
        </div>
        <div className="flex  gap-[225px] items-center mt-4">
          <div className="flex items-center gap-2 ">
            <Image src={whitePlus} alt="whitePlus" />
            <Button
              btnClasses={
                "bg-white text-black border-[1px] border-white w-[162px] h-[26px] rounded-[19.5px] text-[18px]"
              }
              btntext={"ADD FRIEND"}
            />
          </div>
          <Button
              btnClasses={
                "bg-transparent text-white border-[2px] border-white w-[221px] h-[26px] rounded-[19.5px] text-[18px]"
              }
              btntext={"ARCHETYPE BATCH"}
            />
        </div>
      </div>

      </div>

      <div className="absolute right-3 bottom-3">
      <div className="flex items-end gap-1 w-max ml-auto text-white">
            <Image
              src={footerLogo}
              alt="footer-logo"
              className="custom-img filter invert"
              fill
            />
            <div className="flex items-end gap-1 leading-4">
              <span>© </span>2023
            </div>
          </div>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2/3 ProfileMainDetails">
      <div className="relative w-[1256.83px] bg-black">
        <Image src={ProfileMain} alt="" />
        <div className="flex absolute top-2 left-2">
          <div className="">
            <Image className="w-[135px]" src={logo} alt="logo" />
          </div>
          <div className="flex items-center gap-[19px]">
            <div className="text-[116px] text-white font-black tracking-[-5.8px] ml-[191px]">
              RAJIV KAPOOR
            </div>
            <div className="flex  gap-[10px] flex-col mt-4">
              <Image src={instaIcon} alt="instaIcon" />
              <Image src={facebookIcon} alt="facebookIcon" />
              <Image src={whatsappIcon} alt="whatsappIcon" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-2  h-40 uppercase">
          <div>
            <div className=" inline-block pt-3 pr-3 ">
              <div className="font-bold tracking-[-0.8px] leadind-[0px]">
                details about the type
              </div>
              <div className="flex gap-6 items-center font-bold tracking-[-0.8px] leadind-[0px]">
                <div className="w-[14px] h-[14px] bg-black rounded-full"></div>
                <div>relevant details</div>
              </div>
              <div className="flex gap-6 items-center font-bold tracking-[-0.8px] leadind-[0px]">
                <div className="w-[14px] h-[14px] bg-black rounded-full"></div>
                <div>+922km travelled</div>
              </div>
              <div className="font-bold tracking-[-0.8px] leadind-[0px] mt-1">
                archetype :
              </div>
            </div>
            <br />
            <div className=" inline-block pr-3">
              <div className="text-[54px] font-black tracking-[-2.8px] leading-[40px]">
                contemplative
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
        <div className="absolute bottom-5 right-8 z-10">
          <div className="flex items-end">
            <div className="flex gap-1">
              <div className="w-[50px] h-[50px] bg-secondary rounded-full flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
  <g clip-path="url(#clip0_161_342)">
    <path d="M0.00174447 20.9928C0.00174447 20.0724 -0.00286202 19.1526 0.00289609 18.2322C0.0086542 17.3184 -0.0299251 16.4041 0.0742966 15.4919C0.342049 13.1452 1.25932 11.058 2.83819 9.24974C4.77061 7.03638 7.23335 5.67286 10.197 5.14487C10.6059 5.07212 11.0193 5.0137 11.4362 5.00543C11.6228 5.00157 11.6884 4.95087 11.6872 4.75742C11.678 3.25171 11.6815 1.746 11.6832 0.240296C11.6832 0.168097 11.6619 0.0925911 11.7143 0C12.1093 0.306984 12.4974 0.607354 12.8844 0.909377C15.8797 3.24455 18.8751 5.58027 21.8722 7.91379C21.9914 8.00693 22.0743 8.05598 21.8993 8.19211C18.559 10.7968 15.2239 13.4081 11.8871 16.0172C11.8329 16.059 11.7897 16.118 11.7086 16.1318C11.6567 16.0646 11.6838 15.9874 11.6838 15.9169C11.6821 14.4111 11.6792 12.9054 11.6861 11.3997C11.6867 11.2245 11.6579 11.1666 11.454 11.1853C7.02606 11.5992 3.73588 13.6644 1.66641 17.4358C1.0716 18.5204 0.638015 19.6861 0.130726 20.8148C0.102511 20.8771 0.0725692 20.9383 0.0437787 21C0.0293834 20.9978 0.0155639 20.995 0.00116866 20.9928H0.00174447Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_161_342">
      <rect width="22" height="21" fill="white"/>
    </clipPath>
  </defs>
</svg>
              </div>
            <div className="w-[124px] h-[50px] bg-secondary rounded-[15px] text-center pt-[13px]">
            @kapoor01
            </div>
            </div>
            <div>
              <Button
                btntext="SHARE"
                btnClasses="bg-white text-black w-[139px] h-[26px] mb-[24px]"
              />
              <Image
                className="translate-x-[40px]"
                src={ProfooterLogo}
                alt="ProfooterLogo"
              />
            </div>
          </div>
        </div>
      </div>
      </div>


    </div>
  );
};

export default Profile;


{/* <div className="h-[80vh] w-[80%] border-[25px] border-secondary relative">
<div className="flex">
<div className="profileLogo">
  <Image className="w-[135px]" src={logo} alt="logo" />
</div>
<div className="flex items-center gap-[19px]">

<div className="text-[116px] text-white font-black tracking-[-5.8px] leading-[80px]">
RAJIV KAPOOR
</div>
<div className="flex  gap-[10px] flex-col mt-4">
      <Image src={instaIcon} alt="instaIcon" />
      <Image src={facebookIcon} alt="facebookIcon" />
      <Image src={whatsappIcon} alt="whatsappIcon" />
    </div>
</div>
</div>

<div className="absolute bottom-0 -left-2  h-40 w-full uppercase">
  <div>
    <div className="bg-secondary inline-block pt-3 pr-3 ">
      <div className="font-bold tracking-[-0.8px]">
        details about the type
      </div>
      <div className="flex gap-6 items-center font-bold tracking-[-0.8px]">
        <div className="w-[14px] h-[14px] bg-black rounded-full"></div>
        <div>relevant details</div>
      </div>
      <div className="flex gap-6 items-center font-bold tracking-[-0.8px]">
        <div className="w-[14px] h-[14px] bg-black rounded-full"></div>
        <div>+922km travelled</div>
      </div>
      <div className="font-bold tracking-[-0.8px] mt-2">
        archetype :
      </div>
    </div>
    <br />
    <div className="bg-secondary inline-block pr-3">
      <div className="text-[56px] font-black tracking-[-2.8px] leading-[60px]">
        contemplative
      </div>
    </div>
  </div>

  <div className="">

  </div>
</div>
</div> */}