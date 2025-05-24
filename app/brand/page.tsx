'use client'

import React, { useState } from 'react'
import typeStyles from '../components/typeStyles.module.css'
import classNames from 'classnames'
import Container from '../components/Container/Container'
import Section from '../components/Section/Section'

function BrandPage() {
  return (
    <Section>
        <Container alignment='flex-start' layout='column' gridColumnWidth={275}>
            <h1 className={classNames(typeStyles.heading1, typeStyles.primary)}>Heading 1</h1>
            <h2 className={classNames(typeStyles.heading2, typeStyles.primary)}>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Paragraph</p>
            <p className={typeStyles.bodyReg}>This is a paragraph with bodyReg class.</p>
        </Container>
    </Section>
  )
}

export default BrandPage