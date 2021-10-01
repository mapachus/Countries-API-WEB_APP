import React from "react";



export default function Paginado({paginado, allCountries, countriesPerPage}) {

const pageNumbers = []    

for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
     pageNumbers.push(i)
     }
    
return(
        <nav >
        <span>
        { pageNumbers && 
        pageNumbers.map(number =>(
        <button  href onClick={() => paginado(number)}>{number}</button>
        ))}
        </span>
        </nav>
        )
};

