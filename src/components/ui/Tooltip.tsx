import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  title: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, title }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
