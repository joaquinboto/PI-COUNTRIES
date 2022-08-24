const { Router } = require('express');
const router = Router();
const { Country , Activity} = require('../db')

router.post('/', async (req, res) => {
    const { nombre , dificultad , duracion , temporada , countries } = req.body;

    try {
        const newActivity = await Activity.create({
            nombre,
            dificultad,
            duracion,
            temporada
        })
        for (let i = 0; i < countries.length; i++) {
            await newActivity.addCountries(countries[i]); 
            console.log(countries[i]);      
        }
        res.status(200).json(newActivity)
    
    } catch (error) {
        res.json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const allActivitis = await Activity.findAll();
        res.json(allActivitis)
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;
