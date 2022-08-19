import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

export default function NavBar() {
  return (
    <div className="nav">
      <nav className="navbar">
        <ul>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/home'}>
            <li>Countries</li>
          </Link>
          <Link to={'/activity'}>
            <li>Create Activity</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
