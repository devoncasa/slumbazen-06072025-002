
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  to, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  children, 
  type = 'button',
  className = '',
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-4";
  
  const sizeStyles = {
    small: "px-5 py-2 text-sm",
    medium: "px-8 py-3 text-base",
    large: "px-10 py-4 text-lg"
  };

  const variantStyles = {
    primary: "bg-brand-primary text-white hover:bg-opacity-90 focus:ring-brand-primary/30",
    secondary: "bg-brand-secondary text-brand-dark hover:bg-opacity-90 focus:ring-brand-secondary/40",
    outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary/30",
    link: "bg-transparent shadow-none text-brand-primary hover:underline hover:shadow-none focus:ring-brand-primary/20",
  };

  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed !shadow-none !transform-none" : ""; 

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  const internalOnClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  if (to && !disabled) {
    return (
      <Link to={to} onClick={internalOnClick} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={internalOnClick} 
      className={combinedClassName} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;