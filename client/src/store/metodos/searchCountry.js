export const searchCountry = (array , country) => {
    console.log(array)
    console.log(country)
    let nuevoArray = array.filter(e => e.nombre.toUpperCase().includes(country.toUpperCase()))
   
    return nuevoArray
}