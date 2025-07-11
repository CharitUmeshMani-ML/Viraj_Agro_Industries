
import React from 'react';

interface IconProps {
  className?: string;
}

export const VirajAgroIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    aria-label="Viraj Agro Services Logo"
    fill="none"
  >
    {/* Outer Orange Circle */}
    <circle cx="50" cy="50" r="45" stroke="#f57c00" strokeWidth="5" />
    
    {/* Green Fields */}
    <path d="M15 80 C 35 65, 65 65, 85 80" stroke="#1b5e20" strokeWidth="5" strokeLinecap="round" />
    <path d="M18 72 C 38 57, 62 57, 82 72" stroke="#1b5e20" strokeWidth="5" strokeLinecap="round" />
    <path d="M21 64 C 41 49, 59 49, 79 64" stroke="#1b5e20" strokeWidth="5" strokeLinecap="round" />
    
    {/* Green Leaves */}
    <path d="M42 58 C 42 43, 50 38, 50 28" stroke="#1b5e20" strokeWidth="5" strokeLinecap="round" />
    <path d="M58 58 C 58 43, 50 38, 50 28" stroke="#1b5e20" strokeWidth="5" strokeLinecap="round" />

    {/* Sun */}
    <path d="M40 38 A 12 12 0 0 1 60 38" stroke="#f57c00" strokeWidth="5" strokeLinecap="round" />
    {/* Sun Rays */}
    <path d="M50 24 L 50 19" stroke="#f57c00" strokeWidth="5" strokeLinecap="round" />
    <path d="M37 28 L 33 24" stroke="#f57c00" strokeWidth="5" strokeLinecap="round" />
    <path d="M63 28 L 67 24" stroke="#f57c00" strokeWidth="5" strokeLinecap="round" />
  </svg>
);
