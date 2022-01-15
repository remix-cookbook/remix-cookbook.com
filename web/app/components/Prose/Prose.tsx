import React from 'react';

export interface ProseProps {
  children: React.ReactChild;
}

export function Prose({ children }: ProseProps) {
  return (
    <div className="px-6 py-10 mx-auto mb-auto prose prose-lime prose-a:text-sky-400 prose-strong:text-light-snow-storm1 prose-blockquote:text-light-snow-storm3 prose-h4:text-light-snow-storm1 text-light-snow-storm3 lg:prose-lg">
      {children}
    </div>
  );
}
