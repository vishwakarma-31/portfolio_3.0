"use client";
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      gsap.to(cursorRef.current, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleHover = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    gsap.to(cursorRef.current, {
      scale: isHovering ? 3 : 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [isHovering]);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ 
        opacity: 0.8
      }}
    />
  );
};

export default CustomCursor;
