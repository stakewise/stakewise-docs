import React, { useState } from 'react';
import './Tooltip.css';

interface TooltipProps {
  children: React.ReactNode;
  definition: string;
  className?: string;
}

export default function Tooltip({ children, definition, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className={`tooltip-container ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="tooltip-trigger">
        {children}
      </span>
      {isVisible && (
        <span className="tooltip-content">
          {definition}
        </span>
      )}
    </span>
  );
}