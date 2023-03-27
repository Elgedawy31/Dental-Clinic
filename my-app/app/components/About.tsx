import React from 'react'
import Box from './Box'
import styles from './box.module.css'
function About() {
  return (
    <div className='mt-20 mb-20'>
        <h1 className='text-4xl text-gray-700 mx-auto w-fit mb-20'>About Us</h1>

        <div className={styles.grid}>
        <Box icon='fa-solid fa-tooth fw-2xl' head ='Caveity Inspection' />
          <Box icon='fa-solid fa-tooth' head ='Caveity Inspection' />
          <Box icon='fa-solid fa-tooth' head ='Caveity Inspection' />
          <Box icon='fa-solid fa-tooth' head ='Caveity Inspection' />
          <Box icon='fa-solid fa-tooth' head ='Caveity Inspection' />
          <Box icon='fa-solid fa-tooth' head ='Caveity Inspection' />
        </div>


    </div>
  )
}

export  {About}