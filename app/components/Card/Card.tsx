import React from 'react'
import Image from 'next/image';
import styles from './Card.module.css'
import { CardProps } from '../../../lib/types'; // Adjust the import path based on your project structure



const Card = ({ title, description, subtitle, image, priority }: CardProps) => {
  return (
    <div className={styles.card}>
{/*       <div className={styles.shadowOverlay}></div>
 */}
      <div className={styles.imageWrapper}>
        <Image
          src={image ?? '/default-image.jpg'}
          alt="compass"
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.headerTextWrapper}>
          <h3 className={`heading-h3`}>{title}</h3>
          {subtitle && ( <h5 className={`${styles.subtitle} heading-h5`}>{subtitle}</h5> )}
        </div>

        <div className={styles.details}>
          <p className={styles.secodary}>{description}</p>
          <div className={styles.buttonWrapper}>
            <p className={`button-text-md`}>Discover More</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card