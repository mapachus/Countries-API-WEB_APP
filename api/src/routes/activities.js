const { Router } = require('express');
const router = Router();
const {addActivity, getActivity } = require('../controllers/activitiesControllers')

router.get("/", getActivity)
router.post("/", addActivity)

module.exports = router;