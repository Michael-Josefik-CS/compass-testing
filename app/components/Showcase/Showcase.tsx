import React from 'react'
import styles from './Showcase.module.css'
import classNames from 'classnames';

interface ShowcaseProps {
  bgBranded?: boolean; // Optional prop to apply brand styles
  image?: string; // Optional prop for background image
  headline?: string; // Optional prop for headline text
  subhead?: string; // Optional prop for subheadline text
  copy?: string; // Optional prop for additional copy text
  buttonsCount?: 1 | 2; // Optional prop to control number of buttons
}

const Showcase = ({bgBranded, image, headline, subhead, copy, buttonsCount}: ShowcaseProps) => {
  const classes = classNames(
    styles.wrapper,
    image && styles.withImage,
  );

  
  return (
    <div 
      className={classes}
      style={{
        ...(image && { backgroundImage: `url(${image})` }),
      }}
    >
      Showcase
    </div>




  )
}

export default Showcase