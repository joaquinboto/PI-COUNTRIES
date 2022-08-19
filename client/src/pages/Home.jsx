import React from 'react'
import Card from '../components/Card'
import Paginado from '../components/Paginado'
import NavBar from '../components/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCountries } from '../store/actions'
import { useEffect, useState  } from 'react'
import '../css/home.css'


export default function Home() {
  const dispatch = useDispatch()
  const allCountries = useSelector ((state)=> state.countries)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPrePage] = useState(10)
  const [loading] = useState(true)
  const indexOfLastCountries = currentPage * countriesPrePage
  const indexOfFirstCountries = indexOfLastCountries - countriesPrePage
  const currentCountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries)

  const paginado = (pageNumber)=> {
   setCurrentPage(pageNumber)
  } 

  useEffect(()=>{
    dispatch(getAllCountries());
   },[dispatch]);


  return (
    <>
        <NavBar />
        <div className='cardsContainer'>
           <Card countries={currentCountries} 
           loading={loading} />
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


