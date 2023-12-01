import React from 'react'
import Header from '../components/Header'

const EducationInfo = (props) => {
  return (
    <div>
        <Header/>
        <div className='form-outer'>
          <form className='form-class'>
            <label htmlFor='name'>Name *</label>
            <input type='text'
                    id='name'
                    placeholder='Name'
                    onChange={props.handleChange}
                    name='name'
                    value={props.name}
            />
            <label htmlFor='email'>Email *</label>
            <input type='text'
                    id='email'
                    placeholder='abcxyz@gmail.com'
                    onChange={props.handleChange}
                    name='email'
                    value={props.email}
            />
            <label htmlFor='phonenumber'>Phone Number</label>
            <input type='text'
                    id='phonenumber'
                    placeholder='01*********'
                    onChange={props.handleChange}
                    name='phonenumber'
                    value={props.phonenumber}
            />
            <label htmlFor='address'>Address</label>
            <input type='text'
                    id='address'
                    placeholder='Address'
                    onChange={props.handleChange}
                    name='address'
                    value={props.address}
            />
            <label htmlFor='hobbies'>Hobbies (max 5)</label>
            <input type='text'
                    id='hobbies'
                    placeholder='Write your hobbies'
                    onChange={props.handleChange}
                    name='hobbies'
                    value={props.hobbies}
            />
            <label htmlFor='image'>Image</label>
            <input type='file'
                    id='image'
                    placeholder='Write your hobbies'
                    onChange={props.handleChange}
                    name='image'
                    value={props.image}
            />
            <div className='button-class'>
              <button className='prev-button'>Prev</button>
              {/* <Link to="/EducationalInfo">
                <button>Click</button>
              </Link> */}
              <button className='next-button' href="./ExperienceInfo.jsx">Next</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default EducationInfo