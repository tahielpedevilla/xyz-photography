import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";

export function CustomCursor() {
  const cursorRef = useRef(null);
  const [progress, setProgress] = useState<number>(100);

  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = cursorRef.current;

    if (isTouchDevice || !cursor) {
      return;
    }

    window.addEventListener("mousemove", (e) => {
      const { target, x, y }: any = e;

      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");

      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0.8 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 1.2 : 1})`,
      });
    });

    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, []);

  const calculateDashArray = (progress: number): string => {
    const circumference = 2 * Math.PI * 42;
    const progressRatio = progress / 100;
    const dashLength = circumference * progressRatio;
    const spaceLength = circumference - dashLength;
    return `${dashLength} ${spaceLength}`;
  };

  return (
    <Cursor
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={progress}
      ref={cursorRef}
    >
      <svg viewBox="0 0 100 100">
        <ProgressTrack cx="50" cy="50" r="42" strokeWidth="1px" />
        <ProgressIndicator
          cx="50"
          cy="50"
          r="42"
          strokeWidth="1px"
          strokeDashoffset="66"
          strokeDasharray={calculateDashArray(progress)}
        />
      </svg>
      <CursorDot />
    </Cursor>
  );
}

const Cursor = styled.div`
  position: fixed;
  top: -16px;
  left: -16px;
  width: 42px;
  height: 42px;
  z-index: 9999;
  user-select: none;
  pointer-events: none;
  opacity: 0;
  display: inline-block;
  vertical-align: middle;

  & svg {
    width: 42px;
    height: 42px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ProgressTrack = styled.circle`
  fill: transparent;
  stroke: rgba(255, 255, 255, 0.1);
`;

const ProgressIndicator = styled.circle`
  fill: transparent;
  stroke: #ffffff;
  transition-property: stroke-dasharray, stroke;
  transition-duration: 0.6s;
  transition-timing-function: ease;
`;

const CursorDot = styled.div`
  width: 4px;
  height: 4px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
`;
