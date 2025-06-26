import React from 'react'
import Image from 'next/image';

import styles from './Card.module.css'
import { CardProps } from '../../../lib/types';

import HeaderBlock from '../atoms/HeaderBlock/HeaderBlock';
import CopyBlock from '../atoms/CopyBlock/CopyBlock';
import WrapperWithLink from '../atoms/WrapperWithLink/WrapperWithLInk';
import LivePreviewWrapper from '../LivePreviewWrapper/LivePreviewWrapper';



const Card = ({ title, description, subtitle, image, priority, contentType, slug, uid }: CardProps) => {
  return (
      <LivePreviewWrapper uid={uid}>
        <WrapperWithLink href={`/${contentType}s/${slug}`} classname={styles.card}>
          {/* Using template literals to construct the href dynamically */}
            <div className={styles.imageWrapper}>
              {image && <Image
                src={image.url}
                alt={image.alt || 'Card Image'}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
              />}
            </div>
            <div className={styles.content}>
              <div className={styles.headerTextWrapper}>
                <HeaderBlock size='h3' color='primary'>{title}</HeaderBlock>
                {subtitle && ( <HeaderBlock size='h5' color='secondary'>{subtitle}</HeaderBlock> )}
              </div>
              <div className={styles.details}>
                <CopyBlock size={'md'} color={'secondary'} copy={description} />
                <div className={styles.buttonWrapper}>
                  <p className={`button-text-md`}>Discover More</p>
                </div>
              </div>
            </div>
        
        </WrapperWithLink>
      </LivePreviewWrapper>
  )
}

export default Card