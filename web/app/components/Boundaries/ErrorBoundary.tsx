import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return (
    <section className="px-12 py-24 text-2xl antialiased font-semibold text-center text-light-snow-storm3">
      {children}
    </section>
  );
}
