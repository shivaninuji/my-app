"use client";
import React from "react";
import { useCursorTrail } from "@/utility/useCursorTrail";
 // Adjust the path as needed

type CursorTrailComponentProps = {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

const CursorTrailComponent: React.FC<CursorTrailComponentProps> = ({
  color,
  className,
  style
}) => {
  const canvasRef = useCursorTrail(color);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: "none",
        ...style
      }}
    />
  );
};

export default CursorTrailComponent;