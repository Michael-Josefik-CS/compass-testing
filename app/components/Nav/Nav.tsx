'use client'; // Mark this component as a client component

import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image';
import Link from 'next/link'

import styles from './Nav.module.css'; // Optional if you're using CSS Modules
import Button from '../Button/Button'; // Adjust the import path as necessary
import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import { useTheme } from '@/app/context/ThemeContext';
import { CgDarkMode } from "react-icons/cg";

const Nav = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme()
  const isHome = pathname === '/';

  const [showNav, setShowNav] = useState(true);
  const [isNearTop, setIsNearTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNav(false); // hide nav
      } else {
        setShowNav(true); // show nav
      }

      setIsNearTop(currentScrollY < 100);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  



  const handleClick = () => {
    alert('Button clicked!');
  };

  const onTransparent = isHome && isNearTop;

  return (
    <nav
      className={`${styles.navSection} ${
        isHome && isNearTop ? styles.transparent : styles.opaque
      }`}
      style={{
        transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className={styles.container}>

        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={onTransparent ? "/assets/compass-logo.png" : "/assets/compass-logo-color.png"}
              alt="Compass Travel Logo"
              width={146}
              height={36}
              className={styles.logoImage}
              priority // ensures it's loaded early (important for LCP)
            />
          </Link>
        </div>

        <div className={styles.navLinksWrapper}>
          <ul className={styles.navLinks}>
            <li>
              <NavLink href="/destinations" onTransparent={onTransparent}>Destinations</NavLink>
            </li>
            <li>
              <NavLink href="//" onTransparent={onTransparent}>Experiences</NavLink>
            </li>
            <li>
              <NavLink href="/advisors" onTransparent={onTransparent}>Advisors</NavLink>
            </li>
            <li>
              <NavLink href="//" onTransparent={onTransparent}>Field Notes</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.rightActions}>
          <Button type='tertiary' onDark={onTransparent} icon={<CgDarkMode />} iconRight={true} onClick={toggleTheme} />
          <Button type='tertiary' onDark={onTransparent}>Log in</Button>
          <Button type='secondary' onDark={onTransparent} onClick={handleClick}>Sign up</Button>
        </div>

      </div>
    </nav>
  )
}

export default Nav