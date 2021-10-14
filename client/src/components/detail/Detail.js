import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { getById } from '../../redux/actions';
import styles from './detail.module.css';



export default function Details (props) {
    const dispatch = useDispatch();
    const {id} = props.match.params;
    const details = useSelector((state) => state.details);
    
    useEffect(() => {
        dispatch(getById(id))
      }, [id, dispatch]);
      

      
    return (
      <div>
         { details? 
         <div>
                <div>
                <h1 className={styles.color}>{details.name}</h1>
                </div>
                <a href= {details.map}> Map </a>
                <div  >
                <img className = {styles.img} src={details.flag}  alt="Flag not found"></img>
                </div>
                <div  className = {styles.border}>
                <h4>capital</h4>
                <h3>{details.capital}</h3>
                <h4>continent</h4>
                <h3>{details.continent}</h3>
                <h4>subcontinent</h4>
                <h3>{details.subregion}</h3>
                <h4>area</h4>
                <h3>{details.area} Km2</h3>
                
                </div>
                <div> 
                </div>
                <h1 className={styles.color}>Tourist Activities</h1>
                <div>
                { (details.activities && details.activities.length) ?
                details.activities.map(e => (
                <div className = {styles.border2}>
                <span>
                <h2 >{e.name}</h2>
                <div >
                <h5 className={styles.position}>duration:</h5>
                <h3 className={styles.position}>{e.duration} minutes</h3>
                </div>
                <div>
                <h5 className={styles.position}>level of difficulty (1-5):</h5>
                <h3 className={styles.position}>{e.difficulty}</h3>
                </div>
                <div>
                <h5 className={styles.position}>preferable season:</h5>
                <h3 className={styles.position}>{e.season}</h3>
                </div>
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