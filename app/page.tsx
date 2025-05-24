// app/page.tsx (Home page)
'use client'
import Link from "next/link";
import typeStyles from './components/typeStyles.module.css'

import Video from 'next-video';
import beach from '../public/_next-video/Beach.mp4';
import Header from "./components/Homepage/Header/Header";
import { useEffect, useState } from "react";
import { fetchHomepage } from "@/lib/contentstack";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import CardGrid from "./components/CardGrid/CardGrid";
import Card from "./components/Card/Card";


export default function Home() {
  const [homepage, setHomepage] = useState<any | null>(null)
  
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
        <Header 
          title={homepage.title} 
          subhead={homepage.subhead} 
          heroImage={homepage.hero_image.url} 
          titleColor='#ffffff'
        />
        <CardGrid cards={homepage.top_experiences} />
      </>
    ) : (
      <p>Loading homepage content...</p>
    )}
  </>
  );
} 