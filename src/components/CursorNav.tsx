import { useEffect, useState, useCallback } from "react";

type Direction = "left" | "right" | "up" | "down" | null;

interface CursorNavProps {
  onNavigate: (direction: "left" | "right" | "up" | "down") => void;
}

const EDGE = 0.18; // 18% from each edge

const CursorNav = ({ onNavigate }: CursorNavProps) => {
  const [direction, setDirection] = useState<Direction>(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  const handleMove = useCallback((e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setPos({ x: e.clientX, y: e.clientY });
    setVisible(true);

    if (x < EDGE) setDirection("left");
    else if (x > 1 - EDGE) setDirection("right");
    else if (y < EDGE) setDirection("up");
    else if (y > 1 - EDGE) setDirection("down");
    else setDirection(null);
  }, []);

  const handleClick = useCallback(() => {
    if (direction) onNavigate(direction);
  }, [direction, onNavigate]);

  const handleLeave = useCallback(() => {
    setVisible(false);
    setDirection(null);
  }, []);

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

  if (!visible || !direction) return null;

  const rotation = {
    left: 180,
    right: 0,
    up: -90,
    down: 90,
  }[direction];

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      {/* Large arrow SVG */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <path
          d="M12 32 L44 16 L38 30 L52 30 L52 34 L38 34 L44 48 Z"
          fill="hsl(82 72% 52%)"
          fillOpacity="0.85"
        />
      </svg>
    </div>
  );
};

export default CursorNav;
