
import React from 'react';

interface IconProps {
  className?: string;
}

export const BasketIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5l-1.5 9H5.25l-1.5-9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75V5.25a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25v1.5"
    />
  </svg>
);
