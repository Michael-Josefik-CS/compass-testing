'use client'
import React from 'react'
import Container from '../Container/Container'
import styles from './PageHeader.module.css'
import Button from '../Button/Button'
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface HeaderProps {
    title: string;
    subhead: string;
    heroImage?: string;
  }

const PageHeader = ({ title, subhead, heroImage }: HeaderProps) => {
  return (
    <section
        className={styles.headerSection}
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
    >
        <Container alignment='flex-start' layout='column' gridColumnWidth={275} pad='0 32px'>
            <div className={styles.headerContent}>
                <div className={styles.left}>
                    <div className={styles.headerText}>
                        <h1 className="display-large">{title}</h1>
                        <h2 className="body-xl">{subhead}</h2>
                    </div>
                    <Button onDark={true} iconRight={true} icon={<IoIosArrowDroprightCircle />}>Book now</Button>
                </div>
                <div className={styles.right}>
                    
                </div>
            </div>
            <div className={styles.headerScroller}>
                <div className={styles.srollLineContainer} style={{ justifyContent: 'flex-end' }}>
                    <div className={styles.scrollerLine}></div>
                </div>
                <div>This is text</div>
                <div className={styles.srollLineContainer}>
                    <div className={styles.scrollerLine}></div>
                </div>
            </div>
        </Container>
    </section>
    
  )
}

export default PageHeader