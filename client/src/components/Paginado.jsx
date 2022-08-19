import React from 'react'
import '../css/pagination.css'
import { Link } from 'react-router-dom'

export default function Paginado ({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = [];

    for ( let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){  
        pageNumbers.push(i)        
    }
    return(
        <nav className='navPagination'>
             <ul className='ulPagination'>
                 { pageNumbers && pageNumbers.map(number =>(           
                 <li className='liPagination' key={number}> 
                    <Link className='aPagination' to={""} onClick={()=> paginado(number)}>{number}</Link>
                 </li>
            ))}
            </ul>
        </nav>
    )
}