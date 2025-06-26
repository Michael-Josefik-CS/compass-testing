import React from 'react'
import styles from './Showcase.module.css'
import typography from '../../../styles/tokens/typography.module.css';
import classNames from 'classnames';

import { ShowcaseProps } from '../../../lib/types'; // Adjust the import path based on your project structure
import Button from '../Button/Button'; // Adjust the import path as necessary



const Showcase = ({
  split = false, // Default to false if not provided
  image, 
  headline, 
  subhead, 
  copy, 
  buttonContent,
  height = '540px',
  flip = false,
  bgColor = 'branded', // Default to primary if not provided
}: ShowcaseProps) => {
  

  // Determine the background color class based on bgColor prop
  const color = (): string => {
    switch (bgColor) {
      case 'branded':
        return styles.bgBranded;
      case 'primary':
        return styles.bgPrimary;
      case 'secondary':
        return styles.bgSecondary;
      default:
        return styles.bgBranded; // Default to branded if no match
    }
  };


  return (
	<div
		className={classNames(
			styles.wrapper,
			flip && styles.flipped
		)}
    style={{
      ...(height && { height }),
    }}
	>

		{/* Image container */}
    <div
      className={classNames(
        split ? styles.imageWrapperSplit : styles.imageWrapperFull,
        color(),
      )}
      style={{
        ...(image && { backgroundImage: `url(${image})` }),
      }}
    >
      {image && !split && <div className={styles.imageOverlay} />} {/* Image overlay */}
    </div>


		{/* Content container */}
		<div 
      className={classNames(
        styles.contentWrapper,
        split && styles.leftJustified,
        split && styles.bgBranded,
        split && styles.splitContentWrapper,
      )}
    >
      {(headline || subhead) && (
        <div 
          className={classNames(
            styles.headerTextWrapper, 
            split && styles.leftJustified,
          )}
        >
          {headline && 
            <h2 className={classNames(
                typography.displayLarge,
                typography.textOnDarkPrimary,
                split && styles.leftJustified
              )}
            >
              {headline}
            </h2>
          }
          {subhead && 
            <h2 className={classNames(
                typography.headingH3,
                typography.textOnDarkSecondary,
                split && styles.leftJustified,
              )}
            >
              {subhead}
            </h2>
          }
        </div>
      )}
			{copy && 
        <p className={classNames(
            typography.bodyXl,
            typography.textOnDarkSecondary,
            split && styles.leftJustified,
          )}
        >
          {copy}
        </p>
      }
			{buttonContent && buttonContent.length > 0 && (
				<div className={styles.buttonGroup}>
					{buttonContent.slice(0, 2).map(({ label, url }, index) => (
						<Button type="secondary" onImage={true} key={index} onClick={() => (window.location.href = url)}>
							{label}
						</Button>
					))}
				</div>
			)}
		</div>
	</div>
);
}

export default Showcase


/* const Showcase = ({variant, bgBranded, image, headline, subhead, copy, buttonContent}: ShowcaseProps) => {
  return (
	<div
		className={classNames(
			styles.wrapper,
			variant === 'image' && styles.withImage,
			variant === 'branded' && styles.branded,
			variant === 'split' && styles.split
		)}
		style={variant === 'image' && image ? { backgroundImage: `url(${image})` } : {}}
	>
		{variant === 'split' && image && (
			<div
				className={styles.splitImage}
				style={{ backgroundImage: `url(${image})` }}
			/>
		)}

		{(variant === 'image' || variant === 'split') && <div className={styles.imageOverlay} />}
		<div className={styles.content}>
      {(headline || subhead) && (
        <div className={styles.headerTextWrapper}>
          {headline && <h2 className='display-large'>{headline}</h2>}
          {subhead && <h3 className='heading-h3'>{subhead}</h3>}
        </div>
      )}
			<div>
      </div>
			{copy && <p className='body-xl'>{copy}</p>}
			{buttonContent && buttonContent.length > 0 && (
				<div className={styles.buttonGroup}>
					{buttonContent.slice(0, 2).map(({ label, url }, index) => (
						<Button type='secondary' onImage={true} key={index} onClick={() => window.location.href = url}>
							{label}
						</Button>
					))}
				</div>
			)}
		</div>
	</div>
); */