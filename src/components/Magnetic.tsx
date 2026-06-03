"use client";
import React, { useRef } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

interface MagneticProps {
  children: React.ReactNode;
}

const Magnetic = ({ children }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useMagnetic(ref);

  return (
    <div 
      ref={ref} 
      className="inline-block"
    >
      {children}
    </div>
  );
};

export default Magnetic;
