import {
    GET_CAREERS,
    GET_COUNTRIES
} from "../constants/";

const initialState = {
    carrers : [],
    countries : []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CAREERS:
            return {
                ...state,
                carrers : [...action.payload]
            }
        case GET_COUNTRIES:
            return {
                ...state,
                countries : [...action.payload]
            }
        default: return state;
    };

};

export default rootReducer;