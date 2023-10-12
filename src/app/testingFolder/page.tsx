"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LandingTransition from "../landingPageTransition/page";
import Category from "../categories/page";
import CategoriesList from "../categoriesList/page";
import PhilosophyPage from "../philosophy/page";
import Header from "../__components/header/Header";
import ArchetypePage from "../archetype/page";

import { useIsomorphicLayoutEffect } from "../../helpers/isomorphicEffect";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(null);
  const [toggleNav, setToggleNav] = useState(1);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: ".containerMain",
        pin: true,
        scrub: 0.1,

        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=14000",
      },
    });
    
    gsap.to("#categoriesTransition", {
      position: "absolute",
      top: "50%",
      left: "50%",
      duration: 3,
      transform: "translate(-50%, -35%)",
      ease: "none",
      scrollTrigger: {
        trigger: "#categoriesTransition",
        containerAnimation: scrollTween,
        start: "left 100%",
        end: "left 20%",
        scrub: true,
        id: "1",
      },
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
    // <div className="containerMain">
    //   <section className="panel">Scroll down to animate horizontally ></section>

    //   <section className="panel">
    //     <div className="box-1 box">box-1</div>
    //   </section>

    //   <section className="panel">
    //     <div className="box-2 box">box-2</div>
    //   </section>

    //   <section className="panel">

    //     <div className="box-3 box">box-3</div>
    //   </section>

    //   <section className="panel">
    //   </section>
    // </div>
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
      <div className="mainans ">
        <div className="containerMain">
          <section className={`panel landing`}>
            <LandingTransition />
          </section>

          <section className={`panel archtype`} data-pin="true">
            <ArchetypePage />
          </section>

          <section className={`panel category`} data-pin="true">
            <Category />
          </section>

          <section className={`panel philosophy`} data-pin="true">
            <div className="Philosophy">
              <PhilosophyPage scrollCheck={true} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
