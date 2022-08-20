import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useDispatch , useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getAllCountries } from '../store/actions'

export default function CreateActivity() {

    //validacion formulario
    const [form, setForm] = React.useState({
        nombre: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        countries: [],
    })


    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getAllCountries())
    }
    ,[dispatch])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
 
  return (
      <>
        <NavBar/>
        <div className="ActivityContainer">
            <h1>Create Activity</h1>
            <form action="" onSubmit={handleSubmit()}>
                <input type="text" onChange={ () => handleChange()} placeholder="Name" />
                <input type="number" onChange={ () => handleChange()} placeholder="Dificultad" />
                <input type="number" onChange={() => handleChange()} placeholder="Duracion" />
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
    </>
  )
}
