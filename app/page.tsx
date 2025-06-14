// app/page.tsx (Home page)
'use client'

import { useEffect, useState } from "react";
import { fetchHomepage } from "@/lib/contentstack";
import type { Homepage } from "@/lib/types";
import { mapExperiencesToCards } from "@/lib/utils";

import Section from "./components/Section/Section";
import PageHeader from "./components/PageHeader/PageHeader";
import CardCarousel from "./components/CardCarousel/CardCarousel";
import Showcase from "./components/Showcase/Showcase";


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
  return (
    <>
    {homepage ? (
      <>

        <Section bgBranded={true} height="100vh" vSpacingOverride={"0"} image={homepage.hero_image.url} header={true} >
          <PageHeader 
            title={homepage.title} 
            subhead={homepage.subhead}
            isHomepage={true}
            scrollLinks={[{label: 'Top Experiences', section: 'top-experiences'}, {label: 'Different', section: 'different'}]}
          />
        </Section>

        <Section id="top-experiences" bgLevel="secondary">
          <CardCarousel align="start" cards={mapExperiencesToCards(homepage.top_experiences)}/>
        </Section>

        <Section bgLevel="secondary">
          <CardCarousel align="end" cards={mapExperiencesToCards(homepage.top_experiences)}/>
        </Section>

        <Section id="different" bgLevel="secondary">
          <CardCarousel align="start" cards={mapExperiencesToCards(homepage.top_experiences)}/>
        </Section>
        <Section>
          <Showcase image={homepage.hero_image.url}></Showcase>
        </Section>

      </>
    ) : (
      <p>Loading homepage content...</p>
    )}
  </>
  );
} 