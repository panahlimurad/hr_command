import React from 'react';
import styles from './scroll.module.css'

const ScrollableContainer = ({ children, y }) => {
  return (
    <div className={y ? styles.containerY : styles.containerX}>
      {children}
    </div>
  );
};

export default ScrollableContainer;