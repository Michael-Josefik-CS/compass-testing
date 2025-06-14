import React from 'react'
import styles from './Section.module.css'
import classNames from 'classnames';
import Container from '../Container/Container';

interface SectionProps {
  children: React.ReactNode;
  bgLevel?: 'secondary' | 'tertiary'; // Optional prop to set background level
  bgBranded?: boolean; // Optional prop to apply brand styles
  image?: string; // Optional prop for background image
  height?: string; // Optional prop for height override
  vSpacingOverride?: string; // Optional prop for vertical spacing override
  header?: boolean; // Optional prop to apply room for nav
  id?: string; // Optional prop for section ID
}

const Section = ({ children, bgLevel, bgBranded, image, header, height, vSpacingOverride, id }: SectionProps) => {
  const classes = classNames(
    styles.section,
    bgLevel && styles[`bg${bgLevel.charAt(0).toUpperCase() + bgLevel.slice(1)}`],
    image && styles.withImage,
    image && styles.withOverlay,
  );

  const contentClasses = classNames(
    styles.content,
    height && styles.fullHeight,
    header && styles.navPadding,
  );

  return (
    <section 
      id={id}
      className={classes} 
      style={{
        ...(vSpacingOverride && { paddingBlock: `${vSpacingOverride}` }),
        ...(height && { height }),
        ...(image && { backgroundImage: `url(${image})` }),
      }}
    >
      <div className={contentClasses}>
        <Container verticalStretch={!!height}>
          {children}
        </Container>
      </div>
    </section>
  )
}

export default Section