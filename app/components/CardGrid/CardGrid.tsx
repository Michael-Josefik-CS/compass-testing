import React from 'react'
import Section from '../Section/Section';
import Container from '../Container/Container';
import Card from '../Card/Card';
import type { CardProps } from '../../../lib/types.ts'; // Adjust the import based on your project structure

interface CardGridProps {
    cards: CardProps[]; // Array of card data
  }

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <Section>
      <Container alignment="flex-start" layout="grid" gridColumnWidth={275}>
        {cards.length > 0 ? (
          cards.map((experience) => (
            <Card
              key={experience.key}
              title={experience.title}
              description={experience.description}
              subtitle={experience.subtitle}
              image={experience.image}
            />
          ))
        ) : (
          <p>Loading destinations...</p>
        )}
      </Container>
    </Section>
  );
};

export default CardGrid