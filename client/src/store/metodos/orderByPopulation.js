export const orderByPopulation = (array , orderBy) => {

    const orderedCountriesPopulation =  array.sort((a, b) => {
        if (orderBy === 'least') {
          if (a.poblacion < b.poblacion) {
            return -1;
          } else if (a.poblacion > b.poblacion) {
            return 1;
          } else {
            return 0;
          }
        } else if (orderBy === 'most') {
          if (a.poblacion > b.poblacion) {
            return -1;
          } else if (a.poblacion < b.poblacion) {
            return 1;
          } else {
            return 0;
          }
        }
        return array;
      });
    return orderedCountriesPopulation
}
