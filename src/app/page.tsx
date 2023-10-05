"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Login from "./login/page";
import Register from "./register/page";
import LandingPage from "./landingPage/page";
import LandingTransition from "./landingPageTransition/page";
import Category from "./categories/page";
import CategoriesList from "./categoriesList/page";
import PhilosophyPage from "./philosophy/page";
import Header from "./__components/header/Header";
import ArchetypePage from "./archetype/page";
import { escape } from "querystring";
import Accordion from "./__components/accordians/Accordians";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(null);
  const [toggleNav, setToggleNav] = useState(1)
  // const [animationPercent, setAnimationPercent] = useState(0)

  // useEffect(() => {
  //   const container1 = document.querySelector(
  //     ".container1"
  //   ) as HTMLElement | null;

  //   const endValue = container1 ? "+=" + container1.offsetWidth : "+=0";
  //   const t1 = gsap.timeline();

  //   t1.to(".LandingPage", {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     width: "179px",
  //     height: "388px",
  //     transform: "translate(-50%, -50%)",
  //   })
  //     // .to(".landingPageFooter", {display: "none"})
  //     // .from(".landingPageFooter", {display: "none"})
  //     .from(
  //       ".landingTransition",
  //       { xPercent: 0, position: "relative", zIndex: "1" },
  //       "<"
  //     )
  //     .to(
  //       ".landingTransition",
  //       { xPercent: 0, position: "relative", zIndex: "2" },
  //       "<"
  //     )
  //     .to(
  //       ".ArchetypePage",
  //       { xPercent: -100, position: "relative", zIndex: "3" },
  //       ".landingTransition"
  //     )
  //     .to(
  //       ".category",
  //       { xPercent: -200, position: "relative", zIndex: "4" },
  //       ".ArchetypePage"
  //     )
  //     .to(
  //       ".categorieslist",
  //       { xPercent: -300, position: "relative", zIndex: "5" },
  //       ".category"
  //     )
  //     .to(".philosophyPage", {
  //       xPercent: -400,
  //       position: "relative",
  //       zIndex: "6",
  //     });

  //   ScrollTrigger.create({
  //     animation: t1,
  //     trigger: ".container1",
  //     scrub: 0,
  //     snap: 1 / 5,
  //     pin: true,
  //     anticipatePin: 1,
  //     toggleActions: "play reverse",
  //     end: '+=25000px',

  //     onUpdate: (self) => {
  //       // Calculate the activeNav based on the scroll position
  //       const scrollPercent = self.progress * 100;
  //       console.log("scrollPercent",scrollPercent)
  //       const footer = document.querySelector(
  //         ".landingPageFooter"
  //       ) as HTMLElement | null;
  //       const LandingImageMain = document.querySelector(
  //         ".LandingPage"
  //       ) as HTMLElement | null;
  //       const landingTransitionImage = document.querySelector(
  //         ".landingTransitionImage"
  //       ) as HTMLElement | null;
  //       console.log("landingTransitionImage");

  //       if (scrollPercent > 1) {
  //         if (footer && LandingImageMain) {
  //           footer.style.display = "none";
  //         }
  //         if (scrollPercent > 19) {
  //           if (LandingImageMain) {
  //             LandingImageMain.style.zIndex = "-1";
  //           }
  //         } else {
  //           if (LandingImageMain) {
  //             LandingImageMain.style.zIndex = "1";
  //           }
  //         }

  //         if (scrollPercent > 19) {
  //           if (landingTransitionImage) {
  //             landingTransitionImage.style.alignItems = "end";
  //           }
  //         } else {
  //           if (landingTransitionImage) {
  //             landingTransitionImage.style.alignItems = "center";
  //           }
  //         }
  //       } else {
  //         if (footer) {
  //           footer.style.display = "block";
  //         }
  //       }

  //       if (scrollPercent > 90) {
  //         setToggleNav(2)
  //       } else {
  //         setToggleNav(1)
  //       }
  //     },
  //   });
  // }, [router]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".panel");
    const stops: number[] = [];

    sections.forEach((section, index) => {
      if (section instanceof HTMLElement && section.dataset.pin) stops.push(index); // Use type assertion
    });

    

    const tl = gsap.timeline({
      defaults: {
        ease: "sine"
      },
      scrollTrigger: {
        trigger: ".yfguhjbkn",
        pin: true,
        scrub: 0.5,
        end: "+=4000",
        // end: "+=" + sections.length * 11000,
        onUpdate: (self) => {
        // Calculate the activeNav based on the scroll position
        const scrollPercent = self.progress * 100;
        console.log("scrollPercent",scrollPercent)
        const footer = document.querySelector(
          ".landingPageFooter"
        ) as HTMLElement | null;
        const LandingImageMain = document.querySelector(
          ".LandingPage"
        ) as HTMLElement | null;
        const landingTransitionImage = document.querySelector(
          ".landingPageMainImage"
        ) as HTMLElement | null;
        const philosophyMain = document.querySelector(
          ".philosophyMain"
        ) as HTMLElement | null;

        const LandingPage = document.querySelector("LandingPage") as HTMLElement | null;
        if (scrollPercent < 0.1) {
          if (philosophyMain){
            philosophyMain.style.overflowY= "auto"
          }
        }else {
          if (philosophyMain){
            philosophyMain.style.overflowY= "hidden"
          }
        }
        if (scrollPercent > 0.01) {
          
          if (footer) {
            footer.style.display = "none";
          }
          if (scrollPercent > 2.1) {
            if (LandingImageMain) {
              LandingImageMain.style.zIndex = "-1";
            }
          } else {
            if (LandingImageMain) {
              LandingImageMain.style.zIndex = "1";
            }
          }
        } else {
          if (footer) {
            footer.style.display = "block";
          }
        }

        if (scrollPercent > 70) {
          setToggleNav(2)
        } else {
          setToggleNav(1)
        }

        if (scrollPercent > 76) {
          if (philosophyMain){
            philosophyMain.style.overflowY= "auto"
          }
        }else {
          if (philosophyMain){
            philosophyMain.style.overflowY= "hidden"
          }
        }
      },

      
      }
      
    });

    tl.to(".LandingPage",{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "179px",
            height: "388px",
            transform: "translate(-50%, -50%)",
    })
    .to(".LandingPage",{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "179px",
      height: "388px",
      transform: "translate(-50%, -50%)",
})

    

    stops.forEach((stop, index) => {
      const currentSection = sections[stop] as HTMLElement; // Use type assertion
      const q = gsap.utils.selector(currentSection);

      tl.to(sections, {
        xPercent: -(100 * stop),
        duration: stop
      });

      tl.to(sections, {
        xPercent: -(100 * stop),
        duration: stop
      });

      if (index === stops.length - 1) {
        tl.to(sections, {
          xPercent: -(100 * (sections.length - 1)),
          duration: sections.length - stop
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
        navTheme={toggleNav==2 ? "bg-primary text-white": toggleNav==3 ? "" : "bg-[#E3FF00]"}
        toggleNav={activeNav === 2}
        handleNav={() => handleNav(2)}
        navCol= {toggleNav}
      />
      <div className="mainans ">

      <div className="yfguhjbkn">

        <section className={`panel LandingTransition`}>
          <LandingTransition />
        </section>
        <section className={`panel  ArchetypePage`} data-pin="true">
          <ArchetypePage />
        </section>
        <section className={`panel Category`} data-pin="true">
          <Category />
        </section>
        <section className={`panel CategoriesList`} data-pin="true">
          <CategoriesList />
        </section>
        <section className={`panel`} data-pin="true">
          <div className="PhilosophyPage">
          <PhilosophyPage scrollCheck = {true}/>
          </div>
        </section>
      </div>
      </div>
      {/* <Accordion/> */}
    </div>
  );
}


// export default function Home() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const sections = gsap.utils.toArray(".panel");
  //   const stops: number[] = [];

  //   sections.forEach((section, index) => {
  //     if (section instanceof HTMLElement && section.dataset.pin) stops.push(index); // Use type assertion
  //   });

  //   const tl = gsap.timeline({
  //     defaults: {
  //       ease: "none"
  //     },
  //     scrollTrigger: {
  //       trigger: ".yfguhjbkn",
  //       pin: true,
  //       scrub: 0.5,
  //       end: "+=4000"
  //     }
  //   });

  //   stops.forEach((stop, index) => {
  //     const currentSection = sections[stop] as HTMLElement; // Use type assertion
  //     const q = gsap.utils.selector(currentSection);

  //     tl.to(sections, {
  //       xPercent: -(100 * stop),
  //       duration: stop
  //     });

  //     tl.to(sections, {
  //       xPercent: -(100 * stop),
  //       duration: stop
  //     });

  //     if (index === stops.length - 1) {
  //       tl.to(sections, {
  //         xPercent: -(100 * (sections.length - 1)),
  //         duration: sections.length - stop
  //       });
  //     }
  //   });
  // }, []);

//   return (
//     <div className="mainans">
//       <div className="yfguhjbkn w-[600%]">
//         <section className="panel">
//         <LandingTransition />
//         </section>
//         <section className="panel " data-pin="true">
//         <LandingTransition />
//         </section>
//         <section className="panel " data-pin="true">
//         <LandingTransition />
//         </section>
//         <section className="panel " data-pin="true">
//         <LandingTransition />
//         </section>
//         <section className="panel ">
//         <LandingTransition />
//         </section>
//       </div>
//     </div>
//   );
// }