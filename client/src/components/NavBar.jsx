import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

export default function NavBar({filterCountries , sortedCountries , orderByPopulations }) {
  return (
    <>
    <div className="nav">
      <nav className="navbar">
        <ul>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/home'}>
            <li>Countries</li>
          </Link>
          <Link to={'/activity'}>
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
      </select>
      </div>
      <div>
        <h3>Order by Population:</h3>
        <select defaultValue={'DEFAULT'}  id="forPopulation" onChange={(e) => orderByPopulations(e)}>
          <option value="DEFAULT" disabled="disabled">
            ---
          </option>
          <option value="most">
            Most Populated
          </option>
          <option value="least">
            Least Populated
          </option>
        </select>
      </div>
    </div>
    </>
  )
}
