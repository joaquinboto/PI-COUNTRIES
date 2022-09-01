export const orderByName = (array, byName) => {
  
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
    }
    return 'Order';
  });

  return orderedCountries;

};

