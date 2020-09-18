/**
 * This routes is for event routes which contains routes for event pages.
 */

const router = require('express').Router();
module.exports = router;


//Controllers
const band_controller = require('../controller/band_controller');

router.get('/', band_controller.get_bandpage);

router.get('/:bandId', band_controller.get_band_profile);