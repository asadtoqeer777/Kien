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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const container1 = document.querySelector(".container1") as HTMLElement | null;
    const landingImage = document.getElementById("landing-logo");
    let sections = gsap.utils.toArray(".landing-logo");

    if (sections) {
      gsap.to(sections, {
        scale: 0.20,
        yPercent: 100,
        scrollTrigger: {
          trigger: container1,
          start: "top top",
          scrub: 0,
        },
      });
    }

    const endValue = container1 ? "+=" + container1.offsetWidth : "+=0";
    const t1 = gsap.timeline();
    t1.to('.landingpage', { position: "relative", zIndex: "1" })
      .to(".landingTransition", { xPercent: -100, position: "relative", zIndex: "2" }, '<')
      .to(".category", { xPercent: -200, position: "relative", zIndex: "3" }, '.landingTransition')
      .to(".categorieslist", { xPercent: -300, position: "relative", zIndex: "4" }, '.category')
      .to(".philosophyPage", { xPercent: -400, position: "relative", zIndex: "5" })

    ScrollTrigger.create({
      animation: t1,
      trigger: ".container1",
      start: "top top",
      scrub: 0,
      snap: 1 / (4),
      pin: true,
      anticipatePin: 1,
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
      <section className={`landingpage`}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 1} handleNav={() => handleNav(1)} />
        <LandingPage />
      </section>
      <section className={`landingTransition `}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 2} handleNav={() => handleNav(2)} />
        <LandingTransition />
      </section>
      <section className={`category`}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 3} handleNav={() => handleNav(3)} />
        <Category />
      </section>
      <section className={`categorieslist`}>
        <Header navTheme={"bg-[#E3FF00]"} toggleNav={activeNav === 4} handleNav={() => handleNav(4)} />
        <CategoriesList />
      </section>
      <section className={`philosophyPage`}>
        <Header navTheme={"bg-primary text-white"} toggleNav={activeNav === 5} handleNav={() => handleNav(5)} />
        <PhilosophyPage />
      </section>
    </div>
  );
}
