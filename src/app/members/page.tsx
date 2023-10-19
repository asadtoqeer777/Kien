"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../__components/header/Header";
import TeamMembers from "../teamMembers/page";
import MembersPage from "../member/page";
import Connect from "../connect/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState(1);

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
        end: "+=3000",
        // end: "+=" + sections.length * 11000,
        onUpdate: (self) => {
          // Calculate the activeNav based on the scroll position
          const scrollPercent = self.progress * 100;
          console.log("scrollPercent", scrollPercent);
          const teamMembersScroll = document.querySelector(
            ".teamsScroll"
          ) as HTMLElement | null;
          const teamMembersScroll2 = document.querySelector(
            ".teamsScroll2"
          ) as HTMLElement | null;

          if(scrollPercent >= 33.50){
            if(teamMembersScroll && teamMembersScroll2){
              teamMembersScroll.style.overflow = "scroll"
              teamMembersScroll2.style.overflow = "scroll"
            }
            setActiveSlide(3)
          }else{
            if(teamMembersScroll && teamMembersScroll2){
              teamMembersScroll.style.overflow = "hidden"
              teamMembersScroll2.style.overflow = "hidden"
            }
            setActiveSlide(0)
          }

          if(scrollPercent >= 55){
            setSelectedTab(2)
          }else{
            setSelectedTab(1)
          }
          
        },
      },
    });

    stops.forEach((stop, index) => {
      const currentSection = sections[stop] as HTMLElement; // Use type assertion
      const q = gsap.utils.selector(currentSection);
      console.log("stop", stop, index);

      tl.to(sections, {
        xPercent: -(100 * stop),
        duration: stop,
      });
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

  return (
    <div className="">
      <Header navTheme={activeSlide === 0 ? "bg-[#E3FF00]" : activeSlide === 1 ? "bg-black text-white": activeSlide === 3 ? "bg-white text-black": "bg-[#E3FF00]" } navBorArrow={activeSlide === 0 ? false : true}/>
      <div className="mainans " id="smooth-wrapper">
        <div className="MainContainer" id="smooth-content">
          <section className={`panel MembersPage`} data-pin="true">
            <MembersPage setState={setActiveSlide}/>
          </section>
          <section className={`panel TeamMembers`} data-pin="true">
            <TeamMembers selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
          </section>
        </div>
      </div>
    </div>
  );
}
