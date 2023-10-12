"use client";

import React from "react";
import { useState } from "react";
import Player from "../../__assets/images/pngs/player.png";
import logo from "../../__assets/images/pngs/logo.png";
import Image from "next/image";
import Partner from "../../__assets/images/pngs/partners1.jpeg";
import Partner2 from "../../__assets/images/pngs/partner2.png";

const Partners = () => {
  return (
    <div className="relative">
      < div
        className="targetTab h-[calc(100vh-120px)] overflow-y-auto no-scrollbar relative z-10 gap-6"
      >
        <div className="mb-[21px]">

        <Image
          className="w-full 2xl:h-[626px] xl:h-[500px]"
          src={Partner}
          alt=""
          />
          </div>
          <div className="mb-[21px]">

        <Image className="w-full" src={Partner2} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Partners;
