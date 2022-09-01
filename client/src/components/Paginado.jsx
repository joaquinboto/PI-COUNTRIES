import React from 'react'
import '../css/pagination.css'

export default function Paginado ({buttonFirst , buttonRight, buttonLeft, currentPage, buttonLast}) {
   
    return(
    <div className="dvPagination">{buttonFirst()} {buttonLeft()}
    <strong className="pageNumber">{currentPage}</strong>
    {buttonRight()} {buttonLast()}</div>
    )
}