import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";
export const ORDER_BY_AREA = "ORDER_BY_AREA";
export const GET_BY_CONTINENT = "GET_BY_CONTINENT";
export const GET_BY_ID = "GET_BY_ID";

export function getCountries() {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES, 
            payload: json.data
        })
    }
}

export function getByName(name) {
    return async function(dispatch) {
       
            const json = await axios.get('http://localhost:3001/countries?name=' + name );
            return dispatch({
                type: GET_BY_NAME,
                payload: json.data
            });
    }
}
export function orderByAlphabet(payload) {
    console.log(payload)
    return {
        type: ORDER_BY_ALPHABET,
        payload
    }
}

export function orderByArea(payload) {
    return {
        type: ORDER_BY_AREA,
        payload: payload
    };
};


export function getByContinent(payload) {
    
    return async function(dispatch) {
        return dispatch ({ 
        type : GET_BY_CONTINENT,
        payload: payload
        })
    }
}
export function getById(id) {
    console.log("action id ", id)
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/countries/' + id);
        json = json.data
        console.log("action id json", json)
        return dispatch({
            type: GET_BY_ID,
            payload: json
        
        });
};
};

