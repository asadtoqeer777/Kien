import React from 'react'
import Header from '../__components/header/Header'
import logo from "../__assets/images/pngs/logo.png"
import footerLogo from "../__assets/images/pngs/logo.png";
import Image from 'next/image'
import Button from '../__components/buttons/Button'
import DarkPlus from "../__assets/images/svgs/darkPlus.svg"
import Card from '../__components/card/Card'
import Tick from "../__assets/images/pngs/navArrow.png"
import style from "../categories/style.module.css"
import CatagoryButton from '../__components/catagoryButton/CatagoryButton'
import CategoriesLogo from "../__assets/images/pngs/categoryLogo.png";

const CategoriesList = () => {
  return (
    <div className='w-[100vw] h-[100vh] overflow-y-auto bg-white no-scrollbar relative'>

      <div className="">
        <div className="mt-[30px]">
          <div className="grid grid-cols-6 gap-2 border-b-[1px] border-black">
          <div className="col-span-2 px-3">
              <Image
                src={CategoriesLogo}
                alt=""
                className="w-[100px] 2xl:w-[210px] xl:w-[180px] lg:w-[170px] md:w-[140px] sm:w-[120px]"
              />
            </div>
            <div className={`${style.categoryHeading} col-span-4 `}>
              <div>
                Peripatetic
              </div>
              <div>
                Additional Info
              </div>
            </div>

          </div>
        </div>
        <div className="">
          <div className="pb-5">
            <div className="flex mx-4 mt-2 justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 ">
                <Button btnClasses={"bg-transparent text-black border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"} btntext={"USER LOGIN"} />
                <Button btnClasses={"bg-black text-white border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"} btntext={"ENROLL NOW"} />

              </div>
              <div className="flex items-center gap-2 ">
                <Image src={DarkPlus} alt='DarkPlus' />
                <Button btnClasses={"bg-transparent text-black border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"} btntext={"VIEW ALL CARDS"} />
              </div>
            </div>

          </div>
          <div className="w-[100%] 2xl:w-[90%] 2xl:m-auto px-[43px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
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
            <Image className='w-[50px] sm:w-[55px] md:w-[60px] lg:w-[70px] 2xl:w-[90px]' src={Tick} alt='Tick' />
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
  )
}

export default CategoriesList