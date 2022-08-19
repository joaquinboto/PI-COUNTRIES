import React from 'react'
import { Link } from 'react-router-dom'
import '../css/landing.css'


export default function LandingPage() {
  return (
    <div className="landing-page">
          <h1>Bienvenido</h1>
          <h2>Aquí podrás encontrar todos los países de la tierra</h2>
          <button className='btnLanding'>
              <Link to="/home">Ingrese</Link>
          </button>
    </div>
  )
}
