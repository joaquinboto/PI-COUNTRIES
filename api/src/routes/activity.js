const { Router } = require('express');
const router = Router();
const { Country , Activity} = require('../db')

router.post('/', function (req, res) {
    const { nombre , dificultad , duracion , temporada , pais } = req.body;

    try {
        if (nombre && duracion && dificultad && temporada) {
            const [activity , boolean] = Activity.findOrCreate({
                where: {
                    nombre
                }
            })
        }


    } catch (error) {
        return res.status(404).send(error.message);
    }
})


module.exports = router;
