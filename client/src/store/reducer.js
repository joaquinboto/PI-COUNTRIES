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

    case 'FILTER_COUNTRIES_BY_REGION': 
            const allCountries = state.allCountries
            const regionFilter = action.payload === 'All'? allCountries : allCountries.filter(el => el.continents === action.payload)
        return {
            ...state,
            countries: regionFilter
        }
        

    default: return state    
    }
}
export default rootReducer;