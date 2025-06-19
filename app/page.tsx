// app/page.tsx (Home page)
'use client'

import { useEffect, useState } from "react";
import { fetchHomepage } from "@/lib/contentstack";
import type { Homepage } from "@/lib/types";
import { mapExperiencesToCards, mapShowcaseToShowcase } from "@/lib/utils";

import Section from "./components/Section/Section";
import PageHeader from "./components/PageHeader/PageHeader";
import CardCarousel from "./components/CardCarousel/CardCarousel";
import Showcase from "./components/Showcase/Showcase";
import FieldNotesShowcase from "./components/FieldNotesShowcase/FieldNotesShowcase";


export default function Home() {
  const [homepage, setHomepage] = useState<Homepage | null>(null)
  
    useEffect(() => {
      async function loadHomepage() {
        const data = await fetchHomepage()
        setHomepage(data)
      console.log(data)
      }
  
      loadHomepage()
    }, [])

  const showcases = homepage?.showcase
  ? mapShowcaseToShowcase(homepage.showcase)
  : [];
    
  return (
    <>
    {homepage ? (
      <>

        <PageHeader 
          title={homepage.title} 
          subhead={homepage.subhead}
          image={homepage.hero_image.url}
          isHomepage={true}
          scrollLinks={[
            {label: 'Top Experiences', section: 'top-experiences'}, 
            {label: 'Different', section: 'different'}]}
        />

        <Section id="top-experiences" bgColor="secondary" faded={true}>
          <CardCarousel align="start" cards={mapExperiencesToCards(homepage.top_experiences)}/>
        </Section>

        <Section bgColor="primary">
          <FieldNotesShowcase></FieldNotesShowcase>
        </Section>

        {showcases.map((showcase, i) => (
          <Section key={`showcase-${i}`}>
            <Showcase {...showcase} />
          </Section>
        ))}

        <Section bgColor="primary">
          <CardCarousel align="end" cards={mapExperiencesToCards(homepage.top_experiences)}/>
        </Section>

        <Section id="different" bgColor="secondary">
          <CardCarousel align="start" cards={mapExperiencesToCards(homepage.top_experiences)}/>
        </Section>

      </>
    ) : (
      <p>Loading homepage content...</p>
    )}
  </>
  );
} 