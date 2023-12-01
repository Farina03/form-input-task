import React from 'react'
import '../pages/universal.css'
import './header.css'

const Header = () => {
  return (
      <div className='header-div'>
        <h1>Registration Form</h1>
        <p className='subtitle'>Please fill out this form with the required information</p>
        <div className='graphics-div'>
            <div className='circle-div'>
              <div className='circle1'><p>1</p></div>
              <hr></hr>
              <div className='circle2'><p>2</p></div>
              <hr></hr>
              <div className='circle3'><p>3</p></div>
            </div>
            <div className='phase-name-div'>
              <div className='phase'>Personal Information</div>
              <div className='phase'>Edicational Information</div>
              <div className='phase'>Experience Information</div>
            </div>
        </div>
    </div>
  )
}

export default Header