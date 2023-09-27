"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Use next/router instead of next/navigation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Login from "./login/page";
import Register from "./register/page";
import LandingPage from "./landingPage/page";
import LandingTransition from "./landingPageTransition/page";
import Category from "./categories/page";
import CategoriesList from "./categoriesList/page";
import PhilosophyPage from './philosophy/page';

gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ ease: "slow", duration: 2 });

export default function Home() {
  const router = useRouter(); // Initialize the router hook

  useEffect(() => {
    const container1 = document.querySelector(
      ".container1"
    ) as HTMLElement | null;

    const landingImage = document.getElementById("landing-logo");
    let sections = gsap.utils.toArray(".landing-logo");
    console.log("JE", landingImage);
    
    if (sections) {
      gsap.to(sections, {
        scale: 0.50, // Adjust the scale value as needed
        yPercent: 100,
        scrollTrigger: {
          trigger: container1,
          start: "top top", // When to start the zoom-out
          // end: "+=4000", // When to end the zoom-out
          // markers: true,
          scrub: 1, // Smooth scrolling effect
        },
      });
    }

    const endValue = container1 ? "+=" + container1.offsetWidth : "+=0";
    const t1 = gsap.timeline();
    t1
      .to(".landingTransition", { xPercent: -100 }, '<')
      .to(".register", { xPercent: -200 }, '.landingTransition')
      .to(".login", { xPercent: -300 }, '.register')
      .to(".category", { xPercent: -400 }, '.login')
      .to(".categorieslist", { xPercent: -500 }, '.category')


    ScrollTrigger.create({
      animation: t1,
      trigger: ".container1",
      start: "top top",
      // end: "+=4000",
      scrub: 1,
      snap: 1 / (6),
      pin: true,
      // markers: true,
      anticipatePin: 1,
    });


  }, [router]); // Include router in the dependency array to ensure it's available in the effect

  return (
    <div className="container1" style={{ display: "flex" }}>
      <section className="landingpage">
        <LandingPage />
      </section>
      <section className="landingTransition">
        <LandingTransition />
      </section>
      <section className="register">
        <Register />
      </section>
      <section className="login">
        <Login />
      </section>
      <section className="category">
        <Category />
      </section>
      <section className="categorieslist">
        <CategoriesList />
      </section>
      <section className="item1">
        <PhilosophyPage />
      </section>
      {/* <section className="item1">
        <Register />
      </section>
      <section className="item1">
        <Login />
      </section> */}

    </div>
  );
}