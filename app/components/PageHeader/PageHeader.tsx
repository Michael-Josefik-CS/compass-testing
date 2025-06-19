'use client'
import React from 'react'

import Section from '../Section/Section'
import Button from '../Button/Button'
import SocialButton from '../Homepage/SocialButton';
import ScrollerButton from './ScrollerButton';

import styles from './PageHeader.module.css'

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import HeaderBlock from '../atoms/HeaderBlock/HeaderBlock';
import { SurfaceColorTokens } from '@/lib/types';
import CopyBlock from '../atoms/CopyBlock/CopyBlock';


interface HeaderProps {
    title: string;
    subhead: string;
    image?: string
    bgColor?: SurfaceColorTokens;
    isHomepage?: boolean; // Optional prop to apply homepage items
    scrollLinks?: { label: string; section: string }[];
}


const PageHeader = ({ title, subhead, image, isHomepage = false, scrollLinks, bgColor }: HeaderProps) => {
    const icons = [FaFacebook, FaTripadvisor, FaInstagram];



  return (
    <Section
      size={isHomepage ? 'large' : 'medium'}
      vSpacingOverride="0"
      header={true}
      {...(image ? { image } : {})}
      {...(bgColor ? { bgColor } : {})}
    >
    <div className={styles.pageHeader}>
        <div className={styles.headerWrapper}>

            <div className={styles.left}>
                <div className={styles.headerText}>
                    <HeaderBlock size='display' title={title} />
                    <CopyBlock size='xl' copy={subhead} color='secondary' />
                </div>

                <div className={styles.btnTray}>
                    <Button iconRight={true} icon={<IoIosArrowDroprightCircle />}>Book now</Button>
                </div>
            </div>


            <div className={styles.right}>
                {isHomepage && (
                    <div className={styles.socialButtons}>
                        {icons.map((Icon, index) => (
                            <SocialButton key={index} icon={<Icon />} />
                        ))}
                    </div>
                    )}
            </div>

        </div>
        <div className={styles.headerScroller}>
            <div className={styles.srollLineContainer} style={{ justifyContent: 'flex-end' }}>
                <div className={styles.scrollerLine}></div>
            </div>
            <div className={styles.scrollerButtons}>
                {scrollLinks?.map((link, index) => (
                    <ScrollerButton key={index} label={link.label} section={link.section} />
                ))}
            </div>
            <div className={styles.srollLineContainer}>
                <div className={styles.scrollerLine}></div>
            </div>
        </div>
    </div>
    </Section>
  )
}

export default PageHeader