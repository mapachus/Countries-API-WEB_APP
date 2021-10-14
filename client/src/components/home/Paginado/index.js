import React from "react";

import styles from './paginado.module.css'

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
        <button className={styles.button} key={number} onClick={() => paginado(number)}>{number}</button>
        ))}
        </span>
        </nav>
        )
};

