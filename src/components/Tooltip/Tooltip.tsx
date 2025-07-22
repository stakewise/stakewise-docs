import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

interface TooltipProps {
  children: React.ReactNode;
  definition: string;
  className?: string;
}

export default function Tooltip({ children, definition, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node;

    if (containerRef.current && !containerRef.current.contains(relatedTarget)) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 150);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className={`tooltip-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="tooltip-trigger">
        {children}
      </span>
      {isVisible && (
        <div className="tooltip-content">
          {definition}
        </div>
      )}
    </span>
  );
}
