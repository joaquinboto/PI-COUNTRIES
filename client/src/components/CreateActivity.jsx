import React, { useEffect , useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/activity.css'
import { getAllCountries , addActivity } from '../store/actions'




export default function CreateActivity() {

    //validacion formulario
    const [form, setForm] = useState({
        nombre: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        countries: [],
    })

    const [errors , setErrors] = useState({error: "error"})

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const activities = useSelector(state => state.activities)

    function validate(input){   
        let errors = {}
        
        if(!input.nombre) {
            errors.nombre = 'Name is required';
        } else if (!(/^[a-zA-Z0-9!Ññ@#$%&*()_ ;:-]*$/.test(input.nombre))) {
          errors.nombre = 'Character no valid';
        } else if (!(/^[a-zA-ZÑñ].*/.test(input.nombre))) {
            errors.nombre = 'Names cant begin with a number'
        }else if (!input.dificultad) {
          errors.dificultad = 'Difficulty is required';
        } else if (input.dificultad > 5 || input.dificultad <= 0) {
            errors.dificultad = 'Numero debe ser menor a 5 y mayor a 0';
        } else if (!input.duracion) {
          errors.duracion = 'Duration is required';
        } else if (!/^\d+$/.test(input.duracion)) {
          errors.duracion = 'Duration must be a number';
        } else if (!input.temporada) {
          errors.temporada = 'Season is required';
        } else if (input.countries.length === 0) {
          errors.countries = 'At least one country is required';
        } else if (activities.find(e => e.nombre === input.nombre)) {
            errors.nombre = `Activity ${input.nombre} already exists`
        }
        console.log('ERROR', errors);
        return errors;
    }

    useEffect(() => {
        dispatch(getAllCountries())
    }
    ,[dispatch])

    const handleChange = (e) => {
        
        
        if(e.target.name === "countries") {
            setForm({
                ...form,
                [e.target.name] : [...form.countries, e.target.value ] 
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
        
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.keys(errors).length === 0) {
            dispatch(addActivity(form))
            alert('Actividad agregada')
        }   else {
            alert('Hay un error')
        }
    }

    

  return (
      <>
        <div className='navbarCreateActivity'>
            <nav>
                <h1>Crear Actividad</h1>
                <Link to={"/home"}><button className='btnHomeCreate'>Home</button></Link>
            </nav>
        </div>
        <div className="ActivityContainer">
            <h1 style={{color: 'white'}}>Create Activity</h1>
            <form action="" onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label >Nombre:</label>
                    <input type="text" name='nombre' onChange={ (e) => handleChange(e)} placeholder="Name" />
                </div>
                <div>
                    <label >Dificultad:</label>
                    <input type="number" name='dificultad' onChange={ (e) => handleChange(e)} max="5" min="1" placeholder="Dificultad" />
                </div>
                <div>
                    <label >Duracion:</label>
                    <input type="number" name='duracion' onChange={ (e) => handleChange(e)} placeholder="Duracion" />
                </div>
                <div>
                    <label>Temporada</label>
                    <select defaultValue={'DEFAULT'} onChange={(e) => handleChange(e)} name="temporada" id="season">
                        <option value="DEFAULT" disabled="disabled">
                        Seleccione temporada
                        </option>
                        <option value="Primavera">Primavera</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                    </select>
                </div>
                <div>
                    <label>Paises</label>
                    <select defaultValue={'DEFAULT'} onChange={(e) => handleChange(e)}  name="countries" id="">
                        <option value="DEFAULT" disabled="disabled">
                        Seleccione Pais
                        </option>
                        {countries.map(country => {
                            return (
                                <option value={country.cca3} key={country.cca3}>{country.nombre}</option>
                            )
                        })}
                    </select>
                </div>
                <input className='btnInputCreate' type="submit" value="Create" />
            </form>
        </div>
            <div className='cardActivity'>
                <section className='sectionCard'>
                    <h1>Actividad:</h1>
                    <div><strong>Nombre:</strong> {form.nombre} </div>
                    <div><strong>Dificultad: </strong>{form.dificultad}  </div>
                    <div><strong>Duracion:</strong> {form.duracion} min </div>
                    <div><strong>Temporada: </strong>{form.temporada}</div>
                    <div><strong>Codigo Pais:</strong> {form.countries.map(country => {
                        return (
                            <li key={country}>
                                <Link style={{color: 'white'}} to={`/detail/${country}`} target="_blank">{country}</Link>
                            </li>
                        )
                    })}</div>
                </section>
            </div>
    </>
  )
}
