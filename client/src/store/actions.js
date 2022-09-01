import axios from 'axios';


export const getAllCountries = () => async dispatch => {
        try {
            let paises = await axios.get('/countries')
            return dispatch({
                type: 'GET_ALL_COUNTRIES',
                payload: paises.data
            })
        } catch (error) {
            console.log(error)
        }
}

export const getNameCountry = (obj) => async (dispatch) => {
    const nuevoNombre = obj.bySearch[0].toUpperCase() + obj.bySearch.slice(1)
        try {
            let {data} = await axios.get(`/countries?nombre=${nuevoNombre}`)
            return dispatch({
                type: 'GET_NAME_COUNTRY',
                payload: {data , obj}
            })
        } catch (error) {
            if(error.response.status === 404) {
                alert('No se encontro el pais')
               }
        }
}

export const getAllActivities = () => async (dispatch) => {
        try {
            let actividades = await axios.get('/activities')
            return dispatch({
                type: 'GET_ALL_ACTIVITIES',
                payload: actividades.data
            })
        } catch (error) {
            console.log(error)
        }
    
}

export const addActivity = activity => async (dispatch) => {
        try {
            let actividad = await axios.post('/activities', activity)
            return dispatch({
                type: 'POST_ACTIVITY',
                payload: actividad.data
            })
        } catch (error) {
            console.log(error)
        }
}

export const getDetailCountry = (id) => async (dispatch) => {
    try {
        let pais = await axios.get(`/countries/${id}`)
        return dispatch({
            type: 'GET_DETAIL_COUNTRY',
            payload: pais.data
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const filterActivity = (activity) => async (dispatch) => {
    return dispatch({
        type: 'FILTER_ACTIVITY',
        payload: activity
    })
}

export const filterCountriesByRegion = (region) => {
    return {
        type: 'FILTER_COUNTRIES_BY_REGION',
        payload: region
    }
}

export const orderByName = (value) => async (dispatch) => {
    return dispatch({
        type: 'ORDER_BY_NAME',
        payload: value
    })
}

export const searchTargetCountry = (country) => async (dispatch) => {
    return dispatch({
        type: 'SEARCH_TARGET_COUNTRY',
        payload: country
    })
}

export const orderByPopulation = (population) => async (dispatch) => {
    return dispatch({
        type: 'ORDER_BY_POPULATION',
        payload: population
    })
}

export const setPage = (newPage) => async (dispatch) => {
     return dispatch({
        type: 'SET_PAGE',
        payload:newPage
      })
  }




