import React from 'react';

interface IconBlockProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`flex flex-col items-center text-center p-6 rounded-xl bg-light-gray hover:shadow-md transition-all duration-300 ${className}`}>
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold text-text-dark mb-2">{title}</h3>
      <p className="text-text-light text-sm">{description}</p>
    </div>
  );
};

export default IconBlock;
