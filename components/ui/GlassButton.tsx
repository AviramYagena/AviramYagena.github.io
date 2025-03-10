"use client";

import React from "react";
import "@/styles/GlassButton.css";

/**
 * A reusable Glass Button component.
 * Props:
 *   label: The text displayed inside the button.
 *   onClick (optional): Function to handle clicks.
 *   textColor (optional): Custom text color for this button.
 *   fontWeight (optional): Custom font weight (e.g., "bold", "600") for the button text.
 */
interface GlassButtonProps {
  label: string;
  onClick?: () => void;
  textColor?: string;
  fontWeight?: string;
}

export function GlassButton({ label, onClick, textColor, fontWeight }: GlassButtonProps) {
  // Merge custom properties for text color and font weight.
  const style = {
    ...(textColor ? { "--btn-text-color": textColor } : {}),
    ...(fontWeight ? { "--btn-font-weight": fontWeight } : {}),
  } as React.CSSProperties;

  return (
    <div className="button-wrap">
      <button className="glass-btn" onClick={onClick} style={style}>
        <span>{label}</span>
      </button>
      <div className="button-shadow"></div>
    </div>
  );
}
