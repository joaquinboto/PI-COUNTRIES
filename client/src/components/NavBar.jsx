import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { searchTargetCountry} from '../store/actions'
import '../css/navbar.css'
import { useDispatch, useSelector } from 'react-redux'

export default function NavBar({filterCountries , resetFilters , sortedCountries , orderByPopulations , searchCountries , allActivities , showActivity }) {
  const dispatch = useDispatch()
  const [search , setSearch] = useState('')
  const [ disabled, setDisabled] = useState(true)
  const allFilters = useSelector ((state)=> state.allFilters)
 

  const handleSearch = (e) => {
    let obj = {
      ...allFilters,
      bySearch: e.target.value
    }
    dispatch(searchTargetCountry(obj))
    setSearch(e.target.value)
    if(e.target.value.length > 0){
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <>
    <div className="nav">
      <nav className="navbar">
        <ul className='ulResponsive'>
          <Link className='iResponsive' to={'/'}>
            <li>Home</li>
          </Link>
          <Link className='iResponsive' to={'/home'}>
            <li>Countries</li>
          </Link>
          <Link className='iResponsive' to={'/activity'}>
            <li>Create Activity</li>
          </Link>
        </ul>
      </nav>
    </div>
    <div className='navOptions'>
            <div>
              <h3>Filter by Continents:</h3>
                  <select defaultValue={'DEFAULT'} id="forContinents"onChange={(e) => filterCountries(e)}>
                <option value="DEFAULT" disabled="disabled">
                  ---
                </option>
                <option value="All">All Countries</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="North America">North America</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="Antarctica">Antarctica</option>
                  </select>
            </div>
      <div>
        <h3>Sorted by:</h3>
      <select defaultValue={'DEFAULT'} id="forSorting" onChange={(e) => sortedCountries(e)}>
        <option value="DEFAULT" disabled="disabled">
          ---
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="most">
            Most Populated
          </option>
          <option value="least">
            Least Populated
          </option>
      </select>
      </div>
      <div>
        <input  type="text" onChange={(e) => handleSearch(e)} id="forSearch" placeholder="Search..." />
        <button  className='btnReset_Search' disabled={disabled} type='submit' onClick={() => searchCountries(search)} >Search</button>
      </div>
      <div>
        <button className='btnReset_Search' onClick={() => {
          document.getElementById('forSorting').value = 'DEFAULT'
          document.getElementById('forContinents').value = 'DEFAULT'
          document.getElementById('forSearch').value = ''
          document.getElementById('forActivity').value = 'DEFAULT'
          resetFilters()
          setSearch('')
          setDisabled(true)
        }}>Reset </button>
      </div>
      <div>
        <h3>Activities: </h3>
        <select defaultValue={'DEFAULT'} onChange={(e) => showActivity(e) } name="Activity" id="forActivity">
          <option value="DEFAULT" disabled="disabled">
            ---
          </option>
          {allActivities.map(activity => {
            return (
            <option key={activity.id} value={activity.nombre}>{activity.nombre}</option>
            )
          })}
        </select>
      </div>
    </div>
    </>
  )
}
