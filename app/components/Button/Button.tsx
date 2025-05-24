// components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.css'; // Optional if you're using CSS Modules

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';  // Optional, default to 'button'
  className?: string; // Optional, to add custom styles
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`${styles.button} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;