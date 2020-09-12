/**
 * This routes is for event routes which contains routes for event pages.
 */

const router = require('express').Router();
module.exports = router;


//Controllers
const event_controller = require('../controller/event_controller');

router.get('/', event_controller.get_eventpage);

router.get('/:eventId', event_controller.get_event_profile)