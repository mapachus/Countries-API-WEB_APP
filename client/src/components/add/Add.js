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

    function validate (input) {
        let errors = {};
        if (!input.name) {
            errors.name = "a name is required.";
        } else if (!input.difficulty|| input.difficulty<0 || input.difficulty>5) {
            errors.difficulty = "choose between 1 through 5.";
        } else if (!input.duration) {
            errors.duration = "Determine how many minutes, in average, the activity requires.";
        } else if (!input.season) {
            errors.season = "choose the preferable season or seasons for the activity.";
        } 
        return errors;
    }

  const [errors, setErrors] = useState({});
  const [visibility, setVisibilty ] = useState(false)
  let [error, setError] = useState(true);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }))
         setVisibilty(false)
    };

    function handleCheck(e) {
            setInput({
                ...input,
                season:input.season.concat(" ").concat(e.target.value)
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
                    {errors.name && (<p>{errors.name}</p>)}
                    </div>
                </div>
                <div className = {styles.divs}>
                    <label>difficulty:</label>
                    <div>
                    <input className={styles.inputs}  type='number' min="1" max="5" value={input.difficulty} name='difficulty'
                     required="required" placeholder="1-5" onChange={handleChange}>  
                    </input>
                    {errors.difficulty ?<p>{errors.difficulty}</p> : null}
                    </div>
                </div>
                <div className = {styles.divs}>
                    <label>duration:</label>
                    <div>
                    <input className={styles.inputs} type='number' min="1" value={input.duration} name='duration'
                      required="required" placeholder="minutes" onChange={handleChange}>  
                    </input>
                    {errors.duration ?<p>{errors.duration}</p> : null}
                    </div>
                </div>
                <div className = {styles.divs}>
                    <label>season:</label>
                    <div>
                    <label>
                        <input type='checkbox' name='Summer' value='Summer'
                        onChange={e => handleCheck(e)} onClick= {()=>setError(false)}>
                    </input>Summer</label>
                    <label>
                        <input type='checkbox' name='Autumn' value='Autumn'
                        onChange={e => handleCheck(e)} onClick= {()=>setError(false)}>
                    </input>Autumn</label>
                    <label>
                        <input type='checkbox' name='Winter' value='Winter'
                        onChange={e => handleCheck(e)} onClick = {()=>setError(false)}>
                    </input>Winter</label>
                    <label>
                        <input type='checkbox' name='Spring' value='Spring'
                        onChange={e => handleCheck(e)} onClick = {()=>setError(false)}>
                    </input>Spring</label>
                    {errors.season && (error) ?<p>{errors.season}</p> : null}
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
                {errors.countries ?<p>{errors.countries}</p> : null}
                <select  onChange={(e) => setInput({...input, countries: [...input.countries,e.target.value]})}  className={styles.inputs}>
                    {
                        allCountries.map(c => (
                            <option className={styles.inputs.divs} value={c.name}> {c.name} </option>
                        ))
                    }
                </select>
                </div>
                <div>
                <button className={styles.button} onClick = {()=>setVisibilty(true)} type='submit' value="submit" disabled = 
                {!(input.name && input.difficulty && input.duration && input.season && input.countries.length>0)}>
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
