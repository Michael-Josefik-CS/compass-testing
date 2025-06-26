'use client'

import { useEffect, useState } from 'react'
import { fetchDestinations } from '@/lib/contentstack'
import { Destination } from '@/lib/types'
import Section from '../components/Section/Section'
import { mapDestinationsToCards } from '@/lib/utils'
import CardGrid from '../components/CardGrid/CardGrid'
import PageHeader from '../components/PageHeader/PageHeader'

import imageTest from '../../public/assets/img_greece.jpg'


/* interface PageHeaderProps {
  regions?: string[];
  selectedRegion?: string;
  onRegionChange?: (region: string) => void;
} */


export default function DestinationsPage() {
/*   const defaultRegion = 'Asia'
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion) */
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
        <PageHeader 
          title="Destinations"
          subhead="Explore our diverse range of travel destinations"
          image={imageTest.src}
          scrollLinks={[
            {label: 'Destinations', section: 'top-experiences'}, 
            {label: 'Advisors', section: 'different'}]}
        />

        <Section bgColor="secondary">
          <CardGrid cards={mapDestinationsToCards(destinations)}/>
        </Section>



      </>
    ) : (
      <p>Loading homepage content...</p>
    )}
  </>
    
  )
}