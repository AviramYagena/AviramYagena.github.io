"use client";

import React, { useEffect, useRef } from "react";

// TextScramble class adapted from the provided effect with property initializers
class TextScramble {
  el: HTMLElement;
  chars: string = "!<>-_\\/[]{}—=+*^?#________";
  queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> = [];
  frame: number = 0;
  frameRequest: number = 0;
  resolve?: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve && this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

export function ScrambleRole() {
  const roles = [
    "AI & Automation Developer",
    "Algorithmic Trading Specialist",
    "Risk Management Systems Architect",
    "Game Developer & Designer",
  ];

  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const fx = new TextScramble(textRef.current);
    let counter = 0;
    const next = () => {
      fx.setText(roles[counter]).then(() => {
        setTimeout(() => {
          counter = (counter + 1) % roles.length;
          next();
        }, 2000);
      });
    };
    next();
  }, []);

  return <span ref={textRef}></span>;
}
