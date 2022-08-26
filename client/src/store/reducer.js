const initialState = {
    dbBackup: [],
    activities : [],
    countries: [],
    currentPage:1
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state, 
                dbBackup: action.payload,
                countries: action.payload
            }
            
    case 'GET_DETAIL_COUNTRY':
        return {
            ...state,
            detail: action.payload
        }

    case 'FILTER_COUNTRIES_BY_REGION': 
            const dbBackup = state.dbBackup
            const regionFilter = action.payload === 'All' ? dbBackup : dbBackup.filter(el => el.continente[0] === action.payload)
            
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
      return 'Order';
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

      case 'GET_NAME_COUNTRY': 
      return {
        ...state,
        countries: action.payload
      }
      
      case 'POST_ACTIVITY':
        return {
          ...state,
          activities: [...state.activities, action.payload],
        }

      case 'GET_ALL_ACTIVITIES': 
      return {
        ...state,
        activities: action.payload
      }

      case 'FILTER_ACTIVITY': 
      let filter = state.dbBackup.filter((country)=>{
        const activities = country.activities.map((a)=>a.nombre)
        return activities.includes(action.payload)
    })
    return {
      ...state,
      countries: filter
    }

    case 'SEARCH_TARGET_COUNTRY':
      const target = state.dbBackup
      const nameFilter = target.filter(e => e.nombre.toUpperCase().includes(action.payload.toUpperCase()))

      return {
        ...state,
        countries: nameFilter,
      }

     case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload
      } 

    default: return state    
    }
}
export default rootReducer;