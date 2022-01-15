import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export interface ExternalProps {
  href: string;
  children: React.ReactChild;
  title?: string;
  externalIndicator?: boolean;
  className?: string;
}

export function External({
  children,
  href,
  externalIndicator = true,
  title = '',
  className,
}: ExternalProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center ${className}`}
      title={title}
    >
      {children}{' '}
      {externalIndicator ? (
        <span className="ml-2 text-dark-polar-night1">
          <FaExternalLinkAlt />
        </span>
      ) : null}
    </a>
  );
}
