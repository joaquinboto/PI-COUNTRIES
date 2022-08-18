const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { Country , Activity} = require('../db')

router.get('/' , async (req, res) => {
    const {name} = req.query
    const allDB = await Country.findAll()

    try {
        // Get the country from the api endpoint
        const allCountries = await axios.get('https://restcountries.com/v3/all')

        !allDB.length && (await Country.bulkCreate(
        allCountries.data.map((e) => {
            return {
                    cca3: e.cca3,
                    nombre: e.name.common,
                    bandera: e.flags[0],
                    continente: e.continents,
                    capital: e.capital || ["No tiene capital"],
                    subregion: e.subregion,
                    area: Number(e.area),
                    poblacion: Number(e.population)
                }
        })))

        let resultado = name ? await Country.findAll({
            where: {
                nombre: name
            }
        }) : await Country.findAll()

        return res.json(resultado)

    } catch (error) {
        return res.status(404).json(error)
    }
})



router.get('/:id' , async (req, res) => {
    const { id } = req.params
    try {
        let pais = await Country.findByPk(id)
        if (pais === null) {
            return res.status(404).json({error: 'No se encontro el pais'})
          } else {
            return res.status(201).json(pais)
          }
    } catch (error) {
       return res.status(404).json(error)
    }
})


module.exports = router;





