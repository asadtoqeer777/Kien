"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingTransition from "./landingPageTransition/page";
import Category from "./categories/page";
import PhilosophyPage from "./philosophy/page";
import Header from "./__components/header/Header";
import ArchetypePage from "./archetype/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(null);
  const [toggleNav, setToggleNav] = useState(1);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    const stops: number[] = [];

    sections.forEach((section, index) => {
      if (section instanceof HTMLElement && section.dataset.pin)
        stops.push(index); // Use type assertion
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".MainContainer",
        pin: true,
        scrub: 1,
        end: "+=10000",
        // end: "+=" + sections.length * 11000,
        onUpdate: (self) => {
          // Calculate the activeNav based on the scroll position
          const scrollPercent = self.progress * 100;
          console.log("scrollPercent", scrollPercent);
          const footer = document.querySelector(
            ".landingPageFooter"
          ) as HTMLElement | null;
          const landingLine1 = document.querySelector(
            "#landingLine1"
          ) as HTMLElement | null;
          const landingLine2 = document.querySelector(
            "#landingLine2"
          ) as HTMLElement | null;

          if (scrollPercent > 0.01) {
            if (footer) {
              footer.style.display = "none";
            }
            if (landingLine1) {
              landingLine1.style.display = "none";
            }
            if (landingLine2) {
              landingLine2.style.display = "none";
            }
          } else {
            if (footer) {
              footer.style.display = "block";
            }
            if (landingLine1) {
              landingLine1.style.display = "block";
            }
            if (landingLine2) {
              landingLine2.style.display = "block";
            }
          }
          if (scrollPercent > 40.3000) {
            setToggleNav(2);
          } else {
            setToggleNav(1);
          }
        },
      },
    });

    tl.to(".LandingPage", {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "179px",
      height: "100vh",
      transform: "translate(-50%, -50%)",
    })
    // .from(
    //   ".LandingPage",
    //   {
    //   // position: "absolute",
    //   // top: "50%",
    //   // left: "50%",

    //   transform: "translate(-50%, -50%)",
    //   }
    // )

      .to(
        ".LandingPage",
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "179px",
          height: "388px",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        },
      )

      tl.fromTo(
        "#logoBg",
        {
          width: "100%",
          padding: "20px"
        },
        {
          position: "absolute",
          bottom: "20px",
          // width: "138px",
        }
      )

    stops.forEach((stop, index) => {
      const currentSection = sections[stop] as HTMLElement; // Use type assertion
      const q = gsap.utils.selector(currentSection);
      console.log("stop", stop, index);

      tl.to(sections, {
        xPercent: -(100 * stop),
        duration: stop,
      });




      if (currentSection.querySelector("#categoriesTransition1")) {
        tl.to(
          "#categoryFadeText1",
          {
            opacity: "0",
            duration: 3,
            display: "none"
          },
          "start"
        )
        .to(
          "#categoryFadeTextBorder1",
          {
            delay: "4s",
            borderBottom: "0px",
          },
        )
        tl.to(
          "#categoriesTransition1",
          {
            position: "absolute",
            translateX: "0%",
            duration: 3,
            zIndex: "2"
          },
          "start"
        ).to("#cardMainCon", {
          overflowY: "auto",
        })
      }


      if (currentSection.querySelector("#categoriesTransition2")) {
        tl.to(
          "#categoryFadeText2",
          {
            opacity: "0",
            duration: 3,
            display: "none"
          },
          "start"
        )
        .to(
          "#categoryFadeTextBorder2",
          {
            delay: "4s",
            borderBottom: "0px",
          },
        )
        tl.to(
          "#categoriesTransition2",
          {
            position: "absolute",
            translateX: "0px",
            duration: 3,
            zIndex: "2"
          },
          "start"
        )

      }


      if (currentSection.querySelector("#categoriesTransition3")) {
        tl.to(
          "#categoryFadeText3",
          {
            opacity: "0",
            duration: 3,
            display: "none"
          },
          "start"
        )
        .to(
          "#categoryFadeTextBorder3",
          {
            delay: "4s",
            borderBottom: "0px",
          },
        )
        tl.to(
          "#categoriesTransition3",
          {
            position: "absolute",
            translateX: "0px",
            duration: 3,
            zIndex: "2"
          },
          "start"
        )

      }



      if (currentSection.querySelector("#categoriesTransition4")) {
        tl.to(
          "#categoryFadeText4",
          {
            opacity: "0",
            duration: 3,
            display: "none"
          },
          "start"
        )
        .to(
          "#categoryFadeTextBorder3",
          {
            delay: "4s",
            borderBottom: "0px",
          },
        )
        tl.to(
          "#categoriesTransition4",
          {
            position: "absolute",
            translateX: "0px",
            duration: 3,
            zIndex: "2"
          },
          "start"
        )
      }


      if (currentSection.querySelector("#categoriesTransition5")) {
        tl.to(
          "#categoryFadeText5",
          {
            opacity: "0",
            duration: 3,
            display: "none"
          },
          "start"
        )
        .to(
          "#categoryFadeTextBorder3",
          {
            delay: "4s",
            borderBottom: "0px",
          },
        )
        tl.to(
          "#categoriesTransition5",
          {
            position: "absolute",
            translateX: "0px",
            duration: 3,
            zIndex: "2"
          },
          "start"
        )
      }      
      if (currentSection.querySelector("#philosophy")) {
        tl.fromTo(
          "#philosophy",
          {
            scale: 35,
            duration: 20,
            transformOrigin: "50% 65%",
          },
          {
            scale: 1,
            duration: 20,

          }
        )
        .from(".philosophyMain", {
          overflowY: "hidden",
        })
        .to(".philosophyMain", {
          overflowY: "scroll",
        })
      }

      tl.to(sections, {
        xPercent: -(100 * stop),
        duration: stop,
      });

      if (index === stops.length - 1) {
        tl.to(sections, {
          xPercent: -(100 * (sections.length - 1)),
          duration: sections.length - stop,
        });
      }
    });
  }, []);


  const handleNav = (navNumber: any) => {
    if (navNumber === activeNav) {
      setActiveNav(null);
    } else {
      setActiveNav(navNumber);
    }
  };

  return (
    <div className="">
      <Header
        navTheme={
          toggleNav == 2
            ? "bg-primary text-white"
            : toggleNav == 3
            ? ""
            : "bg-[#E3FF00]"
            
        }
        navBorArrow={
          toggleNav == 2 ? true : false
        }
        toggleNav={activeNav === 2}
        handleNav={() => handleNav(2)}
        navCol={toggleNav}
      />
      <div className="mainans " id="smooth-wrapper">
        <div className="MainContainer" id="smooth-content">
          <section className={`panel LandingTransition`}>
            <LandingTransition />
          </section>
          <section className={`panel  ArchetypePage`} data-pin="true">
            <ArchetypePage />
          </section>
          <section className={`panel Category`} data-pin="true">
            <Category />
          </section>
          <section className={`panel`} data-pin="true">
            <div className="Philosophy">
              <PhilosophyPage scrollCheck={true} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
