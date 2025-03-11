"use client";

import React from "react";
import { GlassButton } from "./ui/GlassButton";
import "@/styles/ProjectsCards.css";

/**
 * Projects component for the portfolio website.
 * Displays two sections: one for projects and another for game development.
 */
export function Projects() {
  // --------------- "Projects" Data (with images) ---------------
  const projectsData = [
    {
      title: "RiskMaster",
      description:
        "Advanced risk management tool for NinjaTrader, providing real-time protection through customizable profiles and risk thresholds.",
      features: [
        "Free",
        "60+ active users",
        "Automated emailing and ticketing system",
        "Custom licensing implementation",
      ],
      image: "/images/RiskMaster.jpg",
      link: "https://aviramyagena.itch.io/riskmaster",
    },
    {
      title: "Automated Strategy Backtesting System",
      description:
        "A Python-based backtesting system that autonomously refines trading strategies through iterative analysis, optimization algorithms, and high-performance computing.",
      features: [
        "Autonomous iterative analysis",
        "Segmentation of historical price action & indicators",
        "Continuous parameter optimization",
        "Parallel processing & vectorized calculations",
        "Flexible, AI-ready architecture",
      ],
      image: "/images/automated_backtester.jpg",
      link: "",
    },
    {
      title: "Order Management System",
      description:
        "A robust system for NinjaTrader's Unmanaged Approach that seamlessly handles orders, maintains positions, and updates trade data in real time.",
      features: [
        "Advanced OCO logic for optimal execution and risk mitigation",
        "Custom NinjaScript–Python interfaces for live Google Sheets updates",
        "Full real-time order and position management",
        "Proven performance with high-success trading strategies",
        "Rigorous pre-market and live testing ensuring profitability",
      ],
      image: "/images/Order_Management_System.jpg",
      link: "https://ninjatrader.com/support/helpguides/nt8/NT%20HelpGuide%20English.html?unmanaged_approach.htm",
    },
    {
      title: "AI Interactive Game",
      description:
        "Ongoing development of an AI-driven interactive game using computer vision libraries and advanced AI models with TouchDesigner.",
      features: [
        "Utilizes OpenCV and YOLOv8",
        "Integration with TouchDesigner for real-time visuals",
        "Real-time object and person tracking",
        "AI-ready for advanced interactions",
      ],
      image: "/images/AI_Interactive_Game.jpg",
      link: "",
    },
  ];

  // --------------- Game Dev Data (with images) ---------------
  const gameDevData = [
    {
      title: "Bullet Express",
      description:
        "A full-fledged rogue-lite with six unique guns that can be merged to create 30 hand-crafted guns. Worked as a game designer and project manager.",
      image: "/images/bullet_express.jpg",
      link: "https://www.youtube.com/watch?v=jJcqJ_2C-BI",
    },
    {
      title: "Joe Rogan's Planet Annihilation",
      description:
        "Intergalactic Hack ‘n’ Slash Thriller is a fast-paced parody blending action, celebrity personas, and dystopian sci-fi. Play as Joe Rogan and legendary fighters battling robotic overlords from planet Modoror, featuring Mike Tyson, Elon Musk, and more.",
      image: "/images/joe_rogan_planet_annihilation.jpg",
      link: "https://www.youtube.com/watch?v=roawB1syvhY",
    },
    {
      title: "Pita King",
      description:
        "A proof-of-concept game inspired by the classic 'Falafel King'. Serve up pitas and keep your customers happy in this quirky restaurant management game!",
      image: "/images/pita_king.jpg",
      link: "https://www.youtube.com/watch?v=edX-4d6qT2M",
    },
    {
      title: "Slot Machine Promotional Game",
      description:
        "A promotional slot machine proof-of-concept for Tanqueray. Spin the reels in this fun, fast-paced arcade-style showcase game.",
      image: "/images/slot_machine.jpg",
      link: "https://www.youtube.com/watch?v=KFpg4KQfxpI",
    },
  ];

  // Helper function to open links in a new tab.
  const handleButtonClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="border-t border-gray-200 bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* -------------- Projects Section -------------- */}
        <h2 className="mb-12 text-center text-4xl font-bold text-black">Projects</h2>
        <div className="page-content">
          {projectsData.map((proj, i) => (
            <div
              key={i}
              className="card"
              style={
                {
                  "--bg-image": proj.image ? `url(${proj.image})` : undefined,
                } as React.CSSProperties
              }
            >
              <div className="content">
                <h3 className="title">{proj.title}</h3>
                <p className="copy">{proj.description}</p>
                {proj.features?.length > 0 && (
                  <ul style={{ textAlign: "left", marginTop: "0.5rem" }}>
                    {proj.features.map((feature, idx) => (
                      <li key={idx} style={{ fontSize: "0.9rem" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {proj.link && proj.link.trim() !== "" && (
                  <GlassButton
                    label="Learn More"
                    onClick={() => handleButtonClick(proj.link)}
                    textColor="#ffffff"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* -------------- Game Dev Showcase -------------- */}
        <h2 className="mt-16 mb-6 text-center text-3xl sm:text-4xl font-bold text-black">
          Game Development Showcase
        </h2>
        <div className="page-content">
          {gameDevData.map((game, i) => (
            <div
              key={i}
              className="card"
              style={
                {
                  "--bg-image": game.image ? `url(${game.image})` : undefined,
                } as React.CSSProperties
              }
            >
              <div className="content">
                <h3 className="title">{game.title}</h3>
                <p className="copy">{game.description}</p>
                {game.link && game.link.trim() !== "" && (
                  <GlassButton
                    label="Watch"
                    onClick={() => handleButtonClick(game.link)}
                    textColor="#ffffff"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
