import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href = '#',
  onClick,
  className = '',
}) => {
  const content = (
    <span className="block whitespace-nowrap">Live Project</span>
  );

  const baseClasses = `
    inline-flex items-center justify-center rounded-full
    border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    transition-all duration-200
    hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95
    select-none cursor-pointer
    ${className}
  `;

  if (href && !onClick) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        aria-label="Live Project"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
      aria-label="Live Project"
    >
      {content}
    </button>
  );
};

export default LiveProjectButton;
