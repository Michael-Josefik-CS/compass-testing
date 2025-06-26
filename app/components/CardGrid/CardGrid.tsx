import React from 'react';
import styles from './CardGrid.module.css';
import Card from '../Card/Card';
import { CardProps } from '@/lib/types';

interface CardGridProps {
  cards: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className={styles.grid}>
      {cards.map((card) => <Card {...card} key={card.uid} />)}
    </div>
  );
};

export default CardGrid;