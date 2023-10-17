
"use client"
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MembersItem from '../__components/members/Members';
import Header from '../__components/header/Header';
import backArrow from ".././__assets/images/svgs/backArrowWhite.svg"
import Image from 'next/image';

interface MembersPageProps {
  // Add any additional props you need
}

const MembersPage: React.FC<MembersPageProps> = () => {
  const sliderRef = useRef<Slider | null>(null);

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeSlide2, setActiveSlide2] = useState<number>(0);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: false,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    afterChange: (current: number) => setActiveSlide2(current),
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div>
      <Header navTheme={activeSlide === 0 ? "bg-[#E3FF00]" : "bg-black text-white" }/>
{/* 
      <p>
        BeforeChange = activeSlide: <strong>{activeSlide}</strong>
      </p>
      <p>
        AfterChange = activeSlide: <strong>{activeSlide2}</strong>
      </p> */}

<div className="relative">

      <Slider {...sliderSettings} ref={sliderRef} className='w-screen overflow-x-hidden'>
        <MembersItem prifileStack={"CEO / founder"} ProfileName={" Siva chakkaravarthy"} stackDel={"ideation wizard"} memberTheme={"text-black bg-[white]"} memberThemeCol={"bg-black"} logoCol= {false} footerCol={"text-black"} memeberBtnBg={"bg-secondary"}/>
        <MembersItem prifileStack={"CHIEF OPERATIONS OFFICER"} ProfileName={"Vishwanath Purushothaman"} stackDel={"OPERATIONS MAESTRO"}  memberTheme={"bg-secondary"} memberThemeCol={"bg-black"} logoCol= {false} footerCol={"text-black"}  memeberBtnBg={"bg-black text-white"}/>
        
      </Slider>
      <div className="absolute bottom-4 left-[52%] z-20  text-white">
        <div className="flex">
          <Image className={activeSlide ? 'cursor-pointer' : "hidden"} src={backArrow} alt='backArrow'  onClick={prevSlide}/>
          <Image className={activeSlide? ' cursor-pointer rotate-180' : "ml-[50px] cursor-pointer rotate-180"} src={backArrow} alt='backArrow' onClick={nextSlide}/>
        </div>
        </div>
        </div>

    </div>
  );
};

export default MembersPage;
