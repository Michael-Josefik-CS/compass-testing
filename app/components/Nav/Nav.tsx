'use client'; // Mark this component as a client component


import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'; // Optional if you're using CSS Modules
import Button from '../Button/Button'

const Nav = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <Link href="/">
            <img src="/assets/compass-logo-color.png" alt="Compass Travel Logo" className={styles.logoImage} />
          </Link>
        </div>

        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/advisors">Advisors</Link>
            </li>
            <li>
              <Link href="/test">Test</Link>
            </li>
          </ul>
        </nav>

        <Button label="Click Me" onClick={handleClick} />

      </div>
    </header>
  )
}

export default Nav