const { Router } = require('express');
const router = Router();
const { getCountries, getCountryById } = require('../controllers/countriesControllers')

router.get("/", getCountries)
router.get("/:id", getCountryById)



module.exports = router;