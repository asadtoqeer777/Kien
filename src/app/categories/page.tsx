"use client";
import React, { useState } from "react";
import Header from "../__components/header/Header";
import logo from "../__assets/images/pngs/logo.png";
import footerLogo from "../__assets/images/svgs/mainFooterLogo.svg";
import Image from "next/image";
import Button from "../__components/buttons/Button";
import style from "./style.module.css";
import CategoriesLogo from "../__assets/images/svgs/categoryLogo1.svg";
import CategoriesLogo2 from "../__assets/images/svgs/categoryLogo2.svg";
import CategoriesLogo3 from "../__assets/images/svgs/categoryLogo3.svg";
import CategoriesLogo4 from "../__assets/images/svgs/categoryLogo5.svg";
import CategoriesLogo5 from "../__assets/images/svgs/categoryLogo4.svg";
import CatagoryButton from "../__components/catagoryButton/CatagoryButton";
import CategoriesCardMain from "../__components/categoriesCardMain/page";
import cardIcon1 from "../__assets/images/svgs/cardIcon2.svg"
import cardIcon2 from "../__assets/images/svgs/cardIcon1.svg"
import cardIcon3 from "../__assets/images/svgs/cardIcon3.svg"
import cardIcon4 from "../__assets/images/svgs/cardIcon4.svg"
import cardIcon5 from "../__assets/images/svgs/cardIcon5.svg"

