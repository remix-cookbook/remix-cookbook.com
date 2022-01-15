import React from 'react';

export interface SeparatorProps {
  children: React.ReactChild;
}

export function Separator({ children }: SeparatorProps) {
  return (
    <h3 className="pb-2 border-b text-light-snow-storm3 border-dark-polar-night2">{children}</h3>
  );
}
