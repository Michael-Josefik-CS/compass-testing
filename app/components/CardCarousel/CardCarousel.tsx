import React, { useEffect } from 'react'
import styles from './CardCarousel.module.css';
import Card from '../Card/Card'
import { CardProps } from '../../../lib/types'; 
import useEmblaCarousel from 'embla-carousel-react';

interface CardCarouselProps {
  cards: CardProps[]; // Array of card data
  align: 'start' | 'center' | 'end'; // Optional alignment prop
}

const CardCarousel = ({ cards, align }: CardCarouselProps) => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: false
    });

    useEffect(() => {
      if (emblaApi && align === 'end') {
        emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
      } else if (emblaApi && align === 'start') {
        emblaApi.scrollTo(0);
      }
    }, [emblaApi, align]);


  return (
    <div className={styles.carouselContainer}>

        <div className={styles.carouselHeader}>
            <h2 className="heading-h2" style={{ color: `var(--text-default-primary)`}}>Top Regional Advisors</h2>
            <a href="#" className="seeAllLink">See all</a>
        </div>

        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {cards.map((card) => (
                        <div className={styles.emblaSlide} key={card.key}>
                            <Card
                                title={card.title}
                                subtitle={card.subtitle}
                                description={card.description}
                                image={card.image}
                                priority={card.priority}
                            />
                        </div>
                    ))}
                </div>
             </div>
        </div>
    </div>
  )
}

export default CardCarousel