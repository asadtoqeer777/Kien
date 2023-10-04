import React from "react";
import Image from "next/image";
import footerLogo from "../../__assets/images/svgs/footerLogo.svg";
import Marquee from "react-fast-marquee";

const AutoScrollFooter = () => (
  <Marquee >
     <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
        <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
        <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
        <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
  </Marquee>
);

export default AutoScrollFooter;