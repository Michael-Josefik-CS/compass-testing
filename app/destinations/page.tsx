'use client'

import { useEffect, useState } from 'react'
import { fetchDestinations } from '@/lib/contentstack'
import Card from '../components/Card/Card'

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<any[]>([])

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
          {destinations.map((destination) => (
            <Card 
				key={destination.uid} // Use a unique identifier for the key
				label={destination.title}
				description={destination.description}
				region={destination.region?.title}
				image={destination.hero_image?.url} // Assuming image is a URL
			/>
          ))}
        </ul>
      ) : (
        <p>Loading destinations...</p>
      )}
    </div>
  )
}