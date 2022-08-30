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
  const CountriesBackup = useSelector ((state)=> state.dbBackup)
  const currentPage = useSelector ((state)=> state.currentPage)
  const allActivities = useSelector ((state)=> state.activities)
  const [loading] = useState(true)


  //Paginado
  const countriesToShow = allCountries.length? allCountries : CountriesBackup;
  const total = countriesToShow.length;
  const maxPage = Math.floor(total/10) + 1;

  function nextPage() {
    dispatch(setPage(currentPage < maxPage ? currentPage + 1 : currentPage));
  }
  function previousPage() {
    dispatch(setPage(currentPage > 1 ? currentPage - 1 : currentPage))
  }
  function buttonLeft() {
    return currentPage === 1 ? ' ' : <button className='btnPaginado' onClick={previousPage}>{'Previous'}</button>
  }
  function buttonRight() {
    return currentPage === maxPage ? ' ' : <button className='btnPaginado' onClick={nextPage}>{'Next'}</button>
  }

  const currentCountries = countriesToShow.slice(currentPage === 1 ? 0 : currentPage * 10-11, currentPage*10 - 1);



  useEffect(()=>{
    dispatch(getAllCountries());
    dispatch(getAllActivities())
  },[dispatch]);
  



  //FilterCountries
  const filterCountries = (e) => {
      dispatch(setPage(1))
      dispatch(filterCountriesByRegion(e.target.value))
  }

  //SortedCountries
  const [order, setOrder] = useState('');
  const sortedCountries = (e) => {
    if(allCountries.length > 0){
    dispatch(orderByName(e.target.value))
    setOrder(e);
   
  }
  }

  // Order by Population
  const [population, setPopulation] = useState('');
  const orderByPopulations = (e) => {
    dispatch(orderByPopulation(e.target.value))
    setPopulation(e);
  }

  //Search
  const searchCountries = (e) => {
    dispatch(setPage(1))
    dispatch(getNameCountry(e))
  }

  //Reset Filters
  const resetFilters = () => {
    dispatch(setPage(1))
    dispatch(getAllCountries())
    setOrder('')
    setPopulation('')
  }

  //Show Activity
  const showActivity = (e) => {
    dispatch(setPage(1))
    dispatch(filterActivity(e.target.value))
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
          <Card countries={currentCountries}
          loading={loading}/>
        </div>
        <div className='barPagination'>
            <Paginado
            buttonLeft = {buttonLeft}
            buttonRight = {buttonRight}
            currentPage={currentPage}
            />
        </div>
    </>
  )
}


