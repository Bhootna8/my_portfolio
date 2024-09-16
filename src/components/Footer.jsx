import React from 'react'
import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' footer font-poppins'>
      <hr className='border-slate-200' />
      <div className='footer-container'>
        <p>©️ 2024 <strong>Sonu Kumar</strong> All rights reserved.</p>
      <div className='flex items-center justify-center gap-3'>
        {socialLinks.map((link, i)=> (
          <Link to={link.link} key={i} target='_black'>
            <img src={link.iconUrl} alt={link.name} className='w-6 h-6 object-contain' />
          </Link>
        ))}
      </div>
      </div>

    </footer>
  )
}

export default Footer