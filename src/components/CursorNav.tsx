import { useEffect, useState, useCallback } from "react";

type Direction = "left" | "right" | "up" | "down" | null;

interface CursorNavProps {
  onNavigate: (direction: "left" | "right" | "up" | "down") => void;
  canGo?: { up: boolean; down: boolean; left: boolean; right: boolean };
}

const EDGE = 0.22;

const CursorNav = ({ onNavigate, canGo = { up: true, down: true, left: true, right: true } }: CursorNavProps) => {
  const [direction, setDirection] = useState<Direction>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
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
    if (direction && canGo[direction]) onNavigate(direction);
  }, [direction, onNavigate, canGo]);

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

  const rotation = direction
    ? { right: 0, down: 90, left: 180, up: 270 }[direction]
    : 0;

  // Hide arrow if can't go in that direction
  const showArrow = direction && canGo[direction];

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ cursor: "none" }}
    >
      {visible && (
        <div
          className="fixed pointer-events-none transition-opacity duration-150"
          style={{
            left: pos.x,
            top: pos.y,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            opacity: showArrow ? 0.7 : 0,
          }}
        >
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline
              points="35,25 65,50 35,75"
              stroke="hsl(82 72% 52%)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CursorNav;
