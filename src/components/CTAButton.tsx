import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-dark-blue text-white hover:bg-primary-blue shadow-md hover:shadow-lg',
    secondary: 'bg-primary-blue text-text-dark hover:bg-dark-blue hover:text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-dark-blue text-dark-blue hover:bg-light-gray',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
};

export default CTAButton;
