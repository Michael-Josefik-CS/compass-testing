import React from 'react'
import styles from './FieldNotesShowcase.module.css'
import typography from '../../../styles/tokens/typography.module.css'
import Button from '../Button/Button'
import { MdArrowForwardIos } from "react-icons/md";
import CopyBlock from '../atoms/CopyBlock/CopyBlock';
import Card from '../Card/Card';
import HeaderBlock from '../atoms/HeaderBlock/HeaderBlock';

const FieldNotesShowcase = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.featureRow}>
            <div className={styles.textCol}>
                <div className={styles.headerWrapper}>
                    <HeaderBlock size='h6' color='secondary'>Field Notes</HeaderBlock>
                    <h2 className={typography.headingH2}>Title of Artical Goes Here</h2>
                    <div className={styles.meta}>
                        <CopyBlock size='sm' color='secondary'>Month XX, XXXX</CopyBlock>
                        <span className={styles.separator}>|</span>
                        <CopyBlock size='sm' color='secondary'><a href="#">By First Lastname</a></CopyBlock>
                    </div>
                </div>
                <CopyBlock align='left' size='md' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CopyBlock>
                <div className={styles.buttonWrapper}>
                    <Button type='secondary' iconRight={true} icon={<MdArrowForwardIos />}>Read more</Button>
                    <Button type='tertiary'>See all</Button>
                </div>
            </div>
            <div className={styles.imageCol}>
                <img src='../../../assets/img_aurora.jpg' alt="Pyramids of Giza" />
            </div>
        </div>
        <div className={styles.relatedRow}>
            <Card title='Thing' description='description' />
            <Card title='Thing' description='description' />
            <Card title='Thing' description='description' />
        </div>
    </div>
  )
}

export default FieldNotesShowcase