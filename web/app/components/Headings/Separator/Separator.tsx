import React from 'react';

export interface SeparatorProps {
  children: React.ReactChild;
}

export function Separator({ children }: SeparatorProps) {
  return (
    <h3 className="border-b border-dark-polar-night2 pb-2 text-light-snow-storm3">{children}</h3>
  );
}
