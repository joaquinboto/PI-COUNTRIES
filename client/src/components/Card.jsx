import React from 'react'
import Loading from '../components/Loading'
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
              <h1>{country.nombre}</h1>
              <img className="card-icon" src={country.bandera} alt="" srcset="" />
              
              <h3><strong>Continente: </strong>{country.continente}</h3>
          </div>
        )
      })}
    </>
  )
}




