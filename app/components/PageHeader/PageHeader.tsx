'use client'
import React from 'react'
import styles from './PageHeader.module.css'
import Button from '../Button/Button'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import SocialButton from '../Homepage/SocialButton';
import ScrollerButton from './ScrollerButton';

interface HeaderProps {
    title: string;
    subhead: string;
    isHomepage?: boolean; // Optional prop to apply homepage items
    scrollLinks?: { label: string; section: string }[];
}

const PageHeader = ({ title, subhead, isHomepage, scrollLinks }: HeaderProps) => {
    const icons = [FaFacebook, FaTripadvisor, FaInstagram];

{isHomepage && (
  <div className={styles.socialButtons}>
    {icons.map((Icon, index) => (
      <SocialButton key={index} icon={<Icon />} />
    ))}
  </div>
)}
  return (
    <>
        <div className={styles.headerWrapper}>
            <div className={styles.left}>
                <div className={styles.headerText}>
                    <h1 className="display-large">{title}</h1>
                    <h2 className="body-xl">{subhead}</h2>
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
    </>
  )
}

export default PageHeader