"use client";
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleFirstMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      window.removeEventListener('mousemove', handleFirstMove);
    };
    
    window.addEventListener('mousemove', handleFirstMove);
    return () => window.removeEventListener('mousemove', handleFirstMove);
  }, []);

  useEffect(() => {
    if (!isVisible || isTouchDevice || !cursorRef.current) return;

    gsap.set(cursorRef.current, {
      x: posRef.current.x - 8,
      y: posRef.current.y - 8,
    });

    const handleMouseMove = (e: MouseEvent) => {
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
  }, [isVisible, isTouchDevice]);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    gsap.to(cursorRef.current, {
      scale: isHovering ? 3 : 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [isHovering]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ opacity: 0.8 }}
    />
  );
};

export default CustomCursor;
