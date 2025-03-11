"use client";

import React from "react";
import Image from "next/image";
import "../styles/Resume.css";
import { useIsMobile } from "../hooks/use-mobile";
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
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function Resume() {
  const isMobile = useIsMobile();
  
  const skills = [
    { name: "C#", icon: <SiSharp /> },
    { name: "Python", icon: <SiPython /> },
    {
      name: "NinjaTrader",
      icon: (
        <img
          src="/svg/ninjatrader.svg"
          alt="NinjaTrader"
          className="skill-icon"
        />
      ),
    },
    { name: "Godot", icon: <SiGodotengine /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Xcode", icon: <SiXcode /> },
    {
      name: "Ultralytics",
      icon: (
        <img
          src="/svg/Ultralytics.svg"
          alt="Ultralytics"
          className="skill-icon"
        />
      ),
    },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
  ];

  return (
    <div id="resume" className="w-full min-h-screen flex justify-center bg-gray-100 py-10">
      <div
        className={`max-w-5xl w-full shadow-xl rounded-lg overflow-hidden ${
          isMobile ? "flex-col" : "flex"
        }`}
      >
        {/* Left Section */}
        <div
          className={`${
            isMobile ? "w-full" : "w-[30%]"
            } bg-blue-950 text-white p-4 flex flex-col space-y-8 text-left`}
        >
          {/* Top Section: Picture, Name, Role and Additional Details */}
          <div>
            <div className="relative w-32 h-32 mb-2">
              <Image
                src="/images/aviram.jpg"
                alt="Aviram Yagena"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-[2.88rem] font-semibold">
              Aviram Yagena
            </h1>
            <h2 className="text-[1.26rem] font-semibold">
              Software Developer
            </h2>
            <p>Givat Ze'ev, Israel</p>
            <p>+972523907654</p>
            <p>1995</p>
            <p>aviramyagena@gmail.com</p>
            <div className="border-t border-white/50 w-full mt-2 p-2"></div>
            <div className="flex space-x-4 mt-1">
              <a href="https://aviramyagena.github.io" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/aviram-yagena-84942b23b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://github.com/AviramYagena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-4xl" />
              </a>
              <a
                href="mailto:aviramyagena@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-4xl " />
              </a>
            </div>
          </div>

          {/* Middle Section: Skills */}
          <div>
            <div className="border-t border-white/50 w-full "></div>
            <h3 className="text-[1.62rem] font-semibold p-2">Skills</h3>
            <div className="grid grid-cols-2 gap-4 p-2">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Languages */}
          <div>
            <div className="border-t border-white/50 w-full"></div>
            <h3 className="text-[1.62rem] font-semibold p-2">Languages</h3>
            <ul className="text-sm p-2">
              <li>• Hebrew (Native)</li>
              <li>• English (Fluent)</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className={`${isMobile ? "w-full" : "w-[70%]"} bg-gray-100 p-10 text-black`}>
          <h2 className="text-[2.4rem] font-bold text-gray-800 mb-4">
            Experience
          </h2>

          {/* AI-Driven Development & Automation */}
          <div className="mb-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <p className="text-sm font-bold text-gray-700">2024-Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">
                  AI-Driven Development & Automation
                </h4>
                <p className="text-sm">Independent AI Developer</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>
                    Developed StageEye alongside another developer, a Python-based facial recognition system leveraging YOLO, optimized for live stage performances.
                  </li>
                  <li>
                    Trained custom facial recognition models, achieving high reliability and accuracy across diverse individuals.
                  </li>
                  <li>
                    Integrated AI-generated positional data with automated lighting control systems via DMX protocols.
                  </li>
                  <li>
                    Seamlessly combined AI technology with stage hardware, enhancing the quality and precision of live performance production.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RiskMaster */}
          <div className="mb-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <p className="text-sm font-bold text-gray-700">2024-Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">
                  RiskMaster (NinjaTrader 8 Risk Management Tool)
                </h4>
                <p className="text-sm">Creator & Lead Developer</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>
                    Conceptualized, developed, and maintained RiskMaster, a comprehensive risk management tool integrated into NinjaTrader 8 using C# and NinjaScript API.
                  </li>
                  <li>
                    Designed advanced features for automated risk management, including daily thresholds, customizable trading rules, and real-time account management.
                  </li>
                  <li>
                    Developed a fully custom licensing solution, complete with front-end and back-end systems, including a dedicated website built from scratch.
                  </li>
                  <li>
                    Implemented an extensive support system featuring automated email responses, a ticketing system, and a comprehensive logging infrastructure.
                  </li>
                  <li>
                    Built client-server communications using PHP, with database management through phpMyAdmin.
                  </li>
                  <li>
                    Created intuitive UI/UX with customizable user profiles, dynamic rollover settings, and structured management tabs (Rules, Profiles, Accounts).
                  </li>
                  <li>
                    Provided extensive documentation, user guides, and instructional videos, ensuring straightforward installation and user adoption.
                  </li>
                  <li>
                    Transitioned RiskMaster from a premium service to a freely available resource, actively contributing to the trading community.
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-gray-700">
                  Relevant Technologies & Libraries:
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Styled-components</li>
                  <li>React Router DOM</li>
                  <li>Axios</li>
                  <li>Framer Motion</li>
                  <li>JWT-decode</li>
                  <li>React Helmet Async</li>
                  <li>React Icons</li>
                  <li>React Intersection Observer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Algorithmic Trading Development */}
          <div className="mb-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <p className="text-sm font-bold text-gray-700">2023-2024</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">
                  Algorithmic Trading Development
                </h4>
                <p className="text-sm">Independent Developer</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>
                    Engineered automated trading strategies using NinjaTrader's Unmanaged Approach with precise real-time order and position management.
                  </li>
                  <li>
                    Implemented sophisticated order handling mechanisms, including advanced OCO (One-Cancels-the-Other) logic for optimal trading execution and risk mitigation.
                  </li>
                  <li>
                    Developed custom interfaces linking NinjaScript and Python to automate real-time trade data updates directly to Google Sheets.
                  </li>
                  <li>
                    Successfully developed and optimized over seven trading strategies, consistently achieving an 80%+ success rate.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Automated Strategy Backtesting System */}
          <div className="mb-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <p className="text-sm font-bold text-gray-700">2023-2024</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">
                  Automated Strategy Backtesting System
                </h4>
                <p className="text-sm">Independent Developer</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>
                    Built an advanced Python-based backtesting system capable of autonomously improving trading strategies via iterative data analysis and optimization.
                  </li>
                  <li>
                    Leveraged historical price action and indicator patterns, segmenting collected trading data for precise strategy refinement.
                  </li>
                  <li>
                    Implemented iterative optimization algorithms, continuously refining strategy parameters to achieve predefined success metrics.
                  </li>
                  <li>
                    Integrated high-performance computing techniques including parallel processing and vectorized calculations for efficient data handling and rapid iterations.
                  </li>
                  <li>
                    Designed flexible architecture facilitating future AI enhancements through parameter weighting and AI-driven pattern analysis.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Godot Game Development & Design */}
          <div className="mb-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <p className="text-sm font-bold text-gray-700">2019-2023</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">
                  Godot Game Development & Design
                </h4>
                <p className="text-sm">Lead Developer & Game Designer</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>
                    Led end-to-end development and design of multiple game projects using the Godot Engine.
                  </li>
                  <li>
                    Managed all aspects of game design including storytelling, world-building, unique gameplay mechanics, puzzles, currency systems, and detailed level creation.
                  </li>
                  <li>
                    Directed small teams (1–3 members per project), overseeing project timelines, task management, debugging processes, and iterative testing via Trello.
                  </li>
                  <li>
                    Successfully completed four game projects: one substantial release, one vertical slice, and two promotional games.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
