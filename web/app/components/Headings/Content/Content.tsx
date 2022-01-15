import React from 'react';

export interface ContentProps {
  children: React.ReactChild;
}

export function Content({ children }: ContentProps) {
  return (
    <h2 className="pb-3 border-b text-light-snow-storm1 border-dark-polar-night1">{children}</h2>
  );
}
