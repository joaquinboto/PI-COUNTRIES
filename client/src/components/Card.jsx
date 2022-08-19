import React from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import '../css/cards.css'

export default function Card({ countries, loading })  {

    if (loading && countries.length === 0) {
        return <Loading />
    }

  return (
    <>
      {countries.map(country => {
        return (
          <div className="card" key={country.cca3}>
              <div style={{width: '100%' , height: '100%'}}>
                <img className="card-icon" src={country.bandera} alt="" srcset="" />
              </div>
              <div className='divisor'>

              </div>
              <div className="card-title">
                <h2>{country.nombre}</h2>
                <p>Capital: {country.capital}</p>
                <Link to={`/detail/${country.cca3}`}>
                  <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Learn More</span>
                </button>
                </Link>
              </div>
          </div>
        )
      })}
    </>
  )
}





