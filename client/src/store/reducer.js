import { handleCurrentCountries } from "./metodos/handleCurrentCountries"

const initialState = {
    dbBackup: [],
    activities : [],
    countries: [],
    currentPage: 1,
    allFilters: {
      byName: '',
      byContinent: 'All',
      byPopulation: '',
      byActivity: '',
      bySearch: '',
    }
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state, 
                dbBackup: [...action.payload],
                countries: [...action.payload]
            }

        case 'GET_DETAIL_COUNTRY':
            return {
                ...state,
                detail: action.payload
            }

            case 'GET_NAME_COUNTRY': {
                return {
                  ...state,
                  allFilters: action.payload.obj,
                  countries: action.payload.data,
                };
              }

        case 'GET_ALL_ACTIVITIES': 
            return {
              ...state,
              activities: action.payload
              }

        case 'POST_ACTIVITY':
            return {
                  ...state,
                  activities: [...state.activities, action.payload],
              };

        case 'SET_PAGE':
            return {
                ...state,
                  currentPage: action.payload
              } 

        case 'FILTER_COUNTRIES_BY_REGION':
            const filterCountry = handleCurrentCountries(state.dbBackup , action.payload)
            return {
                ...state,
                allFilters: action.payload,
                countries: filterCountry
            }
        case 'ORDER_BY_NAME':
          return {
                ...state,
                allFilters: action.payload,
                countries: handleCurrentCountries(state.dbBackup , action.payload)
            };

        case 'ORDER_BY_POPULATION' :
          return {
            ...state,
            allFilters: action.payload,
            countries: handleCurrentCountries(state.dbBackup , action.payload)
          };

            case 'FILTER_ACTIVITY': 
          return {
            ...state,
            allFilters: action.payload,
            countries: handleCurrentCountries(state.dbBackup , action.payload)
            }

        case 'SEARCH_TARGET_COUNTRY':
          return {
            ...state,
            countries: handleCurrentCountries(state.dbBackup , action.payload)
            }

    default: return state    
    }
}
export default rootReducer;