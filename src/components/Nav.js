import React from 'react'
import { Link } from 'react-router-dom'
import './css/nav.css'
import Logo from '../images/DEE Dreamer.svg'

const Nav = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
  <Link to="/">
        <img className='my-logo' src ={Logo} alt="my logo"/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">

      <div className='navbar-nav'>

      <Link className="nav-link"  to ="/">Home</Link>
      <Link className="nav-link"  to="/about">About</Link>
      <Link className="nav-link"  to="/contact">Contact</Link>
      <Link className="nav-link"  to="/work">Work Experience</Link>
       
      </div>



    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Nav
