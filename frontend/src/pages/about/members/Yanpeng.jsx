import React from 'react'
import Lauren from '../../../asset/yan.jpg'
import { useNavigate } from 'react-router-dom'
import './yan.css'

const Yanpeng = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
    //   navigate(-1);
  }
  return (
    <div className='yanpeng-container'>
      <div className='overlay-text'> Welcome Yan Peng&apos;s Page</div>
      <img src={Lauren} alt= 'Yan' className= 'yanpeng-image' />
      <div className='yanpeng-text'>
        <h2>Yan Peng</h2>
        <h2>Role: Backend Developer</h2>
        <h2>About Me:</h2>
        <p>
          I&apos;m Originally from China, I have a passion for exploring diverse
          cultures and cuisines. In my free time, you&apos;ll often find me engrossed
          in TV shows, getting lost in the pages of a good book, or creating
          culinary delights in the kitchen. I believe that every day is an
          opportunity for new discoveries, and I&apos;m excited to embark on this
          journey of learning and growth.
        </p>

      </div>
      <p className='back back-link' onClick={goBack}>
        Back
      </p>
    </div>
  )
}

export default Yanpeng
