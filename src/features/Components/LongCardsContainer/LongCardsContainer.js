import React from 'react'
import LongCards from '../LongCards/LongCards'
import styles from './longCardContainer.module.css'
import ScrollableContainer from '../ScroolBarContainer/ScroolBarContainer'

function LongCardsContainer() {
  return (
    <div>
        <ScrollableContainer>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
      </ScrollableContainer>
    </div>
  )
}

export default LongCardsContainer