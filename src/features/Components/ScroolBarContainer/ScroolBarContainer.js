import React from 'react';
import styles from './scroll.module.css'

const ScrollableContainer = ({ children, maxHeight }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ScrollableContainer;