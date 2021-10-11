import React from 'react';
import { Link } from 'react-router-dom';

import styles from './card.module.css'



function Card ({name, continent, image, area, code}) {
  
    return(
       <div className = {styles.card}>
    
            <h4>{name}</h4>
            <Link to={'/details/' + code}>
           <img  className = {styles.img} src={image} alt="" /> 
            </Link>
           <h5>{area} km2</h5>
          
            <h6>{continent}</h6> 
        </div>
    )
}

export default Card;