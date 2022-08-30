import {
    GET_CAREERS,
    GET_COUNTRIES
} from "../constants/";

import axios from "axios";

const url = 'http://localhost:3001/api';

export const getCareers = () => {
    return async (dispatch) => {
        axios.get(url + '/career')
        .then(responde => {
            
            dispatch({
                type : GET_CAREERS,
                payload : responde.data
            })
        })
        .catch( e => console.log(e)); 
    }
}
export const getCountries = () => {
    return async (dispatch) => {
        axios.get(url + '/country')
        .then(responde => {
            dispatch({
                type : GET_COUNTRIES,
                payload : responde.data
            })
        })
        .catch( e => console.log(e)); 
    }
}