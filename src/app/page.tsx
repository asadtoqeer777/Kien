"use client"
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
import PhilosophyPage from './philosophy/page';
import Header from './__components/header/Header';
import ArchetypePage from "./archetype/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(null);
  // const [animationPercent, setAnimationPercent] = useState(0)


  useEffect(() => {
    const container1 = document.querySelector(".container1") as HTMLElement | null;
  
    const endValue = container1 ? "+=" + container1.offsetWidth : "+=0";
    const t1 = gsap.timeline();
    // let startXPercent = 0;
    // if (activeNav === 2) {
    //   // If landingTransition is the active page, start from the right
    //   console.log("jdkfjd", activeNav);
      
    //   startXPercent = 100;
    // } else if (activeNav === 3) {
    //   // If ArchetypePage is the active page, start from the center
    //   startXPercent = 0;
    // }
  
    t1
    .to('.LandingPage', { position: "absolute", top: "50%", left: "50%", width: "179px", height: "388px", transform: "translate(-50%, -50%)"})
    // .to(".landingPageFooter", {display: "none"})
    // .from(".landingPageFooter", {display: "none"})
      .from(".landingTransition", { xPercent: 0, position: "relative", zIndex: '1' }, '<')
      .to(".landingTransition", {xPercent: 0, position: "relative", zIndex: "2" }, '<')
      .to(".ArchetypePage", { xPercent: -100, position: "relative", zIndex: "3" }, '.landingTransition')
      .to(".category", { xPercent: -200, position: "relative", zIndex: "4" }, '.ArchetypePage')
      .to(".categorieslist", { xPercent: -300, position: "relative", zIndex: "5" }, '.category')
      .to(".philosophyPage", { xPercent: -400, position: "relative", zIndex: "6" });
  
    ScrollTrigger.create({
      animation: t1,
      trigger: ".container1",
      scrub: 0,
      snap: 1 / 5,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Calculate the activeNav based on the scroll position
        const scrollPercent = self.progress * 100;
        const footer = document.querySelector(".landingPageFooter") as HTMLElement | null;
        const LandingImageMain = document.querySelector(".LandingPage") as HTMLElement | null;
        const landingTransitionImage = document.querySelector(".landingTransitionImage") as HTMLElement | null;
        console.log("landingTransitionImage", landingTransitionImage);
        

        if (scrollPercent > 1) {
      
          if (footer && LandingImageMain) {
            footer.style.display = 'none';
          }
          if (scrollPercent > 19) {
            if (LandingImageMain) {
              LandingImageMain.style.zIndex = '-1';
            }
          }else {
            if (LandingImageMain) {
              LandingImageMain.style.zIndex = '1';
            }
          }

          if (scrollPercent > 19) {
            if (landingTransitionImage) {
              landingTransitionImage.style.alignItems = 'end';
            }
          }else {
            if (landingTransitionImage) {
              landingTransitionImage.style.alignItems = "center";
            }
          }
        } else {
          if (footer) {
            footer.style.display = 'block';
          }
        }
        // if (scrollPercent > 19.9) {
      
        //   if (LandingImageMain) {
        //     LandingImageMain.style.zIndex = '-1';
        //   }
        // } else {
        //   if (LandingImageMain) {
        //     LandingImageMain.style.zIndex = '1';
        //   }
        // }
        // setAnimationPercent(scrollPercent)
        // if (scrollPercent < 20) {
        //   setActiveNav(1);
        // } else if (scrollPercent < 40) {
        //   setActiveNav(2);
        // } else if (scrollPercent < 60) {
        //   setActiveNav(3);
        // } else if (scrollPercent < 80) {
        //   setActiveNav(4);
        // } else {
        //   setActiveNav(5);
        // }
      },
    });
  }, [router]);

  const handleNav = (navNumber: any) => {
    if (navNumber === activeNav) {
      // If the same nav is clicked, close it
      setActiveNav(null);
    } else {
      // If a different nav is clicked, open it
      setActiveNav(navNumber);
    }
  };

  return (
    <div className="container1" style={{ display: "flex" }}>
      {/* <section className={`landingpage`}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 1} handleNav={() => handleNav(1)} />
        <LandingPage />
      </section> */}
      <section className={`landingTransition `}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 2} handleNav={() => handleNav(2)} />
        <LandingTransition />
      </section>
      <section className={`ArchetypePage `}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 2} handleNav={() => handleNav(3)} />
        <ArchetypePage />
      </section>
      <section className={`category`}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 3} handleNav={() => handleNav(4)} />
        <Category />
      </section>
      <section className={`categorieslist`}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 4} handleNav={() => handleNav(5)} />
        <CategoriesList />
      </section>
      <section className={`philosophyPage`}>
        <Header navTheme={"bg-primary text-white"} toggleNav={activeNav === 5} handleNav={() => handleNav(6)} />
        <PhilosophyPage />
      </section>
    </div>
  );
}
