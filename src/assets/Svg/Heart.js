import { useState } from "react";

export default function Heart({ style, }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
  return (
    <svg
    onClick={() => setIsClicked(!isClicked)}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    fill={
      isClicked
        ? 'pink' // If clicked, fill with gray
        : isHovered
        ? 'pink' // If hovered (but not clicked), fill with gray
        : 'none' // Default: not clicked and not hovered, fill with none
    }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${style}  w-6 h-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}
