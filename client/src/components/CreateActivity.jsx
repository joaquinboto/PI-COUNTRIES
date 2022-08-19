import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useDispatch , useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import { getAllCountries } from '../store/actions'

export default function CreateActivity() {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getAllCountries())
    }
    ,[dispatch])
 
  return (
      <div>
        <NavBar/>
        <div>
            <h1>Create Activity</h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Dificultad" />
                <input type="number" placeholder="Duracion" />
                <select name="Temporada" id="">
                    <option value="">Temporada</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                </select>
                <select name="Pais" id="">
                    <option value="">Seleccione un Pais</option>
                    {countries.map(country => {
                        return (
                            <option value={country.cca3} key={country.cca3}>{country.nombre}</option>
                        )
                    })}
                </select>
                <input type="submit" value="Create" />
            </form>
        </div>
    </div>
  )
}
