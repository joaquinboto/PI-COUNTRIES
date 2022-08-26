import axios from 'axios';


export const getAllCountries = () => {
    return async function ( dispatch) {
        let paises = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: 'GET_ALL_COUNTRIES',
            payload: paises.data
        })
    }
}

export const getNameCountry = (nombre) => {
    const nuevoNombre = nombre[0].toUpperCase() + nombre.slice(1)
    return async dispatch => {
        try {
            let pais = await axios.get(`http://localhost:3001/countries?nombre=${nuevoNombre}`)
            return dispatch({
                type: 'GET_NAME_COUNTRY',
                payload: pais.data
            })
        } catch (error) {
            if(error.response.status === 404) {
             alert('No se encontro el pais')
            }
        }
    }
}

export const searchTargetCountry = (country) => {
    return {
        type: 'SEARCH_TARGET_COUNTRY',
        payload: country
    }
}

export const getAllActivities = () => {
    return async dispatch => {
        let actividades = await axios.get('http://localhost:3001/activities')
        return dispatch({
            type: 'GET_ALL_ACTIVITIES',
            payload: actividades.data
        })
    }
}

export const addActivity = (activity) => {
    return async dispatch => {
        try {
            let actividad = await axios.post('http://localhost:3001/activities', activity)
            return dispatch({
                type: 'POST_ACTIVITY',
                payload: actividad.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDetailCountry = (id) => {
    return async dispatch => {
        let pais = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: 'GET_DETAIL_COUNTRY',
            payload: pais.data
        })
    }
}

export const filterActivity = (activity) => {
    return {
        type: 'FILTER_ACTIVITY',
        payload: activity
    }
}

export const filterCountriesByRegion = (region) => {
    return {
        type: 'FILTER_COUNTRIES_BY_REGION',
        payload: region
    }
}

export const orderByName = (value) => {
    return {
        type: 'ORDER_BY_NAME',
        payload: value
    }
}

export const orderByPopulation = (population) => {
    return {
        type: 'ORDER_BY_POPULATION',
        payload: population
    }
}

export function setPage(newPage){
    return function (dispatch){
      dispatch({
        type: 'SET_PAGE',
        payload:newPage
      })
    }
  }




