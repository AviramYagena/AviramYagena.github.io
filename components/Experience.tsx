"use client";

import React from "react";
import {
  SiGodotengine,
  SiSharp,
  SiPython,
  SiAndroidstudio,
  SiXcode,
  SiPhpmyadmin,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";
import "../styles/Experience.css";

/**
 * Experience component for the portfolio website.
 * Displays a grid of technology icons with a wing-effect pulsating animation,
 * overlaid on the animated bubbles background.
 */
export function Experience() {
  const experiences = [
    { name: "C#", icon: <SiSharp /> },
    { name: "Python", icon: <SiPython /> },
    {
      name: "NinjaTrader",
      // Custom image for NinjaTrader – ensure /ninjatrader.svg exists in your public folder.
      icon: <img src="/svg/ninjatrader.svg" alt="" />,
    },
    { name: "Godot", icon: <SiGodotengine /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Xcode", icon: <SiXcode /> },
    {
      name: "Ultralytics",
      // Custom image for NinjaTrader – ensure /ninjatrader.svg exists in your public folder.
      icon: <img src="/svg/Ultralytics.svg" alt="" />,
    },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
  ];

  const total = experiences.length;
  const delayFactorMs = 200; // Delay factor in milliseconds

  return (
    <section id="experience" className="relative py-20 bg-[#001e3c] overflow-hidden">
      {/* Bubbles Background */}
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
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, idx) => {
            // Calculate delay based on the icon's position from the edges
            const pairIndex = Math.min(idx, total - 1 - idx);
            return (
              <div key={idx} className="experience-item">
                <div
                  className="experience-icon"
                  style={{ "--icon-delay": `${pairIndex * delayFactorMs}ms` } as React.CSSProperties}
                >
                  {exp.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
