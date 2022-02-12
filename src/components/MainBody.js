import React from 'react'
import Appointment from './Appointment'
import './main.css'

function MainBody() {
  return (
    <div className='center'>
        <h1>Welcome to HelpDesk</h1>
        <h3>AIIMS, New Delhi</h3>
        <Appointment />
    </div>
  )
}

export default MainBody