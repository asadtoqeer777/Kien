"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../__components/header/Header";
import Player from "../__assets/images/pngs/player.png";
import logo from "../__assets/images/pngs/logo.png";
import Image from "next/image";
import Partner1 from "../__assets/images/pngs/partners1.jpeg";
import Partner2 from "../__assets/images/pngs/partner2.png";
import backArrowCircle from "../__assets/images/svgs/backArrowWhite.svg";
import Partners from "../__components/members/Partners";
import Whatsapp from "../__assets/images/pngs/whatsapp.png";
import Instagram from "../__assets/images/pngs/instagram.png";
import Facebook from "../__assets/images/pngs/facebook.png";
import Button from "../__components/buttons/Button";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

interface Props{
  selectedTab: any;
  setSelectedTab: any
}

const TeamMembers = ({selectedTab, setSelectedTab}: Props) => {
  const router = useRouter();
  // const [selectedTab, setSelectedTab] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef();

  const VerticalTabs = [
    {
      mainHeading: "Unparalleled contributions.",
      mainDescription:
        "The visionary behind our offerings, crafting products that resonate while staying ahead of the curve.",
      subDescription: "PRODUCT STRATEGY HEAD",
      title: "Nithis Manthrikumar",
      head: "head  : PRODUCT STRATEGY",
      subHead1: "sub heads 1",
      subHead2: "sub heads 2",
    },
    {
      mainHeading: "Unparalleled contributions.",
      mainDescription:
        "The visionary behind our offerings, crafting products that resonate while staying ahead of the curve.",
      subDescription: "PRODUCT STRATEGY HEAD",
      title: "Aaron  franklyn stevens",
      head: "head  : creative director",
      subHead1: "sub heads 1",
      subHead2: "sub heads 2",
    },
    {
      mainHeading: "Unparalleled contributions.",
      mainDescription:
        "The visionary behind our offerings, crafting products that resonate while staying ahead of the curve.",
      subDescription: "PRODUCT STRATEGY HEAD",
      title: "Preetham S",
      head: "head  : Engineering",
      subHead1: "sub heads 1",
      subHead2: "sub heads 2",
    },
    {
      mainHeading: "Unparalleled contributions.",
      mainDescription:
        "The visionary behind our offerings, crafting products that resonate while staying ahead of the curve.",
      subDescription: "PRODUCT STRATEGY HEAD",
      title: "Rakesh s",
      head: "assistant  : designer",
      subHead1: "sub heads 1",
      subHead2: "sub heads 2",
    },
    {
      mainHeading: "Unparalleled contributions.",
      mainDescription:
        "The visionary behind our offerings, crafting products that resonate while staying ahead of the curve.",
      subDescription: "PRODUCT STRATEGY HEAD",
      title: "brian d. walt",
      head: "head  : operations",
      subHead1: "sub heads 1",
      subHead2: "sub heads 2",
    },
    {
      mainHeading: "Unparalleled contributions.",
      mainDescription:
        "The visionary behind our offerings, crafting products that resonate while staying ahead of the curve.",
      subDescription: "PRODUCT STRATEGY HEAD",
      title: "Muhammad fahad",
      head: "tech  : developer",
      subHead1: "sub heads 1",
      subHead2: "sub heads 2",
    },
  ];
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div
      className="h-screen w-screen bg-black relative overflow-hidden"
      id="teamMembersMain"
    >
      <Header navTheme={"bg-[white]"} />
      <div className="grid grid-cols-12 text-white pt-[20px] ml-[11px]">
        <div className="col-span-6 border-x-[1px] border-white relative">
          {/* Tabs */}
          <div className="bg-black relative z-10">
            <div className="text-[16px] 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[18px] sm:text-[18px] grid grid-cols-12 gap-2 font-semibold border-b-[1.5px] border-white">
              <div
                className="cursor-pointer col-span-1 flex justify-center items-center"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Image
                  src={backArrowCircle}
                  alt="arrow-icon"
                  className=" w-[43px] mt-[13px]"
                />
              </div>
              <div className="col-span-11">
                <div className="uppercase grid grid-cols-6 mt-[10px] AuxMono">
                  <div
                    className={`${
                      selectedTab === 1 ? "bg-[#313131]" : "bg-black"
                    }  col-span-3 text-center py-[17px] border-r-[1.5px] border-white cursor-pointer `}
                    onClick={() => {
                      setSelectedTab(1);
                    }}
                  >
                    Team Members
                  </div>
                  <div
                    className={`${
                      selectedTab === 2 ? "bg-[#313131]" : "bg-black"
                    } col-span-3 text-center py-[17px] cursor-pointer`}
                    onClick={() => {
                      setSelectedTab(2);
                    }}
                  >
                    Partners
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className=" h-[calc(100vh-120px)] no-scrollbar teamsScroll2">
            {selectedTab === 1 ? (
              <div>
                {VerticalTabs.map((items, index) => {
                  return (
                    <div
                      className="targetTab CraftworkGrotesk"
                      style={{
                        display: index === activeTab ? "block" : "none",
                      }}
                    >
                      <div className="bg-black relative z-10 pt-[20px] pl-[14px]">
                        <div className="2x:text-[69px] xl:text-[59px] lg:text-[49px] md:text-[43px] sm:text-[33px] text-[30px] font-semibold 2xl:-tracking-[4.14px] xl:-tracking-[3.14px] lg:-tracking-[2.14px] 2xl:leading-[64px] md:leading-[48px] leading-[38px]  CraftworkGrotesk">
                          {items.mainHeading}
                        </div>
                        <div className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:tracking-[-1.32px] leading-[28px] mt-2 mb-1">
                          {items.mainDescription}
                        </div>
                      </div>
                      <Image
                        className="w-full 2xl:h-[548px] xl:h-[500px]"
                        src={Player}
                        alt=""
                      />
                      <div>
                        <div className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:tracking-[-1.32px] leading-[28px] mt-[17px] pl-[14px]">
                          {items.subDescription}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Partners />
            )}
          </div>
        </div>

        {selectedTab === 1 ? (
          <div className="col-span-6">
            <div className="2xl:text-[208px] xl:text-[180px] lg:text-[160px] md:text-[150px] sm:text-[140px] text-[120px] uppercase font-bold leading-[172px] tracking-[-12.48px] -translate-x-14 CraftworkGrotesk">
              <Marquee className="overflow-hidden">
                <div className="mr-[80px]"> PLayers</div>
                <div className="mr-[80px]"> PLayers</div>
                <div className="mr-[80px]"> PLayers</div>
                <div className="mr-[80px]"> PLayers</div>
                <div className="mr-[80px]"> PLayers</div>
                <div className="mr-[80px]"> PLayers</div>
              </Marquee>
            </div>
            <div className="mt-[-20px] relative z-10 h-[calc(100vh-182px)] no-scrollbar teamsScroll pb-10 bg-black">
              {VerticalTabs.map((items, index) => {
                return (
                  <div
                    className={`h-[152px] flex flex-col justify-between uppercase hover:bg-[#313131] px-[20px] pt-[14px] border-b-[1px] border-white cursor-pointer  ${
                      index === activeTab ? "bg-[#313131]" : "bg-transparent"
                    }`}
                    key={index}
                    onClick={() => handleTabClick(index)}
                  >
                    <div className="flex justify-between">
                      <div
                        className={`2xl:text-[48px] xl:text-[46px] lg:text-[38px] md:text-[34px] sm:text-[30px] text-[24px] font-bold w-[80%] leading-[44px] 2xl:tracking-[-2.88px] xl:tracking-[-1.88px] tracking-[-0.88px] truncate-[2] CraftworkGrotesk ${
                          index === activeTab ? " opacity-[0.4]" : ""
                        }`}
                      >
                        {items.title}
                      </div>
                      <div
                        className={`h-[42px] w-[42px] bg-primary rounded-full ${
                          index === activeTab ? "d-block" : "hidden"
                        }`}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center leading-[44px] 2xl:text-[17px] xl:text-[15px] md:text-[14px] text-[12px] font-medium tracking-[-1.02px] uppercase mt-1 AuxMono">
                      <div>{items.head}</div>
                      <div className="2xl:ml-[-120px] xl:ml-[-100px] lg:ml-[-80px] md:ml-[-50px] ml-[0px]">
                        {items.subHead1}
                      </div>
                      <div>{items.subHead2}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="col-span-6 bg-secondary text-black h-[100vh-30px]">
            <div className="2xl:text-[215px] xl:text-[180px] lg:text-[160px] md:text-[150px] sm:text-[140px] text-[120px]  uppercase font-bold leading-[172px] tracking-[-9.48px] -translate-x-14 relative CraftworkGrotesk">
              <div className=" ">
                <Marquee className="overflow-hidden">
                  <div className="mr-[80px]"> Metafy</div>
                  <div className="mr-[80px]"> Metafy</div>
                  <div className="mr-[80px]"> Metafy</div>
                  <div className="mr-[80px]"> Metafy</div>
                  <div className="mr-[80px]"> Metafy</div>
                  <div className="mr-[80px]"> Metafy</div>
                </Marquee>
              </div>
            </div>
            <div className="pt-2 pl-2 text-[50px] uppercase font-medium w-[80%] leading-[44px] tracking-[-2.88px] truncate-[2]">
              Brand Integration, Innovation and Immersion Partner
            </div>
            <div className=" pl-3 pr-3 items-center 2xl:leading-[44px] leading-[34px] text-[20px] font-medium tracking-[-1.02px]  mt-1 ">
              <div>
                Metaphy Labs, headquartered in Bangalore, continues to be our
                steadfast partner in the ongoing journey of shaping and
                expanding the Kien brand within the digital landscape.
              </div>
              <div>
                Metaphy has been assisting us in developing the technical
                framework for our creative and innovative outlook of travel. We
                plan on further collaborating with them to implement more bold
                and inventive travel experiences.
              </div>
            </div>
            <div className="absolute w-full bottom-[26px] pb-[14px] border-b-[1.5px] border-black">
              <div className="flex ml-3 items-center leading-[44px] text-[17px] font-medium tracking-[-1.02px] uppercase ">
                <div>
                  {" "}
                  <Image src={Facebook} alt="Facebook" />
                </div>
                <div className="ml-2">
                  {" "}
                  <Image src={Instagram} alt="Instagram" />
                </div>
                <div className="ml-2">
                  {" "}
                  <Image src={Whatsapp} alt="Whatsapp" />
                </div>
              </div>

              <div className="flex ml-3 items-center leading-[44px] text-[20px] font-medium tracking-[-1.02px] uppercase  ">
                <div className="mt-2 2xl:mt-0">
                  <Button
                    btnClasses={
                      "text-white  bg-black w-[122px] h-[30px] rounded-[19.5px] text-[10px] 2xl:text-[12px] SpaceGrotesk"
                    }
                    btntext={"Visit Webiste"}
                  />
                </div>
                <div className="flex justify-between items-center ml-5">
                  <div className="mt-2 2xl:mt-0">
                    <Button
                      btnClasses={
                        " bg-transparent text-black border-[1px] border-black w-[122px] h-[30px] rounded-[19.5px] text-[10px] 2xl:text-[12px] SpaceGrotesk"
                      }
                      btntext={"CTA-01"}
                    />
                  </div>
                  <div className="mt-2 2xl:mt-0 ml-[50%]">
                    <Button
                      btnClasses={
                        "bg-transparent text-black border-[1px] border-black  w-[122px] h-[30px] rounded-[19.5px] text-[10px] 2xl:text-[12px] SpaceGrotesk"
                      }
                      btntext={"CTA-02"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[108px] h-[455px] bg-secondary flex justify-center items-end pb-[6px] absolute top-[30px] left-[40%] z-20">
        <Image className="w-[87px]" src={logo} alt="" />
      </div>
    </div>
  );
};

export default TeamMembers;
