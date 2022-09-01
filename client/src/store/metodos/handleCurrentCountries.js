import { orderByName } from "./orderByName";
import { orderByContinent } from "./orderByContinent";
import { orderByPopulation } from "./orderByPopulation";
import { orderByActivity } from "./orderByActivity";
import {  searchCountry } from "./searchCountry";


export const handleCurrentCountries = (countries, payload) => {
    let currentCountries = countries;

    
    if (payload.byName.length > 0) {
      currentCountries = orderByName(currentCountries, payload.byName);
    }
  
    if (payload.byContinent.length > 0) {
      currentCountries = orderByContinent(currentCountries, payload.byContinent);
    }
  
    if (payload.byActivity.length > 0) {
      currentCountries = orderByActivity(currentCountries, payload.byActivity);
    }
  
    if (payload.byPopulation.length > 0) {
      currentCountries = orderByPopulation(currentCountries, payload.byPopulation);
    }
    if(payload.bySearch.length > 0) {
        currentCountries = searchCountry(currentCountries, payload.bySearch);
    }

    return currentCountries;
  };