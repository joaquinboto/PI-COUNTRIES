const initialState = {
    allCountries: [],
    activities : [],
    countries: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state, 
                allCountries: action.payload,
                countries: action.payload
            }
            
    case 'GET_DETAIL_COUNTRY':
        return {
            ...state,
            detail: action.payload
        }

    default: return state    
    }
}
export default rootReducer;