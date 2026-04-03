import { useEffect, useState, useCallback } from "react";

type Direction = "left" | "right" | "up" | "down" | null;

interface CursorNavProps {
  onNavigate: (direction: "left" | "right" | "up" | "down") => void;
  canGo?: { up: boolean; down: boolean; left: boolean; right: boolean };
}

const EDGE = 0.20;

const CursorNav = ({ onNavigate, canGo = { up: true, down: true, left: true, right: true } }: CursorNavProps) => {
  const [direction, setDirection] = useState<Direction>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const handleMove = useCallback((e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setPos({ x: e.clientX, y: e.clientY });
    setVisible(true);

    // Exclude right nav zone (right 80px, middle vertical band)
    const inNavZone = e.clientX > window.innerWidth - 80 && y > 0.2 && y < 0.8;

    if (inNavZone) setDirection(null);
    else if (x < EDGE) setDirection("left");
    else if (x > 1 - EDGE) setDirection("right");
    else setDirection(null);
  }, []);

  const handleClick = useCallback(() => {
    if (direction && canGo[direction]) {
      setClicking(true);
      onNavigate(direction);
      setTimeout(() => setClicking(false), 200);
    }
  }, [direction, onNavigate, canGo]);

  const handleLeave = useCallback(() => {
    setVisible(false);
    setDirection(null);
  }, []);

  const showArrow = direction && canGo[direction];

  // Toggle cursor:none on body based on whether arrow is showing
  useEffect(() => {
    if (showArrow) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "";
    }
    return () => { document.body.style.cursor = ""; };
  }, [showArrow]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [handleMove, handleClick, handleLeave]);

  const isLeft = direction === "left";

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {visible && showArrow && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: pos.x,
            top: pos.y,
            transform: `translate(-50%, -50%) scale(${clicking ? 0.85 : 1})`,
            transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.15s ease",
            opacity: clicking ? 1 : 0.85,
          }}
        >
          {/* Subtle glow behind arrow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
              width: 64,
              height: 64,
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
          />
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.3))",
              transform: isLeft ? "scaleX(-1)" : undefined,
            }}
          >
            <path
              d="M9 5l7 7-7 7"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CursorNav;
