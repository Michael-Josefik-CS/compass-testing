'use client'

import { useEffect, useState } from 'react'
import { fetchDestinations } from '@/lib/contentstack'
import { Destination } from '@/lib/types'
import Card from '../components/Card/Card'

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
    <div>
      <h1>Destinations</h1>
      {destinations.length > 0 ? (
        <ul>
          {destinations.map((destination, index) => (
            <Card 
              key={destination.uid} // Use a unique identifier for the key
              title={destination.title}
              subtitle={destination.region?.title}
              description={destination.description}
              image={destination.hero_image?.url} // Assuming image is a URL
              priority={index < 4} // only the first 2 cards will get priority
            />
          ))}
        </ul>
      ) : (
        <p>Loading destinations...</p>
      )}
    </div>
  )
}