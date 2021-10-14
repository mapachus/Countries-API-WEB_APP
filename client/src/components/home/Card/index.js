import React from 'react';
import { Link } from 'react-router-dom';

import styles from './card.module.css'



function Card ({name, continent, image, population, code, key}) {

    population = population/1000000

  
    return(
       <div className = {styles.card}>
            <h2>{name}</h2>
            <Link to={'/details/' + code}>
           <img  className = {styles.img} src={image} alt="" /> 
            </Link>
            <h3>{continent}</h3>
            <div>
            <h3 className={styles.margin}>{population}</h3>
            <h4 className={styles.margin2}>million people</h4>
            </div>
        </div>
    )
}

export default Card;