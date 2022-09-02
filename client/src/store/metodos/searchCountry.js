export const searchCountry = (array , country) => {
    let nuevoArray = array.filter(e => e.nombre.toUpperCase().includes(country.toUpperCase()))
   
    return nuevoArray
}