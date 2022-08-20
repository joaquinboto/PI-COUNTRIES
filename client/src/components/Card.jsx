import React from 'react'
// import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import '../css/cards.css'

export default function Card({ countries })  {



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
                  <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
                </Link>
              </div>
          </div>
        )
      })}
    </>
  )
}





