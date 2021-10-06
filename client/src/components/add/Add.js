import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { postActivity, getCountries } from '../../redux/actions';


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

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };



    function handleSubmit(e) {
        console.log("dispatch", input)
        e.preventDefault();
        dispatch(postActivity(input))
        alert("Activity added!")
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

  

    return(
        <div>
            <h2 >Add Activity</h2>
            <form  onSubmit={handleSubmit} >
                <div>
                    <label>Name:</label>
                    <div>
                    <input type='text' value={input.name} name='name'
                      required="required" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
                <div>
                    <label>difficulty:</label>
                    <div>
                    <input  type='number' min="1" max="5" value={input.difficulty} name='difficulty'
                     required="required" placeholder="1-5" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
                <div >
                    <label>duration:</label>
                    <div>
                    <input type='number' min="1" value={input.duration} name='duration'
                      required="required" placeholder="minutes" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
                <div >
                    <label>season:</label>
                    <div>
                    <input type='text' value={input.season} name='season'
                      required="required" placeholder="Summer, Autumn, Winter, Spring" onChange={handleChange}>  
                    </input>
                    </div>
                </div>
                {/* <div >
                <label>image:</label>
                <div>
                <input  type="text" value={input.image} name="image" 
                 required="required" placeholder="paste url here" onChange={handleChange}/>
                </div>
                </div> */}
                 <div>
                 <label>countries:</label>
                 </div>
                 <div>
                {input.countries.map((c) => <p> {c}</p>)}
                <select  onChange={(e) => setInput({...input, countries: [...input.countries,e.target.value]})}  >
                    {
                        allCountries.map(c => (
                           
                            <option value={c.name}> {c.name} </option>
                            
                        ))
                    }
                </select>
                </div> 
                <div>
                <button  type='submit' value="submit" 
                disabled={!(input.name && input.difficulty  && input.duration && input.season && input.countries)}
                >Add</button>
                </div> 
               <div>
              <Link to ='/home'> <button > Home </button></Link>
            </div>
         </form>
        </div>
    );
};
