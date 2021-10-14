import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getByName } from '../../../redux/actions';
import styles from './searchbar.module.css';


function SearchBar () {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
   

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleName(e) {
        e.preventDefault();
        dispatch(getByName(name));
        setName("");
    }

    function handleKey(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dispatch(getByName(name));
            setName("");
            } 
    }

    return (
        <div>
            <span className = {styles.search}>
            <input  className={styles.inputs} type='text' placeholder=' Brazil / China / France  🌎' 
            value = {name} onChange={handleChange} onKeyDown={handleKey}></input>
            <button  className={styles.button} type='submit' onClick={handleName}>🔍</button>
            </span>
              
        </div>
    )
    
}

export default SearchBar;