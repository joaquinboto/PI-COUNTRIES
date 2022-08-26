import React from 'react'
import '../css/pagination.css'

export default function Paginado ({buttonRight, buttonLeft, currentPage}) {
   
    return(
    <div className="dvPagination"> {buttonLeft()}
    <strong className="pageNumber">{currentPage}</strong>
    {buttonRight()} </div>
    )
}