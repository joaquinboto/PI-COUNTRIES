const { Router } = require('express');
const router = Router();
const { Country , Activity} = require('../db')

router.post('/', async (req, res) => {
    const { nombre , dificultad , duracion , temporada , countries } = req.body;

    try {
        if(nombre && duracion && dificultad && temporada && countries) {
            const newActivity = await Activity.create({
                nombre,
                dificultad,
                duracion,
                temporada
            })

            await newActivity.addCountries(countries);   

            res.status(200).json(newActivity)
        } else {
            res.status(400).json({
                error: 'Ingrese todos los campos'
            })

        }

    } catch (error) {
        res.json(error.messages)
    }
})

router.get('/', async (req, res) => {
    try {
        const allActivitis = await Activity.findAll({
            include: Country
        });

        res.json(allActivitis)
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;
