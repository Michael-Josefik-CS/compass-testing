import React from 'react'
import styles from './Section.module.css'
import classNames from 'classnames';
import Container from '../Container/Container';
import { BackgroundVideo, SurfaceColorTokens, getSurfaceColor } from '@/lib/types';

interface SectionProps {
  children: React.ReactNode;
  bgColor?: SurfaceColorTokens; // Optional prop to set background level
  image?: string; // Optional prop for background image
  video?: BackgroundVideo
  size?: 'large' | 'medium'; // Optional prop for height override
  vSpacingOverride?: string; // Optional prop for vertical spacing override
  header?: boolean; // Optional prop to apply room for nav
  id?: string; // Optional prop for section ID
  faded?: boolean; // Optional prop to apply faded effect
}

const Section = ({ children, bgColor, image, video, header, size, vSpacingOverride, id, faded }: SectionProps) => {

  const contentClasses = classNames(
    styles.content,
    size && styles.fullHeight,
    header && styles.navPadding,
  );

  return (
    <section 
      id={id}
      className={classNames(
        styles.section,
        bgColor && getSurfaceColor[bgColor],
        image || video && styles.withImage,
        image || video && styles.withOverlay,
        size && styles[size],
        size && styles.fullHeight,
      )} 
      style={{
        ...(vSpacingOverride && { paddingBlock: `${vSpacingOverride}` }),
        ...(image && { backgroundImage: `url(${image})` }),
      }}
    >
      {video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.videoBackground}
          poster={video.poster}
        >
          <source src={video.src} type={video.type || 'video/mp4'} />
        </video>
      )}
      {faded && <div className={styles.faderLeft}></div>}
      <div className={contentClasses}>
        <Container verticalStretch={!!size}>
          {children}
        </Container>
      </div>
      {faded && <div className={styles.faderRight}></div>}
    </section>
  )
}

export default Section