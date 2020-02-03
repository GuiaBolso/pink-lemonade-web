import React from 'react';

interface LinkProps {
  className?: string;
  href: string;
  children: any;
}

const Link = ({ className, href, children }: LinkProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
