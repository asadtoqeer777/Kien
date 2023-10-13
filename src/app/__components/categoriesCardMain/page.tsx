import React from "react";
import Card from "../card/Card";
import Image from "next/image";
import DarkPlus from "../../__assets/images/svgs/darkPlus.svg"
import NextArrow from "../../__assets/images/pngs/navArrow.png";
import Button from "../buttons/Button";

const CategoriesCardMain = () => {
  return (
    <div>
      <div className="pb-5">
            <div className="flex mx-4 mt-2 justify-between gap-2 flex-wrap">
              <div className="">

              </div>
              <div className="flex items-center gap-2 ">
                <Image src={DarkPlus} alt='DarkPlus' />
                <Button btnClasses={"bg-transparent text-black border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"} btntext={"VIEW ALL CARDS"} />
              </div>
            </div>
          </div>
      <div className="w-[100%] 2xl:w-[90%] 2xl:m-auto px-[43px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4" id= "3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="footerArea flex justify-end mt-4 px-[43px]">
        <Image
          className="w-[50px] sm:w-[55px] md:w-[60px] lg:w-[70px] 2xl:w-[90px]"
          src={NextArrow}
          alt="NextArrow"
        />
      </div>
    </div>
  );
};

export default CategoriesCardMain;
