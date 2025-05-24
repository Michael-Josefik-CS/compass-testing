import React from 'react'
import Section from '../Section/Section';
import Container from '../Container/Container';
import Card from '../Card/Card';
import type { Experience } from '@/types'; // Adjust the import based on your project structure

interface CardGridProps {
    cards: Experience[]; // Array of card data
  }

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <Section>
      <Container alignment="flex-start" layout="grid" gridColumnWidth={275}>
        {cards.length > 0 ? (
          cards.map((experience) => (
            <Card
              key={experience.uid}
              label={experience.title}
              description={experience.description}
              region={experience.region?.title}
              image={experience.hero_image?.url}
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