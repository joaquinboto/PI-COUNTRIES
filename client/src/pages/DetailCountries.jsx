import React, { useEffect } from 'react'
import '../css/detail.css'
import { useParams , Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailCountry } from '../store/actions'
import Loading from '../components/Loading'


export default function DetailCountries() {
    const dispatch = useDispatch()
    const { id } = useParams()


    useEffect(() => {
      dispatch(getDetailCountry(id));
  },[dispatch, id]);

    const countries = useSelector(state => state.detail)


  return (
    countries ? (
      <div className='countrieDetail'>
        <div className="cardDetailDetail">
          <div className="icon">
              <img width="100%" height="100%" src={countries.bandera} alt="asd" />
          </div>
              <strong>{countries.nombre}</strong>
          <div className="cardDetail__body">
              <div><strong>Area: {countries.area}</strong></div>
              <div><strong>Poblacion: {countries.poblacion}</strong></div>
              <div><strong>Capital: {countries.capital}</strong></div>
              <div><strong>Subregion: {countries.subregion}</strong></div>
              <div><strong>Codigo del pais: {countries.cca3}</strong></div>
          </div>
              <span>{countries.activities.length === 0 ? <div><h1>No tiene Actividades</h1><Link to={"/"}>Regresar</Link>  </div> : <div>Actividades: {countries.activities.map(c => {
                return (
                  <div className='infoActivity' key={c.nombre}>
                    <strong>Nombre: {c.nombre}</strong>
                    <strong>Duracion {c.duracion}</strong>
                    <strong>Dificultad: {c.dificultad}</strong>
                    <strong>Temporada: {c.temporada}</strong>
                  </div>
                )
              })}<Link to={"/home"}>Regresar</Link> </div>}
              
              </span>
              
        </div>
      </div>
      ) : (<div>
        <Loading/>
      </div>)
  )
}

