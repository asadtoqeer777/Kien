import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Accordion = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.container',
          scrub: 0.01,
          start: 'top top',
          end: '+=15000', // Adjust this to your desired trigger range
          markers: true,
          pin: true,
        },
      })
      .to('.region', {
        height: '150px', // Set the height to 'max' to equalize heights
        duration: 1,
        ease: 'sine',
        stagger: 5, // Adjust as needed
      });
  }, []);

  return (
    <div className='container'>
      <div className='container_text'>
        <div className='accordion'>
          <h1>Top Comment</h1>
          <div role='region' className='region bg-[red]'>
            <p>Down Comment</p>
          </div>
        </div>
        <div className='accordion'>
          <h1>Top Comment</h1>
          <div role='region' className='region bg-[green]'>
            <p>Down Comment</p>
          </div>
        </div>
        <div className='accordion'>
          <h1>Top Comment</h1>
          <div role='region' className='region bg-[blue]'>
            <p>Down Comment</p>
          </div>
        </div>
        <div className='accordion'>
          <h1>Top Comment</h1>
          <div role='region' className='region bg-[yellow]'>
            <p>Down Comment</p>
          </div>
        </div>
        <div className='accordion'>
          <h1>Top Comment</h1>
          <div role='region' className='region bg-[aqua]'>
            <p>Down Comment</p>
          </div>
        </div>
      </div>
      <div className='container_image'></div>
    </div>
  );
};

export default Accordion;
