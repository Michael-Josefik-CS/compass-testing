'use client';
// app/layout.tsx

import { useEffect } from 'react';
import { initLivePreview } from '../lib/contentstack';

import '../styles/globals.css';

import Nav from './components/Nav/Nav';
import { ThemeProvider } from './context/ThemeContext';
//import { HeaderProvider } from './context/HeaderConfigContext';

export default function Layout({ children }: { children: React.ReactNode }) {

  console.log('PREVIEW ENABLED?', process.env.NEXT_PUBLIC_CONTENTSTACK_LIVE_PREVIEW);
  
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_CONTENTSTACK_LIVE_PREVIEW === 'true') {
      initLivePreview();
    }
  }, []);

  return (
    <ThemeProvider>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Compass Travel</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
              href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;700&family=Source+Sans+3:wght@300;400;600;700&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <Nav onImage={true} />
            <main>{children}</main>
          </body>
        </html>
    </ThemeProvider>
  );
}