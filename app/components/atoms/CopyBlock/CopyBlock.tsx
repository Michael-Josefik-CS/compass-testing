import React from 'react'
import classNames from 'classnames';
import typography from '../../../../styles/tokens/typography.module.css';
import { TextColorTokens, colorClassMap } from '../../../../lib/types'; // Adjust the import path based on your project structure

interface CopyBlockProps {
    children?: React.ReactNode;
    align?: 'left' | 'center';
    size?: 
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl';
    color?: TextColorTokens; // Optional prop to specify text color
    copy?: string; // Optional prop for text content
}

const typographySizes: Record<string, string> = {
    sm: typography.bodySm,
    md: typography.bodyMd,
    lg: typography.bodyLg,
    xl: typography.bodyXl,
};


const CopyBlock = ({ children, align = 'center', size = 'md', color, copy }: CopyBlockProps) => {
  return (
    <p
      className={classNames(
        size && typographySizes[size],
        color && colorClassMap[color],
        align === 'left' && typography.leftAlign,
      )}
    >
      {copy ? copy : children}
    </p>
  );
};

export default CopyBlock