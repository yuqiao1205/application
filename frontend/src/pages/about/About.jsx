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
      <h1>About Our Team</h1>
      </div>
      <p className='text'>Team Meeting Schedule: 2 meetings per week</p>
      <p className='text'>Our Communication Channel: Discord</p>
      <p className='text'>Study Schedule: Express/React - Ongoing</p>
      <p className='text'>Our Team Member:</p>
      {/* Render buttons for each team member */}
      <ul className='button-list'>
        <li>
          <Link to='/about/yan_peng'>
            <button className='button'>Yan Peng</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button>2</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button>3</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button>4</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button>5</button>
          </Link>
        </li>
        <li>
          <Link to='/about/yanpeng'>
            <button>6</button>
          </Link>
        </li>
        {/* Add more team members here */}
      </ul>
    </div>
  )
}

export default About
