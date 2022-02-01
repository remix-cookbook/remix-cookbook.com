import React from 'react';

export interface ProseProps {
  children: React.ReactChild;
}

export function Prose({ children }: ProseProps) {
  return (
    <div className="prose prose-lime mx-auto mb-auto px-6 py-10 text-light-snow-storm3 prose-h4:text-light-snow-storm1 prose-a:text-sky-400 prose-blockquote:text-light-snow-storm3 prose-strong:text-light-snow-storm1 lg:prose-lg">
      {children}
    </div>
  );
}
