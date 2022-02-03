import React, { useState } from 'react'
import Navigation from './Nav/Navigation1'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container} >
      <Navigation open={open} setOpen={setOpen}/>
        <div id='home'>

        </div>
    </div>
  )
}
