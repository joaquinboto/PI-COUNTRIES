const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { Country , Activity} = require('../db')

router.get('/' , async (req, res) => {
    const {nombre} = req.query
    const allDB = await Country.findAll({
        include: Activity
    })

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

        // Get the country from query
        if(!nombre) {
            return res.status(200).send(allDB)
        } else {
            const country = await Country.findAll({
                where: {
                    nombre
                } ,
                include: Activity
            })
            country.length ? res.status(200).send(country) : res.status(404).send("No existe el pais")
        }

    } catch (error) {
        return res.status(404).json(error)
    }
})



router.get('/:id' , async (req, res) => {
    const { id } = req.params
    try {
        let pais = await Country.findByPk(id , {
            include: Activity,
          })
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





