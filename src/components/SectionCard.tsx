import React from 'react';

interface SectionCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, children, className = '' }) => {
  return (
    <div className={`bg-white border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">{title}</h3>
      {description && <p className="text-text-light mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default SectionCard;
