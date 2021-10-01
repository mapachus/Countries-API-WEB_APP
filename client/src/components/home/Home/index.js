import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getByContinent, getCountries, orderByAlphabet, orderByArea } from '../../../redux/actions';

import Card from '../Card';
import Paginado from '../Paginado';
import SearchBar from '../SearchBar';

export default function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage, setCountriesPerPage] = useState(9);
const indexLastCountry = currentPage * countriesPerPage;
const indexFirstCountry = indexLastCountry - countriesPerPage;
const page = allCountries.slice(indexFirstCountry, indexLastCountry);

const [order, setOrder] = useState('');

    useEffect (() => {
        dispatch(getCountries());
        },[dispatch])

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
    
    return(
        <div>
        <div>
        <SearchBar/>
        <label>filter by:</label>
        <select 
                 onChange={handleAlphabet}>
                    <option value='Asc' > ALPHABET  </option>
                    <option value='Asc'>A - Z</option>
                    <option value='Desc'>Z - A</option>
        </select>
        <select 
                 onChange={handleArea}>
                    <option value='sArea'> AREA </option>
                    <option  value='bArea'>Smaller</option>
                    <option  value='sArea'>Bigger</option>
        </select>
        <select 
                onChange={handleContinent} >
                    <option> CONTINENT </option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia"> Asia </option>
                    <option value="Antarctic"> Antarctica </option>
                    <option value="Europe"> Europe </option>
                    <option value="Oceania"> Oceania </option>
                </select> 
        </div>
        {page?.map((c) => {
        return(
            <div >
            <Card name={c.name} image={c.flag} continent={c.continent} area={c.area} code={c.code}key={c.id}></Card>
            </div>
        )})}
        <div>
        <Paginado paginado={paginado} 
         allCountries={allCountries.length} countriesPerPage={countriesPerPage}
        ></Paginado>
        </div>
        </div>
    )

}