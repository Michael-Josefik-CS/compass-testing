'use client';
// app/layout.tsx

import { usePathname } from 'next/navigation';

import '../styles/globals.css';

import Nav from './components/Nav/Nav';
import { ThemeProvider } from './context/ThemeContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
	const isHome = pathname === '/';

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
          <Nav />
          {!isHome && <div style={{ height: '104px' }} />} {/* Spacer for fixed nav */}
          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}