// app/page.tsx (Home page)
'use client'
import { useEffect, useState } from "react";
import { fetchHomepage } from "@/lib/contentstack";
import type { Homepage } from "@/lib/types";
import PageHeader from "./components/PageHeader/PageHeader";
import { mapExperiencesToCards } from "@/lib/utils";
import CardCarousel from "./components/CardCarousel/CardCarousel";


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
        <PageHeader 
          title={homepage.title} 
          subhead={homepage.subhead} 
          heroImage={homepage.hero_image.url} 
        />
        {/* <CardGrid cards={mapExperiencesToCards(homepage.top_experiences)} /> */}
        <CardCarousel align="start" cards={mapExperiencesToCards(homepage.top_experiences)}/>
        <CardCarousel align="end" cards={mapExperiencesToCards(homepage.top_experiences)}/>
      </>
    ) : (
      <p>Loading homepage content...</p>
    )}
  </>
  );
} 