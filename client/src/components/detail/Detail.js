import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { getById } from '../../redux/actions'



export default function Details (props) {
    const dispatch = useDispatch();
    const {id} = props.match.params;
    const details = useSelector((state) => state.details);
    

    useEffect(() => {
        console.log("dispacth id", id)
        dispatch(getById(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    

    return (
      <div>
        {typeof details === "object"?
         <div>
            <div >
             <h2>{details[0].name}</h2>
            </div>
            <div >
                <div  >
                <img src={details[0].image}  alt="Not found"></img>
                </div>
                <div>
                <h4>{details[0].capital}</h4>
                <h4>{details[0].continent}</h4>
                <h4>{details[0].subregion}</h4>
                <h4>{details[0].area}</h4>
                <h4>{details[0].activities}</h4>
                </div>
              </div>  
            <div >
              <Link to ='/home'> <button > Home </button></Link>
            </div>
        </div> : <div> loading </div>
        }
    </div>
    )
}