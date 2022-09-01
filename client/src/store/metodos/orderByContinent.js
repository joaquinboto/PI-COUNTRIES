export const orderByContinent = (array, continente) => {
    // Filtra por continente
    if (continente !== "All") {
      array = array.filter((e) => e.continente[0] === continente);
    }
    return array;
  };