import React from 'react';
import { Link } from 'react-router-dom';



function Card ({name, continent, image, area, code}) {
  
    return(
        <div >
            <h4>{name}</h4>
            <Link to={'/details/' + code}>
           <img src={image} alt="" width='300px' height='200px'/>
            </Link>
           <h5>{area} km2</h5>
          
            <h6>{continent}</h6> 
        </div>
    )
}

export default Card;