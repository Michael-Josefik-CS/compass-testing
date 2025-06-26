import React, { useEffect } from 'react'
import styles from './CardCarousel.module.css'
import Card from '../Card/Card'
import { CardProps } from '../../../lib/types'
import useEmblaCarousel from 'embla-carousel-react'
import HeaderBlock from '../atoms/HeaderBlock/HeaderBlock'

interface CardCarouselProps {
  cards: CardProps[]
  align: 'start' | 'center' | 'end'
}

const CardCarousel = ({ cards, align }: CardCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
  })

  useEffect(() => {
    if (!emblaApi) return

    if (align === 'end') {
      emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1)
    } else if (align === 'start') {
      emblaApi.scrollTo(0)
    }
  }, [emblaApi, align])

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <HeaderBlock size="h2" color="primary" title='Featured Experiences' />
        <a href="#" className="seeAllLink">See all</a>
      </div>

      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {cards.map((card) => <Card {...card} key={card.uid} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCarousel