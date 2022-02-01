import React from 'react';

export interface ContentProps {
  children: React.ReactChild;
}

export function Content({ children }: ContentProps) {
  return (
    <h2 className="border-b border-dark-polar-night1 pb-6 text-light-snow-storm1">{children}</h2>
  );
}
