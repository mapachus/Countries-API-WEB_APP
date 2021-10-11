import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { postActivity, getCountries } from '../../redux/actions';
import styles from './add.module.css';


export default function Add () {

const dispatch = useDispatch();
const allCountries = useSelector(state => state.countries)
const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season:'',
        countries: []
    });

const [visibility, setVisibilty ] = useState(false)

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postActivity(input))
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season:'',
            countries: []
        });
       
    };

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    function handleRemove (e) {
        setInput({
          ...input,
          countries: input.countries.filter(el => el !== e )
        })
      }
      

    return(
        <div className={styles.background}>
            <h2 >Add Activity</h2>
            <form  className = {styles.form} onSubmit={handleSubmit} >
                <div className = {styles.divs}>
                    <label>Name:</label>
                    <div>
                    <input className={styles.inputs} type='text' value={input.name} name='name'
                      required="required" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
                <div className = {styles.divs}>
                    <label>difficulty:</label>
                    <div>
                    <input className={styles.inputs}  type='number' min="1" max="5" value={input.difficulty} name='difficulty'
                     required="required" placeholder="1-5" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
                <div className = {styles.divs}>
                    <label>duration:</label>
                    <div>
                    <input className={styles.inputs} type='number' min="1" value={input.duration} name='duration'
                      required="required" placeholder="minutes" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
                <div className = {styles.divs}>
                    <label>season:</label>
                    <div>
                    <input className={styles.inputs} type='text' value={input.season} name='season'
                      required="required" placeholder="Summer, Autumn, Winter, Spring" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
             
                 <div className = {styles.divs}>
                 <label>countries:</label>
                 </div>
                 <div>
                {input.countries.map((c) => 
                <div>  
                 {c}  <button className={styles.button2} onClick ={() => handleRemove(c)}>x</button>
                </div>)}
                <select  onChange={(e) => setInput({...input, countries: [...input.countries,e.target.value]})}  className={styles.inputs}>
                    {
                        allCountries.map(c => (
                            <option className={styles.inputs} value={c.name}> {c.name} </option>
                        ))
                    }
                </select>
                </div> 
                <div>
                <button className={styles.button} onClick = {()=>setVisibilty(true)} type='submit' value="submit" disabled = 
                {!(input.name && input.difficulty  && input.duration && input.season && input.countries)}>
                Add</button> 
                </div> 
                { visibility ? 
                <div>
                <h6> Tourist Activity Added !</h6> 
                </div>
                : null }
               <div>
              <Link to ='/home'> <button className={styles.button}> Home </button></Link>
            </div>
         </form>
        </div>
    );
};
