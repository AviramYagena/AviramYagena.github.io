"use client";

import React, { useEffect } from "react";
import { GlassButton } from "./ui/GlassButton"; 
import { ScrambleRole } from "./ui/ScrambleRole"; 

export function Hero() {
  // Replicate the interactive bubble behavior
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive");
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Helper function for smooth scrolling to a section by its id
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* ~~~~~ BUBBLES BACKGROUND ~~~~~ */}
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>

      {/* ~~~~~ HERO TEXT ~~~~~ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center text-white px-2 animate-fade-in-up"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Aviram Yagena
        </h1>

        <p
          className="mt-4 text-2xl sm:text-4xl md:text-5xl text-white animate-fade-in-up animation-delay-400 min-h-[2rem] px-2 text-center"
        >
          <ScrambleRole />
        </p>

        {/* ~~~~~ GLASS BUTTONS ~~~~~ */}
        <div
          className="mt-8 animate-fade-in-up animation-delay-800 flex flex-wrap items-center justify-center gap-4 px-2 absolute bottom-16 pointer-events-auto"
        >
          <GlassButton
            label="Projects"
            onClick={() => handleScrollTo("projects")}
            fontWeight="bold"
            textColor="#ffffff"
          />
          <GlassButton
            label="Experience"
            onClick={() => handleScrollTo("experience")}
            fontWeight="bold"
            textColor="#ffffff"
          />
          <GlassButton
            label="Resume"
            onClick={() => handleScrollTo("resume")}
            fontWeight="bold"
            textColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
}
