import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import '../css/cards.css'

export default function Card({ countries , loading })  {

  if (loading && countries.length === 0) {
    return <Loading />
  }

  return (
    <>
      {countries.map(country => {
        return (
          <div className="card" key={country.cca3}>
              <div style={{width: '100%' , height: '100%'}}>
                <img className="card-icon" src={country.bandera} alt="asd" />
              </div>
              <div className="card-title">
                <h2>{country.nombre}</h2>
                <p>Capital: {country.capital}</p>
                <Link to={`/detail/${country.cca3}`}>
                  <button className="btn-detail">Detalle</button>
                </Link>
              </div>
          </div>
        )
      })}
    </>
  )
}





