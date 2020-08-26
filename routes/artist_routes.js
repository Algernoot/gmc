/**
 * This routes is for event routes which contains routes for event pages.
 */

const router = require('express').Router();
module.exports = router;


//Controllers
const artist_controller = require('../controller/artist_controller');

router.get('/', artist_controller.get_artistpage);

router.get('/artistId', artist_controller.get_artist_profile);