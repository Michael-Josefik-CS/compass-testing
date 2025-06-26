import React from 'react'
import type { JSX } from 'react';
import classNames from 'classnames';
import typography from '../../../../styles/tokens/typography.module.css';
import { TextColorTokens, colorClassMap } from '../../../../lib/types'; // Adjust the import path based on your project structure

interface HeaderBlockProps {
    children?: React.ReactNode;
    align?: 'left' | 'center';
    size?: 
    | 'display' // Added display size for larger headings
    | 'h1' 
    | 'h2' 
    | 'h3' 
    | 'h4' 
    | 'h5' 
    | 'h6'; // Adjusted to include heading sizes
    color?: TextColorTokens; // Optional prop to specify text color
    tag?: keyof JSX.IntrinsicElements; // Optional prop to specify the HTML tag
    title?: string; // Optional prop for title
}

const typographySizes: Record<string, string> = {
    display: typography.displayLarge,
    h1: typography.headingH1,
    h2: typography.headingH2,
    h3: typography.headingH3,
    h4: typography.headingH4,
    h5: typography.headingH5,
    h6: typography.headingH6,
};

const CopyBlock = ({ children, align = 'center', size = 'h3', color, tag, title }: HeaderBlockProps ) => {
  const fallbackTag: keyof JSX.IntrinsicElements = 
    size && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size)
      ? (size as keyof JSX.IntrinsicElements)
      : 'h2';
  const Tag = tag || fallbackTag;

  return (
    <Tag
      className={classNames(
        size && typographySizes[size],
        color && colorClassMap[color],
        align === 'left' && typography.leftAlign,
      )}
    >
      {title ? title : children}
    </Tag>
  );
};

export default CopyBlock