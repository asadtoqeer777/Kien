"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../__components/header/Header";
import Container from "../__components/container";
import Image from "next/image";
import Button from "../__components/buttons/Button";
import philosophyPoster from "../__assets/images/svgs/philosophy-poster.svg";
import plusIcon from "../__assets/images/svgs/plusIconfilled.svg";
import footerLogo from "../__assets/images/svgs/footerLogo.svg";
import CountUp from "react-countup";
import backArrowCircle from "../__assets/images/svgs/back-arrow-circle.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import philosphy from "../__assets/images/pngs/MicrosoftTeams-image.png"

interface Props {
  scrollCheck: boolean;
}

const expListings = [
  {
    title: "Testimonials",
    count: 310,
    moreThanCount: false,
    info: "",
  },
  {
    title: "Destinations",
    count: 11,
    moreThanCount: false,
    info: "",
  },
  {
    title: "Personalities Traveled",
    count: 102,
    moreThanCount: true,
    info: "RELEVANT INFO",
  },
];

const PhilosophyPage = ({ scrollCheck }: Props) => {
  const router = useRouter();

  const [selectedExp, setSelectedExp] = useState<number>(
    expListings.length - 1
  );

  return (
    <div
      className={
        " w-[100vw] h-[100vh] philosophyMain  relative overflow-x-hidden SpaceGrotesk"
      }
    >
      <section className=" w-full relative z-20">
        <div className=" pt-10 ">
          <Container styles="uppercase">
            <div className="flex justify-between items-center">
                
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Image
                  src={backArrowCircle}
                  alt="arrow-icon"
                  className="custom-img"
                  fill
                />
              </div>
              <div className="hidden xl:max-w-sm max-w-xs w-full sm:flex items-end">
                <div className="flex justify-between gap-6 w-full">
                  <p className="w-max text-xs">
                    (04)
                    <br />
                    RELEVANT INFO
                  </p>
                  <p className="w-max text-xs">IND</p>
                  <p className="w-max text-xs">
                    (04)
                    <br />
                    RELEVANT INFO
                  </p>
                </div>
              </div>
            </div>
            <h1 className="2xl:text-[222px] xl:text-[180px] lg:text-[145px] md:text-8xl sm:text-[80px] text-[50px] lg:leading-[70px] lg:mt-20 md:mt-10 mt-3 text-center font-semibold CraftworkGrotesk">
              Philosophy
            </h1>

            <div className="md:w-[80%] w-full mx-auto 2xl:mt-5 xl:mt-2 lg:mt-0 md:-mt-7 " id="philosophy">
              {/* <TransformWrapper> */}
                {/* <TransformComponent> */}
                  <Image
                    src={philosphy}
                    alt="philosophy-poster"
                    className="custom-img  relative z-10"
                    fill
                  />
                {/* </TransformComponent> */}
              {/* </TransformWrapper> */}
            </div>
          </Container>
        </div>
      </section>

      <section className="sticky bg-black top-0 text-white">
        <div className="h-full ">
          <div className="relative pb-9 pl-4" id="bottomFotter">

          <p className="text-xs mb-1">(04)</p>
          <h1 className="2xl:text-[53px] xl:text-[44px] lg:text-[35px] md:text-[25px] text-xl lg:leading-[52px] font-semibold CraftworkGrotesk">
          Meet who you are. On the way.
          </h1>
          <div className="lg:w-9/12 ml-auto mt-3 h-full border-b-[1.5px] border-white relative">
            <div className="max-w-[658px] lg:ml-44 leading-7 lg:text-base md:text-sm text-xs pr-4">
              <p>
              They say company defines the journey. And what better company to you than you. At KIEN, we believe in putting the traveler at the heart of every journey. We love designing travel experiences that aren't just personalised but also deeply resonant, reigniting the true spirit of exploration. We invite you to celebrate the world's splendours and its rich tapestry of cultures, all through a lens of wonder and imagination.
              </p>
              <p className="my-6">
              At KIEN, we're driven by this philosophy that goes beyond the ordinary. We immerse ourselves in industry insights and the subtleties of individual personalities, forging partnerships with like-minded creators. Our travel archetypes, meticulously crafted, are not just routes but compasses, guiding travellers towards rich experiences that resonate.
              </p>
              <p>
              These archetypes also serve as a beacon for travel enthusiasts and creators. They foster genuine connections, uniting travellers with shared aspirations and stories. In this evolving landscape of travel, we celebrate where personal journeys intersect with the vast, diverse tapestry of the world.
              </p>

              <div className="flex items-center gap-1 my-8">
                <div className="w-[34px] flex-shrink-0">
                  <Image
                    src={plusIcon}
                    alt="plus-icon"
                    className="custom-img"
                    fill
                  />
                </div>
                <Button
                      btntext="Learn more"
                      btnClasses="text-white border border-white w-[162px] h-[26px]"
                    />
              </div>
            </div>
            <div className="absolute w-[340px] h-[183px] bg-[#E3FF00] bottom-[38%] left-[-8%] z-10 px-2 cursor-pointer" onClick={()=> {
              router.push("/register")
            }}>
            <div className="max-w-sm w-full flex flex-col justify-between h-[100%] text-black ">
            <div className="flex justify-between gap-6 w-full uppercase">
              <p className="w-max text-xs">
                (01)
                <br />
               TAKE ACTION
              </p>
              <p className="w-max text-xs">(02)</p>
              <p className="w-max text-xs">
                (03)
                <br />
                <span className="underline">

                SignUp
                </span>
              </p>
            </div>

            <div className=" font-medium -tracking-[0.96px] leading-[15px]">
            Join Kien in discovering your true passion and embark on journeys that know no boundaries
            </div>
          </div>
            </div>
          </div>
            <div className="absolute top-0 left-[25%] w-[1px] h-[94.9%] bg-white"></div>
            <div className="absolute top-0 left-[75%] w-[1px] h-[94.9%] bg-white"></div>
          </div>

          <div className="border-t lg:w-9/12 w-full ml-auto CraftworkGrotesk">
            {expListings.map((data, index) => (
              <div key={index} className="relative calc-width ml-auto">
                <div
                  className={`${
                    index === 0 && "md:border-r md:ml-[0.5px]"
                  } md:absolute top-0 left-0 flex-shrink-0 md:border-b md:w-40 uppercase leading-5 transform md:-translate-x-full md:-translate-y-full flex justify-between items-center md:border-0 border-b py-2 md:mt-px`}
                >
                  <p>{data.title}</p>

                  <div
                    className="md:hidden block flex-shrink-0 mt-4 h-[22px] w-[22px] rounded-full bg-primary cursor-pointer"
                    onClick={() => setSelectedExp(index)}
                  ></div>
                </div>
                <div
                  style={{
                    height: `${
                      selectedExp === index ? "auto" : `${index * 1.5 + 5}rem`
                    }`,
                  }}
                  className={`${
                    selectedExp === index ? "pb-16" : "pb-1"
                  } flex items-start justify-between gap-4 md:border-l md:border-t px-4 overflow-hidden w-full transition-all duration-300 ease-linear md:-ml-[0.5px] max-h-max`}
                >
                  <div className="2xl:text-[255px] xl:text-[200px] sm:text-[140px] text-[110px]  2xl:leading-[13rem] xl:leading-[12rem] leading-[10rem] 2xl:max-w-[630px] font-bold">
                    {data.count < 10 ? "00" : data.count < 100 && 0}
                    <CountUp end={data.count}/>
                    <span>{data.moreThanCount && "+"}</span>
                  </div>
                  <p className="mt-4 lg:text-[15px] sm:text-sm text-[10px]">
                    {data.info}
                  </p>
                  <div
                    className="md:block hidden flex-shrink-0 mt-4 h-[22px] w-[22px] rounded-full bg-primary cursor-pointer"
                    onClick={() => setSelectedExp(index)}
                  ></div>
                </div>
              </div>
            ))}
            <div className="relative calc-width ml-auto">
              <div
                className={`md:absolute top-0 left-0 flex-shrink-0 md:border-b md:w-40 uppercase leading-5 transform md:-translate-x-full md:-translate-y-full flex justify-between items-center md:border-0 border-b py-2 md:mt-px`}
              >
                <p>experiences provided</p>

                <div className="md:hidden block flex-shrink-0 h-[22px] w-[22px] rounded-full bg-secondary cursor-pointer">

                </div>
              </div>

              {/* <p className='md:absolute top-0 left-0 flex-shrink-0 border-b md:w-40 w-full py-2 uppercase leading-5 transform md:-translate-x-full md:-translate-y-full mt-px'>experiences provided</p> */}
              <div className="md:px-6 pt-7 md:border-l border-t pb-16 w-full transform -translate-x-[.5px]">
                <div className="flex items-start justify-between">
                  <p className="max-w-[630px] md:text-xl w-full leading-7">
                  Reflecting Kien's Philosophy, creators hold a prominent position in our approach. We are passionate about portraying the essence of destinations and cultural hotspots, much like the numerous creators dedicated to showcasing the beauty and diversity of the travel landscape in a fresh and unique manner.
                    <br /> <br />
                    We are highly enthusiastic about the prospect of collaborating with you and your remarkable personalities
                  </p>
                  {/* <p className='mt-3 text-[15px]'></p> */}
                  <div className="md:block hidden mt-4 h-[22px] w-[22px] rounded-full bg-secondary cursor-pointer"></div>
                </div>
                <div className="flex items-center flex-wrap gap-4 mt-20">
                  <div
                    onClick={() => {
                      router.push("/connect");
                    }}
                  >
                    <Button
                      btntext="CONNECT"
                      btnClasses="text-white border border-white w-[162px] h-[26px]"
                    />
                  </div>

                  <div
                    onClick={() => {
                      router.push("/register");
                    }}
                  >
                    <Button
                      btntext="REGISTER NOW"
                      btnClasses="text-white border border-white w-[162px] h-[26px]"
                    />
                  </div>
                  <Button
                    btntext="VIEW CURATORS"
                    btnClasses="bg-secondary w-[181px] text-black h-[26px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex flex-wrap justify-between items-center mx-auto py-3 px-8 gap-5">
          <div className="max-w-sm w-full flex items-end">
            <div className="flex justify-between gap-6 w-full">
              <p className="w-max text-xs">
                (04)
                <br />
                RELEVANT INFO
              </p>
              <p className="w-max text-xs">IND</p>
              <p className="w-max text-xs">
                (04)
                <br />
                RELEVANT INFO
              </p>
            </div>
          </div>
          <div className="flex items-end gap-1 w-max ml-auto">
            <Image
              src={footerLogo}
              alt="footer-logo"
              className="custom-img filter invert"
              fill
            />
            <div className="flex items-end gap-1 leading-4">
              <span>© </span>2023
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-0 left-3 w-[1px] h-[68vh] bg-black"></div>
      <div className="absolute top-0 left-[15%] w-[1px] h-[68vh] bg-black"></div>
      <div className="absolute top-0 left-[65%] w-[1px] h-[68vh] bg-black"></div>
      <div className="absolute top-0 left-[85%] w-[1px] h-[68vh] bg-black"></div>
    </div>
  );
};

export default PhilosophyPage;
