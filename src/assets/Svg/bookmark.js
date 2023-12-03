import { useState } from "react";

export default function Bookmark({ style }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <svg
      onClick={() => setIsClicked(!isClicked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      xmlns="http://www.w3.org/2000/svg"
      fill={
        isClicked
          ? 'gray' // If clicked, fill with gray
          : isHovered
          ? 'gray' // If hovered (but not clicked), fill with gray
          : 'none' // Default: not clicked and not hovered, fill with none
      }
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${style} w-6 h-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  );
}
