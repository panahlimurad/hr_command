import React from 'react'
import styles from './style.module.css'

function SaveButton({text}) {
  return (
    <>
        <button className={styles.container}>{text}</button>
    </>
    
  )
}

export default SaveButton