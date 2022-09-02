export const orderByActivity = (array, activity) => {

        let filter = array.filter((country)=>{
            const activities = country.activities.map((a)=>a.nombre)
            return activities.includes(activity)
        })
        console.log("Resultado filtro: ", filter);
        return filter
  };

  