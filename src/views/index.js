import React from 'react'
import Title from '../features/mainLanding/Title'
import Forms from '../features/mainLanding/Forms'
import '../styles/mainLanding.css'

const MainLanding = () => {
  return (
    <div id='mainLanding'>
      <Title />
      <div className='darkBackground'></div>
      <Forms/>
    </div>
  )
}

export default MainLanding