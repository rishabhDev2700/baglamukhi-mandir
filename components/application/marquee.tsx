import React from 'react';

export function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">
        {children}
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}
