"use client";

import React from "react";
import { useState } from "react";
import Player from "../../__assets/images/pngs/player.png";
import logo from "../../__assets/images/pngs/logo.png";
import Image from "next/image";
import Partner from "../../__assets/images/pngs/partners1.jpeg";
import Partner2 from "../../__assets/images/pngs/partner2.png";


const Partners = () => {
  const [tab, setTab] = useState(1);
  return (
    <div>
                <div
            className="targetTab"
            style={{ display: tab === 1 ? "block" : "none" }}
          >
            <Image
              className="w-full 2xl:h-[626px] xl:h-[500px]"
              src={Partner}
              alt=""
            />
            <Image src={Partner2} alt="" />
            <div></div>
          </div>
          <div
            className="targetTab"
            style={{ display: tab === 2 ? "block" : "none" }}
          >
            <div className="bg-black relative z-10 pt-[20px] pl-[14px]">
              <div className="text-[69px] font-semibold -tracking-[4.14px] leading-[64px]">
                How does Vishwanath contribute?
              </div>
              <div className="text-[22px] tracking-[-1.32px] leading-[28px] mt-2 mb-1">
                Lorem ipsum dolor sit amed6ftwiyekugbsjknf
              </div>
            </div>
            <Image
              className="w-full 2xl:h-[626px] xl:h-[500px]"
              src={Player}
              alt=""
            />
            <div>
              <div className="text-[22px] tracking-[-1.32px] leading-[28px] mt-[17px] pl-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunerfgsuycijnzkxlt ut labore et dolore
                magna aliqua.
              </div>
            </div>
          </div>
          <div
            className="targetTab"
            style={{ display: tab === 3 ? "block" : "none" }}
          >
            <div className="bg-black relative z-10 pt-[20px] pl-[14px]">
              <div className="text-[69px] font-semibold -tracking-[4.14px] leading-[64px]">
                How does Vishwanath contribute?
              </div>
              <div className="text-[22px] tracking-[-1.32px] leading-[28px] mt-2 mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lfduysliano;m;,'.
                /.';,lmdknfjbhgkvyulaiop89e76t5r7q89076abore et dolore magna
                aliqua.
              </div>
            </div>
            <Image
              className="w-full 2xl:h-[626px] xl:h-[500px]"
              src={Player}
              alt=""
            />
            <div>
              <div className="text-[22px] tracking-[-1.32px] leading-[28px] mt-[17px] pl-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>

          <div className="w-[108px] h-[455px] bg-secondary flex justify-center items-end pb-[6px] absolute [10px] right-[51px] z-20">
            <Image className="w-[87px]" src={logo} alt="" />
          </div>
          </div>
  );
};

export default Partners;
