import React, { useRef, useEffect } from 'react';
import Head from 'next/head';

const AutoScrollFooter = () => {
  const tickerRef = useRef<HTMLDivElement | null>(null); // Specify the type explicitly

  useEffect(() => {
    const tickerElement = tickerRef.current;

    if (!tickerElement) return;

    const startScroll = () => {
      tickerElement.style.animation = 'scrollTicker 20s linear infinite';
    };

    const stopScroll = () => {
      tickerElement.style.animation = 'none';
      setTimeout(startScroll, 10); // Restart the animation after a brief delay
    };

    startScroll();

    return () => {
      stopScroll();
    };
  }, []);

  return (
    <div className="stb_line_single relative whitespace-no-wrap p-0 flex flex-row overflow-hidden" ref={tickerRef}>
      {/* ... your anchor elements */}
	    <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 1&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 2&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 3&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 4&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 5&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 6&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 7&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 8&nbsp; &nbsp; - </span>
      </a>
      <a href="#" className="stb-item p-0 text-6xl inline-block mr-20 text-blue-500 font-normal no-underline">
        <span>Simple 9&nbsp; &nbsp; - &nbsp; &nbsp;</span>
      </a>
    </div>
  );
};

export default AutoScrollFooter;
