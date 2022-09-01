export const orderByActivity = (array, activity) => {
    // Filtra por actividad turística
        let filter = array.filter((country)=>{
            const activities = country.activities.map((a)=>a.nombre)
            return activities.includes(activity)
        })
        console.log("Resultado filtro: ", filter);
        return filter
  };

  