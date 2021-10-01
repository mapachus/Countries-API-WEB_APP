import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getByName } from '../../../redux/actions';


function SearchBar () {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
   

    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)
        
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
            <span >
            <label>search by name: </label>
            <input  type='text' placeholder='arg / china / france' 
            value = {name} onChange={handleChange} onKeyDown={handleKey}></input>
            <button type='submit' onClick={handleName}>🌎</button>
            </span>
              
        </div>
    )
    
}

export default SearchBar;