const Category = () => {
  const [toggleBtn, setToggleBtn] = useState(null);
  const [content, setContent] = useState(0);

  const handleToggleBtn = (catNum: any) => {
    if (catNum === toggleBtn) {
      setToggleBtn(null);
    } else {
      setToggleBtn(catNum);
    }
  };

  const contentOptions = [
    {
      logo: CategoriesLogo,
      maintitle: "Savant",
      subMaintitle1: "Reflective",
      subMaintitle2: "Profound • Wise",
      subtitle: "You’re a Savant if",
      description:
        "You're drawn to places rich in history and stories, always eager to explore spots that shed light on culture and traditions, turning every journey into a lesson in understanding.",
        card: [
          {
            Name: "Tye Addams,",
            CountryName: "Denmark",
            title: "Savant",
            subTitle: "Scholarly",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
          {
            Name: "Rahul Yadav,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
          {
            Name: "Robin Stevens,",
            CountryName: "Spain",
            title: "Savant",
            subTitle: "Insightful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
          {
            Name: "Ravish Kumar,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Thoughtful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
          {
            Name: "Kendra Lynn,",
            CountryName: "USA",
            title: "Savant",
            subTitle: "Learned ",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
          {
            Name: "Owen Franks,",
            CountryName: "Switzerland",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon1
          },
        ],
        id: "categoriesTransition1",
        subHeadId: "categoryFadeText1",
        subHeadMainId: "categoryFadeTextBorder1"
    },
    {
      logo: CategoriesLogo2,
      maintitle: "Vitalist",
      subMaintitle1: "Spirited",
      subMaintitle2: "Vital • Dynamic",
      subtitle: "You’re a Vitalist",
      description:
        "If you thrive on adventure and the thrill of the unknown, always eager to conquer new terrains and embrace the unpredictable, turning every journey into a heart-pounding escapade.",
        id: "categoriesTransition2",
        subHeadId: "categoryFadeText2",
        subHeadMainId: "categoryFadeTextBorder2",
        card: [
          {
            Name: "Soni Aggarwal,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Scholarly",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
          {
            Name: "Rahul Yadav,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
          {
            Name: "Robin Stevens,",
            CountryName: "Spain",
            title: "Savant",
            subTitle: "Insightful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
          {
            Name: "Ravish Kumar,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Thoughtful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
          {
            Name: "Kendra Lynn,",
            CountryName: "USA",
            title: "Savant",
            subTitle: "Learned ",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
          {
            Name: "Owen Franks,",
            CountryName: "Switzerland",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon2
          },
        ],
    },
    {
      logo: CategoriesLogo3,
      maintitle: "Revelator",
      subMaintitle1: "Enchanted",
      subMaintitle2: "Intuitive • Etherial",
      subtitle: "You’re a Revelator",
      description:
        "If you love uncovering hidden wonders, feel a deep connection to places with ancient stories, and find magic in the world's lesser-known spots.",
        id: "categoriesTransition3",
        subHeadId: "categoryFadeText3",
        subHeadMainId: "categoryFadeTextBorder3",
        card: [
          {
            Name: "Soni Aggarwal,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Scholarly",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
          {
            Name: "Rahul Yadav,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
          {
            Name: "Robin Stevens,",
            CountryName: "Spain",
            title: "Savant",
            subTitle: "Insightful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
          {
            Name: "Ravish Kumar,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Thoughtful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
          {
            Name: "Kendra Lynn,",
            CountryName: "USA",
            title: "Savant",
            subTitle: "Learned ",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
          {
            Name: "Owen Franks,",
            CountryName: "Switzerland",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon3
          },
        ],
    },
    {
      logo: CategoriesLogo4,
      maintitle: "Epicurean",
      subMaintitle1: "Luxuriating",
      subMaintitle2: "Beauty • Pleasure",
      subtitle: "You’re an Epicurean ",
      description:
        "If you have a taste for the finer things in travel, indulge in destinations known for culinary delights, and cherish experiences that tantalise the senses.",
        id: "categoriesTransition4",
        subHeadId: "categoryFadeText4",
        subHeadMainId: "categoryFadeTextBorder4",
        card: [
          {
            Name: "Soni Aggarwal,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Scholarly",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
          {
            Name: "Rahul Yadav,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
          {
            Name: "Robin Stevens,",
            CountryName: "Spain",
            title: "Savant",
            subTitle: "Insightful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
          {
            Name: "Ravish Kumar,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Thoughtful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
          {
            Name: "Kendra Lynn,",
            CountryName: "USA",
            title: "Savant",
            subTitle: "Learned ",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
          {
            Name: "Owen Franks,",
            CountryName: "Switzerland",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon4
          },
        ],
    },
    {
      logo: CategoriesLogo5,
      maintitle: "Seeker",
      subMaintitle1: "Adventurous ",
      subMaintitle2: " Unbound • Wandering",
      subtitle: "You’re a Seeker ",
      description:
        "If you're driven by an insatiable curiosity, always on the hunt for hidden gems and untold stories. You thrive on charting unknown territories and find immense joy in discovering the unbeaten paths, local secrets, and the unique heartbeat of every destination.",
        id: "categoriesTransition5",
        subHeadId: "categoryFadeText5",
        subHeadMainId: "categoryFadeTextBorder5",
        card: [
          {
            Name: "Soni Aggarwal,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Scholarly",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
          {
            Name: "Rahul Yadav,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
          {
            Name: "Robin Stevens,",
            CountryName: "Spain",
            title: "Savant",
            subTitle: "Insightful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
          {
            Name: "Ravish Kumar,",
            CountryName: "India",
            title: "Savant",
            subTitle: "Thoughtful",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
          {
            Name: "Kendra Lynn,",
            CountryName: "USA",
            title: "Savant",
            subTitle: "Learned ",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
          {
            Name: "Owen Franks,",
            CountryName: "Switzerland",
            title: "Savant",
            subTitle: "Reflective",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
          {
            Name: "Sabby Ron,",
            CountryName: "Netherlands",
            title: "Savant",
            subTitle: "Intellectual",
            travel: "+100kms",
            status: "lynnK",
            logo: cardIcon5
          },
        ],
    },
  ];

  const handleContentChange = () => {
    setContent((content + 1) % contentOptions.length);
  };

  return (
    <div
      className="w-[100vw] h-[100vh] overflow-hidden no-scrollbar bg-white relative "
      id="3"
    >
      {contentOptions.map((option, index) => (
        <div
          key={index}
          style={{ display: index === content ? "block" : "none" }}
          className="overflow-y-auto h-[100vh] no-scrollbar"
        >
          <div className="">
            <div className="mt-[30px]">
              <div className={`grid grid-cols-9 gap-2  ${style.categoryHero}`}>
                <div className="col-span-3 px-3">
                  <Image
                    src={option.logo}
                    alt=""
                    className="categoryLogo 2xl:h-[210px] xl:h-[200px] lg:h-[170px] md:h-[140px] sm:h-[120px] h-[100px] w-[100px] 2xl:w-[210px] xl:w-[180px] lg:w-[170px] md:w-[140px] sm:w-[120px]"
                  />
                </div>
                <div
                  className={`${style.categoryHeading} col-span-6 flex items-end pb-5 CraftworkGrotesk`}
                >
                  <div>{option.maintitle}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="grid grid-cols-9 gap-2  pb-5"
                id={option.subHeadMainId}
                style={{
                  borderBottom: "1px solid black"
                }}
              >
                <div className="col-span-3">
                  <div className="flex items-center gap-2 ml-4 mt-2">
                    <Button
                      btnClasses={
                        "bg-transparent text-black border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px] SpaceGrotesk"
                      }
                      btntext={"PERIPATETIC"}
                    />
                    <Button
                      btnClasses={
                        "bg-black text-white border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px] SpaceGrotesk"
                      }
                      btntext={"DECODE CARD"}
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div
                    className={`${style.categoryHeading} text-[#00000080] mt-[4vh] sm:mt-[3vh] CraftworkGrotesk`}
                    id={option.subHeadId} 
                  >
                    <div>{option.subMaintitle1}</div>
                    <div>{option.subMaintitle2}</div>
                  </div>
                </div>
              </div>
              <div
        className="absolute top-[56px] right-0 z-10 translate-x-[94.2%] translate-y-[0%] w-full pl-[23px]"
        id={option.id}
      >
        <CategoriesCardMain card={option?.card} handleContentChange={handleContentChange} />
      </div>
            </div>

            <div className="grid grid-cols-9 gap-2">
              <div className="col-span-3"></div>
              <div className="col-span-6" id={option.subHeadId}>
                <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[80px]">
                  <div className={`${style.categorySubHeading}`}>
                    <div>{option.subtitle}</div>
                  </div>
                  <div className={`${style.categorySubHeadDes}`}>
                    <div>{option.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 left-3 w-full flex pr-6 justify-between items-end z-20">
            <div className="mb-2 sm:mb-0">
              <div className="gap-2 flex flex-wrap mb-2 items-end w-[350px]">
                {/* <span> */}
                  <CatagoryButton
                    btnLabelDetail={"For the bold adventurer"}
                    btnLabel={"VITALIST"}
                    clickFcun={() => handleToggleBtn(1)}
                    toggleBtn={toggleBtn === 1}
                  />
                {/* </span> */}

                {/* <span> */}
                  <CatagoryButton
                    btnLabelDetail={"For the bold adventurer"}
                    btnLabel={"CONTEMPLATIVE"}
                    clickFcun={() => handleToggleBtn(2)}
                    toggleBtn={toggleBtn === 2}
                  />
                {/* </span> */}
                {/* </div>
        <div className="gap-2 flex flex-wrap items-end"> */}
                {/* <span> */}
                  <CatagoryButton
                    btnLabelDetail={"For the bold adventurer"}
                    btnLabel={"EPICUREAN"}
                    clickFcun={() => handleToggleBtn(3)}
                    toggleBtn={toggleBtn === 3}
                  />
                {/* </span> */}

                {/* <span> */}
                  <CatagoryButton
                    btnLabelDetail={"For the bold adventurer"}
                    btnLabel={"MELANCHOLIC"}
                    clickFcun={() => handleToggleBtn(4)}
                    toggleBtn={toggleBtn === 4}
                  />
                {/* </span> */}
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
        </div>
        
      ))}

    </div>
  );
};

export default Category;
