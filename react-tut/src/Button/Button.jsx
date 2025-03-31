import React from 'react'
import styles from './Button.module.css'

export default function Button() {
  // InLine styles
  const cssStyles = {
    button: {
      backgroundColor: 'blue',
      color: 'red',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
  }

  return (
    <>
    <button className={styles.button}>Click Me</button>
    <button style={cssStyles}>Click Me</button>
    </>

  );
}
