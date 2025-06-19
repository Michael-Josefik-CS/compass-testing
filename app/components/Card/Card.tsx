import React from 'react'
import Image from 'next/image';
import styles from './Card.module.css'
import { CardProps } from '../../../lib/types'; // Adjust the import path based on your project structure
import HeaderBlock from '../atoms/HeaderBlock/HeaderBlock';



const Card = ({ title, description, subtitle, image, priority }: CardProps) => {
  return (
    <div className={styles.card}>
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
          <HeaderBlock size='h3' color='primary'>{title}</HeaderBlock>
          {subtitle && ( <HeaderBlock size='h5' color='secondary'>{subtitle}</HeaderBlock> )}
        </div>

        <div className={styles.details}>
          <p className={styles.shortDescription}>{description}</p>
          <div className={styles.buttonWrapper}>
            <p className={`button-text-md`}>Discover More</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card