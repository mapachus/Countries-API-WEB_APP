import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { getById } from '../../redux/actions';
import styles from './detail.module.css';



export default function Details (props) {
    const dispatch = useDispatch();
    const {id} = props.match.params;
    const details = useSelector((state) => state.details);
    console.log("details", details)

    
    useEffect(() => {
        dispatch(getById(id))
      }, [id, dispatch]);
      

      
    return (
      <div>
         { details? 
         <div>
                <div>
                <h1>{details.name}</h1>
                </div>
                <div  >
                <img className = {styles.img} src={details.flag}  alt="Not found"></img>
                </div>
                <div  className = {styles.border}>
                <h5>capital</h5>
                <h4>{details.capital}</h4>
                <h5>continent</h5>
                <h4>{details.continent}</h4>
                <h5>subcontinent</h5>
                <h4>{details.subregion}</h4>
                <h5>area</h5>
                <h4>{details.area} Km2</h4>
                </div>
                <h2>Tourist Activities</h2>
                <div>
                { (details.activities && details.activities.length) ?
                details.activities.map(e => (
                <div className = {styles.border2}>
                <span>
                <h5>{e.name}</h5>
                <h6>duration:</h6>
                <h5>{e.duration} minutes</h5>
                <h6>level of difficulty (1-5):</h6>
                <h5>{e.difficulty}</h5>
                <h6>preferable season:</h6>
                <h5>{e.season}</h5>
                </span>
                </div>
                ))
                : null }
              </div>  
            <div >
              <Link to ='/home'> <button className = {styles.button}> Home </button></Link>
            </div>
        </div> 
        :
        <div> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1>
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1> 
        <h1>🌍🌎🌏🌍🌎🌏🌍🌎🌏</h1>
        </div> }
    </div>
     )
}