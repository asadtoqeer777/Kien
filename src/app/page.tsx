'use client'
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

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

export default function Home() {
  const router = useRouter(); // Initialize the router hook

  useEffect(() => {
    let sections = gsap.utils.toArray(".item1");
    const container1 = document.querySelector(
      ".container1"
    ) as HTMLElement | null;
    const endValue = container1 ? "+=" + container1.offsetWidth : "+=0";

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container1",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: endValue,
        onLeave: () => {
          // This function will be called when the "Register" section is left
          // router.push('/login'); // Change the route to /register
        },
      },
    });

    // Zoom-out effect for the landing page image
    const landingImage = document.getElementById("landing-logo");
    if (landingImage) {
      gsap.to(landingImage, {
        scale: 0.25, // Adjust the scale value as needed
        scrollTrigger: {
          trigger: landingImage,
          start: "center center", // When to start the zoom-out
          end: "bottom center", // When to end the zoom-out
          scrub: 1, // Smooth scrolling effect
        },
      });
    }
  }, [router]); // Include router in the dependency array to ensure it's available in the effect

  return (
    <div className="container1" style={{ display: "flex" }}>
      <section className="item1" id='landing-logo'>
        <LandingPage />
      </section>
      <section className="item1">
        <LandingTransition />
      </section>
      <section className="item1">
        <Register />
      </section>
      <section className="item1">
        <Login />
      </section>
      <section className="item1">
        <Category />
      </section>
      <section className="item1">
        <CategoriesList />
      </section>
    </div>
  );
}
