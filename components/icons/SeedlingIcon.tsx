
import React from 'react';

interface IconProps {
  className?: string;
}

export const SeedlingIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L12 12" />
    <path d="M12 12L8 16" />
    <path d="M12 12L16 16" />
    <path d="M12 12C12 12 10 10 8 10C6 10 4 12 4 14C4 16 6 18 8 18C10 18 12 16 12 16" />
    <path d="M12 12C12 12 14 10 16 10C18 10 20 12 20 14C20 16 18 18 16 18C14 18 12 16 12 16" />
    <path d="M4 22L20 22" />
  </svg>
);
