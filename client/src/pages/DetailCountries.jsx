import React, { useEffect } from 'react'
import '../css/cards.css'
import { useParams , Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailCountry } from '../store/actions'

export default function DetailCountries() {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
      dispatch(getDetailCountry(id));
  },[dispatch, id]);

    const countries = useSelector(state => state.detail)

  return (
    countries ? (
      <div>
        <div className="card">
          <h1>{countries.nombre}</h1>
          <img className="card-icon" src={countries.bandera} alt="" srcset="" />
          <h3><strong>Continente: </strong>{countries.continente}</h3>
          <h3><strong>Población: </strong>{countries.poblacion}</h3>
          <h3><strong>Area: </strong>{countries.area}</h3>
        </div>
        <Link to={"/home"}><button>Volver</button></Link>
      </div>
      ) : (<div>'Loading...'</div>)
  )
}

