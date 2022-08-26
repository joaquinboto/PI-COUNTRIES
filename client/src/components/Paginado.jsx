import React from 'react'
import '../css/pagination.css'

export default function Paginado ({buttonRight, buttonLeft, currentPage}) {
   
    return(
        <nav className='navPagination'>
              <div className="buttons">{buttonLeft()} <strong className="page"> {currentPage} </strong> {buttonRight()}</div>
        </nav>
    )
}