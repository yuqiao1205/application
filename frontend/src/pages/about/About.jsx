import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-header'>
      <h1>Spring 2024 Software Engineering CSC648</h1>
      <h1>Section 1</h1>
      <h1>Team 1</h1>
      <h1>About Our Team -- F6</h1>
      </div>
      <p className='text'>Team Meeting Schedule: 2 meetings per week</p>
      <p className='text'>Our Communication Channel: Slack</p>
      <p className='text'>Study Schedule: Express/React - Ongoing</p>
      <p className='text'>Our Team Member:</p>
      {/* Render buttons for each team member */}
      <ul className='button-list'>
        <li>
          <Link to='#'>
            <button className='button'>member name</button>
          </Link>
        </li>
        <li>
        <Link to='/about/yan_peng'>
            <button className='button'>Yan Peng</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button className='button'>member name </button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button className='button'>member name</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button className='button'>member name</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button className='button'> member name</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default About
