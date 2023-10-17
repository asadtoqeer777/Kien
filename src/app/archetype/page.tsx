import React from "react";
import Header from "../__components/header/Header";
import Image from "next/image";
import Archetype1 from "../__assets/images/pngs/archetype1.png";
import Archetype2 from "../__assets/images/pngs/archetype2.png";
import Archetype3 from "../__assets/images/pngs/archetype3.png";
import Archetype4 from "../__assets/images/pngs/archetype4.png";
import Archetype5 from "../__assets/images/pngs/archetype5.png";
import Container from "../__components/container/Container";
import footerLogo from "../__assets/images/svgs/mainWhitefooterLogo.svg";
import ArchetypeImgCon from "../__components/archetypeImgCon/page";

const ArchetypePage = () => {

  const ArchetypeContent = [
    {
      title: "savant",
      subTiitle: "[SAV]+[UHNT]",
      para:"Read More",
      img: Archetype1
    },
    {
      title: "VITALIST",
      subTiitle: "[VAAY]+[TUHL]+[IST]",
      para:"Read More",
      img: Archetype2
    },
    {
      title: "REVELATOR",
      subTiitle: "[Rev]+[uh]+[ley]+[ter]",
      para:"Read More",
      img: Archetype3
    },
    {
      title: "EPICUREAN",
      subTiitle: "[EP]+[I]+[KYUH]+[REE]+[UHN]",
      para:"Read More",
      img: Archetype4
    },
    {
      title: "SEEKER",
      subTiitle: "[SEE] + [KUH]",
      para:"Read More",
      img: Archetype5
    },
  ]

  return (
    <div className="relative h-screen w-screen">

      <div className=" h-[40vh] bg-white">
        <h1
          className="pt-[45px] sm:pt-[55px] md:pt-[65px]  xl:pt-[75px]  2xl:pt-[95px] text-center text-[50px] sm:text-[70px] md:text-[80px] lg:text-[110px] xl:text-[125px] 2xl:text-[160px] tracking-[-4.8px] 
        lg:tracking-[-4.8px] font-bold leading-9 uppercase"
        >
          Craft your STORY
        </h1>

        <div
          className="flex w-[450px] sm:w-[580px] md:w-[720px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1180px] h-[300px] sm:h-[400px]  md:h-[450px] lg:h-[464px] xl:h-[484px] 
          2xl:h-[684px] m-auto absolute top-20% left-1/2 transform -translate-x-1/2"id="beganStory"

        >
          {ArchetypeContent.map((item, key)=>{
            return<ArchetypeImgCon ArchetypeImg={item.img} subHeading={item.subTiitle} heading={item.title}
            text={item.para}/>

          })}
        </div>

        
      </div>
      <div className="grid grid-cols-12 h-[53vh] absolute bottom-0 left-0 w-full z-[-1]">
          <div className="col-span-2 md:col-span-3 xl:col-span-5 bg-black"></div>
          <div className="col-span-10 md:col-span-9 xl:col-span-7 bg-primary relative">
            <div className="absolute text-white bottom-3 left-2 w-full">
              <h2 className="text-[52px] font-[400]">Archetype</h2>
              <div className="grid grid-cols-10">
                <div className="col-span-2">
                  <p className="text-[12px] font-[400] mt-[9px]">[AA]+[KEE]+[TYP]</p>
                </div>
                <div className="col-span-5 px-4">
                  <div className="flex mt-[9px] gap-3">
                    <div className="w-[12px] h-[12px] bg-white rounded-[50%] mt-[3px]"></div>
                    <div className="text-[12px] font-[400] w-[95%]">
                    Beyond a timeless emblem, an archetype reveals intrinsic truths in travel. Engaging with these patterns leads to self-discovery and a deeper connection to humanity's collective narrative, journeying both across lands and within the soul.
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      <div className="absolute bottom-2 right-2">
        <div className=" w-max ml-auto text-white">
          <Image
            src={footerLogo}
            alt="footer-logo"
            className=" w-[70px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[150px] 2xl:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ArchetypePage;
