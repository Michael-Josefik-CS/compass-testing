'use client'

import { useEffect, useState } from 'react'
import { fetchDestinations } from '@/lib/contentstack'
import { Destination } from '@/lib/types'
import Section from '../components/Section/Section'
import CardCarousel from '../components/CardCarousel/CardCarousel'
import { mapDestinationsToCards } from '@/lib/utils'
import CardGrid from '../components/CardGrid/CardGrid'

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])

  useEffect(() => {
    async function loadDestinations() {
      const data = await fetchDestinations()
      setDestinations(data)
	  console.log(data)
    }

    loadDestinations()
  }, [])

  return (
    <>
    {destinations ? (
      <>

{/*         <Section bgLevel="primary">
          <CardCarousel align="end" cards={mapDestinationsToCards(destinations)}/>
        </Section> */}

        <Section bgLevel="secondary" header={true} vSpacingOverride="0" image="/images/destinations-hero.jpg">
          <CardGrid cards={mapDestinationsToCards(destinations)}/>
        </Section>



      </>
    ) : (
      <p>Loading homepage content...</p>
    )}
  </>
    
  )
}