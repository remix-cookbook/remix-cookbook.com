import React from 'react';
import { Link } from 'remix';

export interface InternalProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Internal({ href, children, className }: InternalProps) {
  return (
    <Link prefetch="intent" to={href} className={className}>
      {children}
    </Link>
  );
}
