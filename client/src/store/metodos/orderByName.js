export const orderByName = (array, orderBy) => {
    if (orderBy === "asc") {
      array = array.slice().sort((a, b) => {
        var nameA = a.nombre.toUpperCase();
        var nameB = b.nombre.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (orderBy === "desc") {
      array = array.slice().sort((a, b) => {
        var nameA = a.nombre.toUpperCase();
        var nameB = b.nombre.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    } 
    return array;
  };