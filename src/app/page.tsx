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
          const philosophyMain = document.querySelector(
            ".philosophyMain"
          ) as HTMLElement | null;

          const LandingPage = document.querySelector(
            "LandingPage"
          ) as HTMLElement | null;

          if (scrollPercent < 0.1) {
            if (philosophyMain) {
              philosophyMain.style.overflowY = "auto";
            }
          } else {
            if (philosophyMain) {
              philosophyMain.style.overflowY = "hidden";
            }
          }
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
          // if(scrollPercent > 45){
          //   gsap.to("#categoryFadeTextBorder",{
          //     borderBottom: "0px"
          //   })
          //   gsap.to("#categoryFadeText",{
          //       marginTop: "-50px",
          //       opacity: "0.3",
          //       display: "none",
          //       transitionDuration: "1s",
          //       scrollTrigger: {
          //         trigger: "#categoryFadeText"
          //     },
          //   })
          //  gsap .to(
          //     "#categoriesTransition",
          //     {
          //       position: "absolute",
          //       top: "50%",
          //       left: "-84.2%",
          //       transform: "translate(0%, -35%)",
          //       transitionDuration: "1s",
          //       scrollTrigger: {
          //         trigger: "#categoriesTransition"
          //       }
          //     },
          //   )
          // }else if(scrollPercent < 45){
          //   gsap.to("#categoryFadeTextBorder",{
          //     borderBottom: "1px"
          //   })
          //   gsap.to("#categoryFadeText",{
          //       marginTop: "0px",
          //       opacity: "1",
          //       display: "block",
          //       transitionDuration: "1s",
          //       scrollTrigger: {
          //         trigger: "#categoryFadeText"
          //     },
          //   })
          //   gsap.to(
          //     "#categoriesTransition",
          //     {
          //       position: "absolute",
          //       top: "50%",
          //       left: "0%",
          //       transform: "translate(84.2%, -35%)",
          //       scrollTrigger: {
          //         trigger: "#categoriesTransition"
          //       }
          //     },
          //   )
          // }

          if (scrollPercent > 70) {
            setToggleNav(2);
          } else {
            setToggleNav(1);
          }

          if (scrollPercent > 76) {
            if (philosophyMain) {
              philosophyMain.style.overflowY = "auto";
            }
          } else {
            if (philosophyMain) {
              philosophyMain.style.overflowY = "hidden";
            }
          }
        },
      },
    });

    tl.to(".LandingPage", {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "179px%",
      height: "100vh",
      transform: "translate(-50%, -50%)",
    })

      .to(
        ".LandingPage",
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "179px",
          height: "388px",
          transform: "translate(-50%, -50%)",
        },
        "LandingPage"
      )

      .from(".ProfileMainDetails", {
        top: "50%",
        right: "0%",
      })
      .to(".ProfileMainDetails", {
        right: "50%",
        transform: "translate(50%, -50%)",
      });

    stops.forEach((stop, index) => {
      const currentSection = sections[stop] as HTMLElement; // Use type assertion
      const q = gsap.utils.selector(currentSection);
      console.log("stop", stop, index);

      tl.to(sections, {
        xPercent: -(100 * stop),
        duration: stop,
      });
      if (currentSection.querySelector("#categoriesTransition")) {
        tl.to("#categoryFadeText", {
            marginTop: "-80px",
            opacity: "0",
            duration: 3,
          },"start").to("#categoryFadeTextBorder", {
            borderBottom: "0px",
            duration: 3,
          },"start")
          tl  .to("#categoriesTransition", {
            position: "absolute",
            top: "50%",
            transform: "translate(0%, -35%)",
            duration: 3,
          },"start")
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
          {/* <section className={`panel CategoriesList`} data-pin="true">
            <CategoriesList />
          </section> */}

          <section className={`panel`} data-pin="true">
            <div className="Philosophy">
              <PhilosophyPage scrollCheck={true} />
            </div>
          </section>
          {/* <section className={`panel`} data-pin="true">
            <div>
              <Profile />
            </div>
          </section> */}
        </div>
      </div>
      {/* <Accordion/> */}
    </div>
  );
}
