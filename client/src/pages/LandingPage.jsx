import React from 'react'
import { Link } from 'react-router-dom'



export default function LandingPage() {
  return (
    <div className="loading">
          <h1>Bienvenido</h1>
          <h2>Aquí podrás encontrar todos los países de la tierra</h2>
          <button>
              <Link to="/home">Ingrese</Link>
          </button>
    </div>
  )
}
