import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { getById } from '../../redux/actions'



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
         {  details? 
         <div>
            <div >
             <h2>{details.name}</h2>
            </div>
            <div >
                <div  >
                <img src={details.flag}  alt="Not found"></img>
                </div>
                <div>
                <h4>{details.capital}</h4>
                <h4>{details.continent}</h4>
                <h4>{details.subregion}</h4>
                <h4>{details.area}</h4>
                </div>
                { details.activities && details.activities.length ?
                <div>
                <span>
                <h5>{details.activities[0].name}</h5>
                <h5>{details.activities[0].duration}</h5>
                <h5>{details.activities[0].difficulty}</h5>
                <h5>{details.activities[0].season}</h5>
                </span>
                </div>
                : null }
                { details.activities && details.activities.length > 1 ?
                <div>
                <span>
                <h5>{details.activities[1].name}</h5>
                <h5>{details.activities[1].duration}</h5>
                <h5>{details.activities[1].difficulty}</h5>
                <h5>{details.activities[1].season}</h5>
                </span>
                </div>
                : null }
                { details.activities && details.activities.length > 2 ?
                <div>
                <span>
                <h5>{details.activities[2].name}</h5>
                <h5>{details.activities[2].duration}</h5>
                <h5>{details.activities[2].difficulty}</h5>
                <h5>{details.activities[2].season}</h5>
                </span>
                </div>
                : null }
              </div>  
            <div >
              <Link to ='/home'> <button > Home </button></Link>
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
        </div>
    } 
    </div>
    )
}