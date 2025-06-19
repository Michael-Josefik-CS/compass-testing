'use client';

import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image';
import Link from 'next/link'

import styles from './Nav.module.css'; 
import Button from '../Button/Button'; 
import NavLink from './NavLink';

import { useTheme } from '@/app/context/ThemeContext';

import { CgDarkMode } from "react-icons/cg";
import classNames from 'classnames';


interface NavProps {  
  onImage: boolean; // Optional prop to apply image styles
}



const Nav = ({ onImage = true }: NavProps) => {

  const { theme, toggleTheme } = useTheme()

  const [showNav, setShowNav] = useState(true);
  const [isNearTop, setIsNearTop] = useState(true);
  const lastScrollY = useRef(0);

  // Effect to handle scroll events and show/hide nav based on scroll direction
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
  



  const handleLogIn = () => {
    alert('Log in functionality is not implemented yet.');
  };
  const handleSignUp = () => {
    alert('Sign up functionality is not implemented yet.');
  };

  const logoTheme = theme === 'dark' ? '/assets/compass-logo-onDark.png' : '/assets/compass-logo-onLight.png';

  return (
    <nav

      className={classNames(
        styles.navSection,
        onImage && isNearTop ? styles.transparent : styles.opaque,
        showNav ? styles.show : styles.hide,
      )}

    >
      <div className={styles.container}>

        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={isNearTop ? "/assets/compass-logo-white.png" : logoTheme}
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
              <NavLink href="/destinations" onImage={isNearTop}>Destinations</NavLink>
            </li>
            <li>
              <NavLink href="//" onImage={isNearTop}>Experiences</NavLink>
            </li>
            <li>
              <NavLink href="/advisors" onImage={isNearTop}>Advisors</NavLink>
            </li>
            <li>
              <NavLink href="//" onImage={isNearTop}>Field Notes</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.rightActions}>
          <Button type='tertiary' onImage={isNearTop} icon={<CgDarkMode />} iconRight={true} onClick={toggleTheme} />
          <Button type='tertiary' onImage={isNearTop} onClick={handleLogIn}>Log in</Button>
          <Button type='secondary' onImage={isNearTop} onClick={handleSignUp}>Sign up</Button>
        </div>

      </div>
      <div className={classNames(isNearTop && styles.imageOverlay)} aria-hidden={true}></div>
    </nav>
  )
}

export default Nav