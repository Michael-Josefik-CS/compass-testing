import React from 'react'
import styles from './Card.module.css'
import typeStyles from '../typeStyles.module.css'

interface CardProps {
    label: string;
    description: string;
    region?: string;
    image?: string; // Optional, to add an image
    type?: 'button' | 'submit' | 'reset';  // Optional, default to 'button'
    className?: string; // Optional, to add custom styles
  }

const Card = ({ label, description, type = 'button', className = '', region, image }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.shadowOverlay}></div>

      <div className={styles.imageWrapper}>
        <img src={image} alt="compass" className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.headerTextWrapper}>
          <h3 className={`${typeStyles.primary} ${typeStyles.heading3}`}>{label}</h3>
          {region && ( <p>{region}</p> )}
        </div>

        <div className={styles.details}>
          <p className={styles.secodary}>{description}</p>
          <div className={styles.buttonWrapper}>
            <p className={typeStyles.btnLink}>Discover More</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card