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

const Profile = () => {
  return (
    <div className="h-screen w-full bg-black relative">
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
    </div>
  );
};

export default Profile;
