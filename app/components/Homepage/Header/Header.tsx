'use client'
import React from 'react'
import Section from '../../Section/Section'
import Container from '../../Container/Container'
import styles from './Header.module.css'
import typeStyles from '../../typeStyles.module.css'

interface HeaderProps {
    title: string;
    subhead: string;
    heroImage?: string;
    titleColor?: string;
  }

const Header = ({ title, subhead, heroImage, titleColor}: HeaderProps) => {
  return (
    <Section>
        <Container alignment='flex-start' layout='column' gridColumnWidth={275} pad='0 32px'>
            <div
                className={styles.heroBackground}
                style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
            >

                <h1 className={typeStyles.display} style={{ color: titleColor }}>{title}</h1>
                <h2 style={{ color: '#eeeeee' }}>{subhead}</h2>

            </div>
        </Container>
    </Section>
    
  )
}

export default Header