
"use client"
import React, { useState } from "react";
import Header from "../__components/header/Header";
import logo from "../__assets/images/pngs/logo.png";
import footerLogo from "../__assets/images/svgs/mainFooterLogo.svg";
import Image from "next/image";
import Button from "../__components/buttons/Button";
import style from "./style.module.css";
import CategoriesLogo from "../__assets/images/pngs/categoryLogo.png";
import CatagoryButton from "../__components/catagoryButton/CatagoryButton";
import CategoriesCardMain from "../__components/categoriesCardMain/page";

const Category = () => {
  const [toggleBtn, setToggleBtn] = useState(null);

  const handleToggleBtn = (catNum : any) => {
    if(catNum === toggleBtn) {
      setToggleBtn(null)
    }else{
      setToggleBtn(catNum)
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden no-scrollbar bg-white relative " id= "3">
      <div className="">
        <div className="mt-[30px]">
          <div className={`grid grid-cols-8 gap-2  ${style.categoryHero}`}>
            <div className="col-span-3 px-3">
              <Image
                src={CategoriesLogo}
                alt=""
                className="w-[100px] 2xl:w-[210px] xl:w-[180px] lg:w-[170px] md:w-[140px] sm:w-[120px]"
              />
            </div>
            <div className={`${style.categoryHeading} col-span-5 `}>
              <div>Peripatetic</div>
              <div>Additional Info</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-8 gap-2 border-b-[1px] border-black pb-5" id="categoryFadeTextBorder">
            <div className="col-span-3">
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
            <div className="col-span-5">
              <div
                className={`${style.categoryHeading} col-span-4 text-[#00000080] mt-[4vh] sm:mt-[3vh]`}
                id="categoryFadeText"
              >
                <h1>Inquisitive</h1>
                <h1>Critical • Profound</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-2">
          <div className="col-span-3"></div>
          <div className="col-span-5" id="categoryFadeText">
            <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[80px]">
              <div className={`${style.categorySubHeading}`}>
                <div>Peripatetic Refers</div>
              </div>
              <div className={`${style.categorySubHeadDes}`}>
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

      <div className="absolute bottom-3 left-3 w-full flex pr-6 justify-between items-end">
        <div className="mb-2 sm:mb-0">

        <div className="gap-2 flex flex-wrap mb-2 items-end w-[350px]">

            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"VITALIST"}
              clickFcun = {
                () => handleToggleBtn(1)
              }
              toggleBtn={toggleBtn === 1}
            />


            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"CONTEMPLATIVE"}
              clickFcun = {
                () => handleToggleBtn(2)
              }
              toggleBtn={toggleBtn === 2}
            />

        {/* </div>
        <div className="gap-2 flex flex-wrap items-end"> */}

            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"EPICUREAN"}
              clickFcun = {
                () => handleToggleBtn(3)
              }
              toggleBtn={toggleBtn === 3}
            />


            <CatagoryButton
              btnLabelDetail={"For the bold adventurer"}
              btnLabel={"MELANCHOLIC"}
              clickFcun = {
                () => handleToggleBtn(4)
              }
              toggleBtn={toggleBtn === 4}
            />

        </div>
        </div>


      <div className="w-max ml-auton ">
        <Image
          src={footerLogo}
          alt="footer-logo"
          className="w-[70px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[150px] 2xl:w-[200px]"
        />

      </div>
      </div>

      <div className="absolute top-1/2 right-0 translate-x-[84.2%] -translate-y-[33%] w-full" id="categoriesTransition">
        <CategoriesCardMain/>
      </div>
    </div>
  );
};

export default Category;
