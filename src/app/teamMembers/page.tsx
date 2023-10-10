"use client"

import React from "react";
import { useState } from 'react';
import Header from "../__components/header/Header";
import Player from "../__assets/images/pngs/player.png";
import logo from "../__assets/images/pngs/logo.png";
import Image from "next/image";

const TeamMembers = () => {
	const [tab, setTab] = useState(1);
  return (
    <div className="h-screen w-screen bg-black relative">
      <Header navTheme={"bg-[white]"} />
      <div className="grid grid-cols-12 text-white pt-[20px] ml-[11px]">
        <div className="col-span-6 border-x-[1px] border-white h-[calc(100vh-20px)] relative">
		  <div className="targetTab" style={{ display: tab === 1 ? 'block' : 'none' }}>
          <div className="bg-black relative z-10 pt-[20px] pl-[14px]">
            <div className="text-[69px] font-semibold -tracking-[4.14px] leading-[64px]">
              How does Vishwanath contribute?
            </div>
            <div className="text-[22px] tracking-[-1.32px] leading-[28px] mt-2 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
		  <div className="targetTab" style={{ display: tab === 2 ? 'block' : 'none' }}>
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
              eiusmod tempor incididunerfgsuycijnzkxlt ut labore et dolore magna aliqua.
            </div>
          </div>
		  </div>
		  <div className="targetTab" style={{ display: tab === 3 ? 'block' : 'none' }}>
          <div className="bg-black relative z-10 pt-[20px] pl-[14px]">
            <div className="text-[69px] font-semibold -tracking-[4.14px] leading-[64px]">
              How does Vishwanath contribute?
            </div>
            <div className="text-[22px] tracking-[-1.32px] leading-[28px] mt-2 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lfduysliano;m;,'.
			  /.';,lmdknfjbhgkvyulaiop89e76t5r7q89076abore et dolore magna aliqua.
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

		  <div className="w-[108px] h-[455px] bg-secondary flex justify-center items-end pb-[6px] absolute top-[10px] right-[51px] z-20">
		<Image className="w-[87px]" src={logo} alt=""/>
	  </div>
        </div>
        <div className="col-span-6">
          <div className="text-[208px] uppercase font-bold leading-[172px] tracking-[-12.48px] -translate-x-14 ">
            PLayer
          </div>
		  <div className="mt-[-20px] relative z-10 h-[calc(100vh-182px)] overflow-y-auto pb-10" >

          <div className="h-[152px] bg-[#313131] px-[20px] py-[14px] border-b-[1px] border-white" onClick={() => setTab(1)}>
			<div className="flex justify-between">
            <div className="text-[48px] font-bold w-[80%] leading-[44px] tracking-[-2.88px] truncate-[2]">
              Vishwanath Purushothaman
            </div>
			<div className="h-[42px] w-[42px] bg-primary rounded-full"></div> 
			</div>
			<div className="flex justify-between items-center leading-[44px] text-[17px] font-medium tracking-[-1.02px] uppercase mt-1 ">
				<div>head  : financier</div>
				<div className="ml-[-120px]">sub heads 1</div>
				<div>sub heads 2</div>
			</div>


          </div>

		  <div className="h-[152px]  px-[20px] py-[14px] border-b-[1px] border-white" onClick={() => setTab(2)}>
			<div className="flex justify-between">
            <div className="text-[48px] font-bold w-[80%] leading-[44px] tracking-[-2.88px] truncate-[2]">
              Vishwanath Purushothaman
            </div>
			<div className="h-[42px] w-[42px] bg-primary rounded-full"></div> 
			</div>
			<div className="flex justify-between items-center leading-[44px] text-[17px] font-medium tracking-[-1.02px] uppercase mt-1 ">
				<div>head  : financier</div>
				<div className="ml-[-120px]">sub heads 1</div>
				<div>sub heads 2</div>
			</div>


          </div>
		  <div className="h-[152px]  px-[20px] py-[14px] border-b-[1px] border-white" onClick={() => setTab(2)}>
			<div className="flex justify-between">
            <div className="text-[48px] font-bold w-[80%] leading-[44px] tracking-[-2.88px] truncate-[2]">
              Vishwanath Purushothaman
            </div>
			<div className="h-[42px] w-[42px] bg-primary rounded-full"></div> 
			</div>
			<div className="flex justify-between items-center leading-[44px] text-[17px] font-medium tracking-[-1.02px] uppercase mt-1 ">
				<div>head  : financier</div>
				<div className="ml-[-120px]">sub heads 1</div>
				<div>sub heads 2</div>
			</div>


          </div>
		  <div className="h-[152px]  px-[20px] py-[14px] border-b-[1px] border-white" onClick={() => setTab(2)}>
			<div className="flex justify-between">
            <div className="text-[48px] font-bold w-[80%] leading-[44px] tracking-[-2.88px] truncate-[2]">
              Vishwanath Purushothaman
            </div>
			<div className="h-[42px] w-[42px] bg-primary rounded-full"></div> 
			</div>
			<div className="flex justify-between items-center leading-[44px] text-[17px] font-medium tracking-[-1.02px] uppercase mt-1 ">
				<div>head  : financier</div>
				<div className="ml-[-120px]">sub heads 1</div>
				<div>sub heads 2</div>
			</div>


          </div>
		  <div className="h-[152px]  px-[20px] py-[14px] border-b-[1px] border-white" onClick={() => setTab(2)}>
			<div className="flex justify-between">
            <div className="text-[48px] font-bold w-[80%] leading-[44px] tracking-[-2.88px] truncate-[2]">
              Vishwanath Purushothaman
            </div>
			<div className="h-[42px] w-[42px] bg-primary rounded-full"></div> 
			</div>
			<div className="flex justify-between items-center leading-[44px] text-[17px] font-medium tracking-[-1.02px] uppercase mt-1 ">
				<div>head  : financier</div>
				<div className="ml-[-120px]">sub heads 1</div>
				<div>sub heads 2</div>
			</div>


          </div>
        </div>
		</div>
		
      </div>

    </div>
  );
};

export default TeamMembers;
