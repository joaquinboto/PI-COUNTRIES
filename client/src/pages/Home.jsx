import React from 'react'
import Card from '../components/Card'
import Paginado from '../components/Paginado'
import NavBar from '../components/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCountries,  filterCountriesByRegion , orderByName , orderByPopulation  ,getNameCountry } from '../store/actions'
import { useEffect, useState  } from 'react'
import '../css/home.css'


export default function Home() {
  const dispatch = useDispatch()
  const allCountries = useSelector ((state)=> state.countries)
  const [loading , setLoading] = useState(true)


  //Paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPrePage] = useState(10)
  const indexOfLastCountries = currentPage * countriesPrePage
  const indexOfFirstCountries = indexOfLastCountries - countriesPrePage
  const currentCountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries)
  const paginado = (pageNumber)=> {
   setCurrentPage(pageNumber)
  } 


  useEffect(()=>{
    dispatch(getAllCountries());
  },[dispatch]);
  


  //FilterCountries
  const filterCountries = (e) => {
      dispatch(filterCountriesByRegion(e.target.value))
      setCurrentPage(1)
  }

  //SortedCountries
  const [order, setOrder] = useState('');
  const sortedCountries = (e) => {
    if(allCountries.length > 0){
    dispatch(orderByName(e.target.value))
    setOrder(e);
    setCurrentPage(1)}
  }

  // Order by Population
  const [population, setPopulation] = useState('');
  const orderByPopulations = (e) => {
    dispatch(orderByPopulation(e.target.value))
    setPopulation(e);
  }

  //Search
  const searchCountries = (e) => {
    dispatch(getNameCountry(e))
  }

  //Reset Filters
  const resetFilters = () => {
    dispatch(getAllCountries())
    setOrder('')
    setPopulation('')
    setCurrentPage(1)
  }
 

  return (
    <>
        <NavBar 
        filterCountries={filterCountries}
        sortedCountries={sortedCountries}
        orderByPopulations={orderByPopulations}
        searchCountries={searchCountries}
        resetFilters={resetFilters}
        />
        <div className='cardsContainer'>
          <Card countries={currentCountries}
          loading={loading}/>
        </div>
        <div className='barPagination'>
            <Paginado
            countriesPerPage={countriesPrePage}
            allCountries = {allCountries.length}
            paginado = {paginado}
            />
        </div>
    </>
  )
}


