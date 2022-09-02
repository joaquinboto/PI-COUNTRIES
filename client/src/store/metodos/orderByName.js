export const orderByName = (array, byName) => {
  console.log("orderbyName" , array , byName)
  const orderedCountries = array.sort((a, b) => {
    if (byName === 'asc') {
      if (a.nombre < b.nombre) {
        return -1;
      } else if (a.nombre > b.nombre) {
        return 1;
      } else {
        return 0;
      }
    } else if (byName === 'desc') {
      if (a.nombre > b.nombre) {
        return -1;
      } else if (a.nombre < b.nombre) {
        return 1;
      } else {
        return 0;
      }
    } else if (byName === 'least') {
      if (a.poblacion < b.poblacion) {
        return -1;
      } else if (a.poblacion > b.poblacion) {
        return 1;
      } 
    } else if (byName === 'most') {
      if (a.poblacion > b.poblacion) {
        return -1;
      } else if (a.poblacion < b.poblacion) {
        return 1;
      } 
    }
    return 'Order';
  });

  return orderedCountries;

};

