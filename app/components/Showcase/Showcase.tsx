import React from 'react'
import styles from './Showcase.module.css'

interface ShowcaseProps {
  bgBranded?: boolean; // Optional prop to apply brand styles
  image?: string; // Optional prop for background image
  headline?: string; // Optional prop for headline text
  subhead?: string; // Optional prop for subheadline text
  copy?: string; // Optional prop for additional copy text
  buttonsCount?: 1 | 2; // Optional prop to control number of buttons
}

const Showcase = () => {
  return (
    <div className={styles.container}>Showcase</div>
  )
}

export default Showcase