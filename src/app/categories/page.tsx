import React from "react";
import Header from "../__components/header/Header";
import logo from "../__assets/images/pngs/logo.png";
import footerLogo from "../__assets/images/pngs/logo.png";
import Image from "next/image";
import Button from "../__components/buttons/Button";
import style from "./style.module.css";
import CategoriesLogo from "../__assets/images/pngs/categoryLogo.png";
import CatagoryButton from "../__components/catagoryButton/CatagoryButton";

const Category = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto no-scrollbar bg-white relative">
      <div className="">
        <div className="mt-[30px]">
          <div className={`grid grid-cols-6 gap-2  ${style.categoryHero}`}>
            <div className="col-span-2 px-3">
              <Image
                src={CategoriesLogo}
                alt=""
                className="w-[100px] 2xl:w-[210px] xl:w-[180px] lg:w-[170px] md:w-[140px] sm:w-[120px]"
              />
            </div>
            <div className={`${style.categoryHeading} col-span-4 `}>
              <div>Peripatetic</div>
              <div>Additional Info</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-6 gap-2 border-b-[1px] border-black pb-5">
            <div className="col-span-2">
              <div className="flex items-center gap-2 ml-4 mt-2">
                <Button
                  btnClasses={
                    "bg-transparent text-black border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"
                  }
                  btntext={"USER LOGIN"}
                />
                <Button
                  btnClasses={
                    "bg-black text-white border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"
                  }
                  btntext={"ENROLL NOW"}
                />
              </div>
            </div>
            <div className="col-span-4">
              <div
                className={`${style.categoryHeading} col-span-4 text-[#00000080] mt-[4vh] sm:mt-[3vh]`}
              >
                <h1>Inquisitive</h1>
                <h1>Critical • Profound</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-2"></div>
          <div className="col-span-4">
            <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[80px]">
              <div className={`${style.categorySubHeading} text-[#00000080]`}>
                <div>Peripatetic Refers</div>
              </div>
              <div className={`${style.categorySubHeadDes} text-[#00000033]`}>
                <div>
                  A seeker who explores the world's heart to understand its
                  essence, connecting nature, people, and culture on a profound
                  philosophical & critical quest.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 w-full flex pr-6 justify-between ">
        <div className="mb-2 sm:mb-0">

        <div className="gap-2 flex flex-wrap mb-2 items-end">

            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"VITALIST"}
            />


            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"CONTEMPLATIVE"}
            />

        </div>
        <div className="gap-2 flex flex-wrap items-end">

            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"EPICUREAN"}
            />


            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"MELANCHOLIC"}
            />

        </div>
        </div>


      <div className="flex items-end gap-1 w-max ml-auton ">
        <Image
          src={footerLogo}
          alt="footer-logo"
          className="w-[70px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[150px] 2xl:w-[200px]"
        />
        <div className="flex items-end gap-1 leading-4">
          <span>© </span>2023
        </div>
      </div>
      </div>
    </div>
  );
};

export default Category;
