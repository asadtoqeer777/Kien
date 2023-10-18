import React from "react";
import Header from "../__components/header/Header";
import logo from "../__assets/images/pngs/logo.png";
import Image from "next/image";
import AutoScrollFooter from "../__components/autoScrollFooter/AutoScrollFooter";

const LandingTransition = () => {
  return (
    <div className="h-screen w-[100vw]">
      <div
        style={{
          backgroundImage: "url(./heroBg-3.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
        }}
        className="relative"
      >
        <div className="flex justify-center items-center">
          <div
            className="w-[179px] h-[388px] bg-white absolute top-[50%] left-[50%] flex items-end justify-center "
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              className="w-[118px] sm:w-[138px] h-auto mb-[7px]"
              src={logo}
              alt="Logo"
            />
          </div>
        </div>

        <div className="LandingPage h-screen w-full absolute top-0 left-0 bg-white z-[1]">
            <div className="flex justify-center items-center absolute top-[50%] left-[50%]" id="logoBg" style={{ transform: "translate(-50%, -50%)" }}>
              <Image
                className="landingPageMainImage sm:w-[280px] lg:w-[300px] xl:w-[320px]  2xl:w-[468px] h-[auto] w-[310px] md:w-[360px] landing-logo"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="landingPageFooter h-screen flex items-end landing-logo relative">
              <div>
                <div>
                  <div className=" w-full absolute bottom-[70px] right-[14px]">
                    <div className="flex justify-between pr-4">
                      <div className="flex justify-between items-end px-[14px] sm:px-[34px] CraftworkGrotesk">
                        <div className="text-black text-[18px] md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-[18px] sm:leading-[20px] md:leading-[22px] xl:leading-[26px] 2xl:leading-[32px] mr-[40px] sm:mr-[150px] md:mr-[212px] lg:mr-[262px]">
                          <div className="">YOU</div>
                          <div className="">ARE</div>
                        </div>
                        <div className="text-black text-[18px] md:text-2xl xl:text-3xl 2xl:text-4xl leading-[18px] sm:leading-[20px] md:leading-[22px] xl:leading-[26px] 2xl:leading-[32px] font-semibold">
                          <div className="">THE</div>
                          <div className="">DESTINATION </div>
                        </div>
                      </div>
                      <div className="text-black text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold leading-[12px] sm:leading-[17px]  sm:right-[34px] AuxMono">
                        <div className="">IMMERSIVE
</div>
                        <div className="sm:mb-2 mb-0">TRAVEL</div>
                        <div className="">EXPERIENCES
</div>
                        <div className="">FOR YOU</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="absolute top-0 left-[80%] h-[calc(100vh-50px)] w-[1px] bg-black z-10" id="landingLine1"></div>
      <div className="absolute top-0 left-[61.5%] h-[calc(100vh-50px)] w-[1px] bg-black z-10" id="landingLine2"></div>
      
      <div className="w-[100vw] mt-5 flex items-center gap-[45px] no-scrollbar absolute bottom-0 left-0 z-20">
        <AutoScrollFooter />
      </div>
    </div>
  );
};

export default LandingTransition;
