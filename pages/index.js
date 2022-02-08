import React, { useState } from 'react'
import Navigation from './Nav/Navigation'
import App from './app'
import styles from '../styles/Home.module.css'



export default function Home() {

  return (
    <div className={styles.container} style={{ width: '100vw' }}>
      <Navigation  />
      <App/>
    </div>
  )
}
