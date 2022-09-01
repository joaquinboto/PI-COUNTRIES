import React from 'react'
import Card from '../components/Card'
import Paginado from '../components/Paginado'
import NavBar from '../components/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCountries, setPage , filterCountriesByRegion , orderByName , orderByPopulation ,getNameCountry , getAllActivities, filterActivity } from '../store/actions'
import { useEffect, useState  } from 'react'
import '../css/home.css'


export default function Home() {
  const dispatch = useDispatch()
  const allCountries = useSelector ((state)=> state.countries)
  const currentPage = useSelector ((state)=> state.currentPage)
  const allActivities = useSelector ((state)=> state.activities)
  const allFilters = useSelector ((state)=> state.allFilters)
  const [loading] = useState(true)


  //Paginado
  const total = allCountries.length;
  const maxPage = Math.floor(total/10) + 1;

  function nextPage() {
    dispatch(setPage(currentPage < maxPage ? currentPage + 1 : currentPage));
  }
  function previousPage() {
    dispatch(setPage(currentPage > 1 ? currentPage - 1 : currentPage))
  }

  function firstPage() {
    dispatch(setPage(1))
  }

  function lastPage() {
    dispatch(setPage(maxPage))
  }

  function buttonLeft() {
    return currentPage === 1 ? ' ' : <button className='btnPaginado' onClick={previousPage}>{'Previous'}</button>
  }
  function buttonRight() {
    return currentPage === maxPage ? ' ' : <button className='btnPaginado' onClick={nextPage}>{'Next'}</button>
  }

  function buttonFirst() {
    return currentPage === 1 ? ' ' : <button className='btnPaginado' onClick={firstPage}>{'First'}</button>
  }

  function buttonLast () {
    return <button className='btnPaginado' onClick={lastPage}>Last</button>
  }

  const currentCountries = allCountries.slice(currentPage === 1 ? 0 : currentPage * 10-11, currentPage * 10 - 1);



  useEffect(()=>{
    dispatch(getAllCountries());
    dispatch(getAllActivities())
  },[dispatch]);
  



  //FilterCountries
  const filterCountries = (e) => {
    let obj = {
      ...allFilters,
      byContinent: e.target.value
    }
      dispatch(setPage(1))
      dispatch(filterCountriesByRegion(obj))
  }

  //SortedCountries
  const sortedCountries = (e) => {
    if(allCountries.length > 0){
      let obj = {
        ...allFilters,
        byName: e.target.value,
      }
    dispatch(orderByName(obj))
    }}

  // Order by Population
  const orderByPopulations = (e) => {
    let obj = {
      ...allFilters,
      byPopulation: e.target.value,
    }
    dispatch(orderByPopulation(obj))
  }

  //Search
  const searchCountries = (e) => {
    dispatch(setPage(1))
    let obj = {
      ...allFilters,
      bySearch: e
    }
    dispatch(getNameCountry(obj))
  }

  //Reset Filters
  const resetFilters = () => {
    dispatch(setPage(1))
    dispatch(getAllCountries())
  }

  //Show Activity
  const showActivity = (e) => {
    let obj = {
      ...allFilters,
      byActivity: e.target.value,
    }
    dispatch(setPage(1))
    dispatch(filterActivity(obj))
  }
 

  return (
    <>
        <NavBar 
        filterCountries={filterCountries}
        sortedCountries={sortedCountries}
        orderByPopulations={orderByPopulations}
        searchCountries={searchCountries}
        resetFilters={resetFilters}
        allActivities={allActivities}
        showActivity={showActivity}
        />
        <div className='cardsContainer'>
          {currentCountries.length > 0 ? <Card countries={currentCountries}
          loading={loading}/> : <p>No se encontro el pais</p> }
          
        </div>
        <div className='barPagination'>
            <Paginado
            buttonLeft = {buttonLeft}
            buttonRight = {buttonRight}
            buttonLast = {buttonLast}
            buttonFirst={buttonFirst}
            currentPage={currentPage}
            />
        </div>
    </>
  )
}


