import React from "react";
import Header from "../__components/header/Header";
import Image from "next/image";
import Archetype1 from "../__assets/images/pngs/archetype1.png";
import Archetype2 from "../__assets/images/pngs/archetype2.png";
import Archetype3 from "../__assets/images/pngs/archetype3.png";
import Archetype4 from "../__assets/images/pngs/archetype4.png";
import Archetype5 from "../__assets/images/pngs/archetype5.png";
import Container from "../__components/container/Container";
import footerLogo from "../__assets/images/pngs/logoWhite.png";

const ArchetypePage = () => {
  return (
    <div className="relative h-screen w-screen">

      <div className=" h-[40vh] bg-white">
        <h1
          className="pt-[45px] sm:pt-[55px] md:pt-[65px]  xl:pt-[75px]  2xl:pt-[95px] text-center text-[50px] sm:text-[75px] md:text-[85px] lg:text-[110px] xl:text-[125px] 2xl:text-[160px] tracking-[-4.8px] 
        lg:tracking-[-4.8px] font-bold leading-9 "
        >
          BEGIN A STORY
        </h1>

        <div
          className="flex w-[450px] sm:w-[580px] md:w-[720px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1180px] h-[300px] sm:h-[400px]  md:h-[450px] lg:h-[464px] xl:h-[484px] 
          2xl:h-[554px] m-auto absolute top-20% left-1/2 transform -translate-x-1/2"
        >
          <div className="relative">
            <Image
              className="w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] "
              src={Archetype1}
              alt=""
            />

            <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%] lg:top-[58%] xl:top-[60%] 2xl:top-[50%] text-white">
            <div className="">
              <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">
                CONTEMPLATIVE
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">
                ADDITIONAL INFO
              </div>
            </div>

            </div>
            <div className="absolute right-0 bottom-9 z-10 text-white rotate-[-90deg]">yvtbuh</div>

          </div>
          <div className="relative">
            <Image
              className="w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] "
              src={Archetype2}
              alt=""
            />

            <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] 2xl:top-[50%] text-white">
            <div className="">
              <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">
                CONTEMPLATIVE
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">
                ADDITIONAL INFO
              </div>
            </div>

            </div>
            <div className="absolute right-0 bottom-9 z-10 text-white rotate-[-90deg]">yvtbuh</div>

          </div>
          <div className="relative">
            <Image
              className="w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] "
              src={Archetype3}
              alt=""
            />

            <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] 2xl:top-[50%] text-white">
            <div className="">
              <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">
                CONTEMPLATIVE
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">
                ADDITIONAL INFO
              </div>
            </div>

            </div>
            <div className="absolute right-0 bottom-9 z-10 text-white rotate-[-90deg]">yvtbuh</div>

          </div>
          <div className="relative">
            <Image
              className="w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] "
              src={Archetype4}
              alt=""
            />

            <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] 2xl:top-[50%] text-white">
            <div className="">
              <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">
                CONTEMPLATIVE
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">
                ADDITIONAL INFO
              </div>
            </div>

            </div>
            <div className="absolute right-0 bottom-9 z-10 text-white rotate-[-90deg]">yvtbuh</div>

          </div>
          <div className="relative">
            <Image
              className="w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] "
              src={Archetype5}
              alt=""
            />

            <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] 2xl:top-[50%] text-white">
            <div className="">
              <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">
                CONTEMPLATIVE
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">
                ADDITIONAL INFO
              </div>
            </div>

            </div>
            <div className="absolute right-0 bottom-9 z-10 text-white rotate-[-90deg]">yvtbuh</div>

          </div>
        </div>

        
      </div>
      <div className="grid grid-cols-10 h-[60vh] absolute bottom-0 left-0 w-full z-[-1]">
          <div className="col-span-4 bg-black"></div>
          <div className="col-span-6 bg-primary relative">
            <div className="absolute text-white bottom-3 left-2 w-full">
              <h2 className="text-[52px] font-[400]">Archetype</h2>
              <div className="grid grid-cols-10">
                <div className="col-span-2">
                  <p className="text-[12px] font-[400] mt-[9px]">Archetype</p>
                </div>
                <div className="col-span-5 px-4">
                  <div className="flex mt-[9px] gap-3">
                    <div className="w-[12px] h-[12px] bg-white rounded-[50%] mt-[3px]"></div>
                    <div className="text-[12px] font-[400] w-[95%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      <div className="absolute bottom-2 right-0">
        <div className="flex items-end gap-1 w-max ml-auto text-white">
          <Image
            src={footerLogo}
            alt="footer-logo"
            className=" w-[70px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[150px] 2xl:w-[200px]"
            
          />
          <div className="flex items-end gap-1 leading-4">
            <span>© </span>2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchetypePage;
