const { Router } = require('express');
const router = Router();
const {addActivity } = require('../controllers/activitiesControllers')

router.post("/", addActivity)

module.exports = router;