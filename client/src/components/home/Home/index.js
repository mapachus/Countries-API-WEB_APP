import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getByContinent, getCountries, orderByAlphabet, orderByArea, getActivities, getByActivity } from '../../../redux/actions';

import Card from '../Card';
import Paginado from '../Paginado';
import SearchBar from '../SearchBar';
import styles from './home.module.css';

export default function Home() {

const dispatch = useDispatch();
const allCountries = useSelector((state) => state.countries);
const allActivities = useSelector((state) => state.activities.map(a=> a.name));

const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage, setCountriesPerPage] = useState(9);
const indexLastCountry = currentPage * countriesPerPage;
const indexFirstCountry = indexLastCountry - countriesPerPage;
const page = allCountries.slice(indexFirstCountry, indexLastCountry);

const [order, setOrder] = useState('');

    useEffect (() => {
        dispatch(getCountries());
        },[dispatch])

    useEffect(() => {
        dispatch(getActivities())
        }, [dispatch]);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
        };
        
        function handleAlphabet(e) {
            e.preventDefault();
            dispatch(orderByAlphabet(e.target.value));
            setCurrentPage(1);
            setOrder(`Ordenado ${e.target.value}`);
            };
        function handleArea(e) {
            e.preventDefault();
            dispatch(orderByArea(e.target.value));
            setCurrentPage(1);
            setOrder(`Ordenado ${e.target.value}`);
            };
        function handleContinent (e) {
            e.preventDefault();
            dispatch(getByContinent(e.target.value));
            setCurrentPage(1);
            setOrder(`Ordenado ${e.target.value}`);
            };
        function handleReset (e) {
            e.preventDefault();
            dispatch(getCountries());
            setCurrentPage(1);
            }
        
        function handleActivities (e) {
            console.log("dispatch act", e.target.value);
            e.preventDefault();
            dispatch(getByActivity(e.target.value));
            setCurrentPage(1);
             }
    
    return(
        <div className={styles.all}>
        <div  className={styles.searchbar}>
      
        <SearchBar/>
        <label>filter by:</label>
        <select  className={styles.inputs}
                 onChange={handleAlphabet}>
                    <option className={styles.inputs} value='Asc' > ALPHABET  </option>
                    <option className={styles.inputs} value='Asc'>A - Z</option>
                    <option className={styles.inputs} value='Desc'>Z - A</option>
        </select>
        <select  className={styles.inputs}
                 onChange={handleArea}>
                    <option className={styles.inputs} value='sArea'> SIZE </option>
                    <option className={styles.inputs} value='bArea'>Smaller</option>
                    <option className={styles.inputs} value='sArea'>Bigger</option>
        </select>
        <select  className={styles.inputs}
                onChange={handleContinent} >
                    <option className={styles.inputs} value="all" > CONTINENT </option>
                    <option className={styles.inputs} value="Africa">Africa</option>
                    <option className={styles.inputs} value="Americas">America</option>
                    <option className={styles.inputs} value="Asia"> Asia </option>
                    <option className={styles.inputs} value="Antarctic"> Antarctica </option>
                    <option className={styles.inputs} value="Europe"> Europe </option>
                    <option className={styles.inputs} value="Oceania"> Oceania </option>
        </select>
        <select  className={styles.inputs}
                 onChange={handleActivities}>
                   <option value="all" className={styles.inputs}> ACTIVITIES </option>
                    {
                        allActivities.map(a => (
                            <option className={styles.inputs} value={a}>{a}</option>
                        ))
                    }
                </select> 
            <button className={styles.button} onClick={handleReset} >Reset</button>
            <Link to='/Add'> <button className={styles.button2} >Add Activity</button></Link> 
        </div>
        {page?.map((c) => {
        return(
            <div className={styles.cards}>
            <Card name={c.name} image={c.flag} continent={c.continent} area={c.area} code={c.code}key={c.id}></Card>
            </div>
        )})}
        <div className={styles.paginas}>
        <Paginado paginado={paginado} 
         allCountries={allCountries.length} countriesPerPage={countriesPerPage}
        ></Paginado>
        </div>
        </div>
    )

}