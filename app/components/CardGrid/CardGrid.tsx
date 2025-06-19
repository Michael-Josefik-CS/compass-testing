import React from 'react';
import styles from './CardGrid.module.css';
import Card from '../Card/Card';
import { CardProps } from '@/lib/types';
import Link from 'next/link';

interface CardGridProps {
	cards: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
	return (
		<div className={styles.grid}>
			{cards.map((card) => (
				<Link href={`/destinations/${card.slug}`} key={card.uid} >
					<Card {...card} />
				</Link>
			))}
		</div>
	);
};

export default CardGrid;