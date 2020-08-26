/**
 * This routes is for public routes which can be accessed by anyone on the internet.
 */

const router = require('express').Router();
module.exports = router;


//Controllers
const public_controller = require('../controller/public_controller');

router.get('/', public_controller.get_homepage);

router.get('/about', public_controller.get_aboutpage);