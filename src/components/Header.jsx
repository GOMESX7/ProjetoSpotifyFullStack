import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className='header'>
    <Link to='/'>
        <div className='grow'>
        <img src="../src/assets/logo/spotify-logo.png" alt="Logo-spotify" />
        </div>
    </Link>

    <div className='grow'>
        <Link to='/'>
        <h1>Spotify</h1>
        </Link>
    </div>
    </div>
  )
}

export default Header
