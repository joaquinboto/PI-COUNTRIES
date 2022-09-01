export const orderByPopulation = (array , byPopulation) => {

    const orderedCountriesPopulation =  array.sort((a, b) => {
        if (byPopulation === 'least') {
          if (a.poblacion < b.poblacion) {
            return -1;
          } else if (a.poblacion > b.poblacion) {
            return 1;
          } else {
            return 0;
          }
        } else if (byPopulation === 'most') {
          if (a.poblacion > b.poblacion) {
            return -1;
          } else if (a.poblacion < b.poblacion) {
            return 1;
          } else {
            return 0;
          }
        }
        return "orderer"
      });
    return orderedCountriesPopulation
}
