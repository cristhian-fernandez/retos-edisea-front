import {
    GET_CAREERS
} from "../constants/index.js";

const initialState = {
    carrers : []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case GET_CAREERS:
            return {
                ...state,
                carrers : [...action.payload]
            }
        default: return state;
    };

};

export default rootReducer;