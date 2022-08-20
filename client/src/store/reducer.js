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
            const regionFilter = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continente[0] === action.payload)
        return {
            ...state,
            countries: regionFilter
        }
    
    case 'ORDER_BY_NAME': 
    const countriesToOrder = state.countries;
    const orderedCountries = countriesToOrder.sort((a, b) => {
      if (action.payload === 'asc') {
        if (a.nombre < b.nombre) {
          return -1;
        } else if (a.nombre > b.nombre) {
          return 1;
        } else {
          return 0;
        }
      } else if (action.payload === 'desc') {
        if (a.nombre > b.nombre) {
          return -1;
        } else if (a.nombre < b.nombre) {
          return 1;
        } else {
          return 0;
        }
      }
      return 'Ordered';
    });
    return {
      ...state,
      countries: orderedCountries,
    };

    case 'ORDER_BY_POPULATION' :
    const countriesToOrderPopulation = state.countries;
    const orderedCountriesPopulation =  countriesToOrderPopulation.sort((a, b) => {
        if (action.payload === 'least') {
          if (a.poblacion < b.poblacion) {
            return -1;
          } else if (a.poblacion > b.poblacion) {
            return 1;
          } else {
            return 0;
          }
        } else if (action.payload === 'most') {
          if (a.poblacion > b.poblacion) {
            return -1;
          } else if (a.poblacion < b.poblacion) {
            return 1;
          } else {
            return 0;
          }
        }
        return countriesToOrderPopulation;
      });
      return {
        ...state,
        countries: orderedCountriesPopulation,
      };


    default: return state    
    }
}
export default rootReducer;