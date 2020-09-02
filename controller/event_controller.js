/**
 * This controller is to render public pages that can be accessed by anyone on the internet.
 * 
 * GLOBAL VARIABLES FOR RENDER:
 * title - title of the page
 * active - which link in navbar is active (optional/for basic navbar pages only. VALUES: home, events, artists, about)
 */

const mongoose = require('mongoose');
const event_model = require('../models/event');

exports.get_eventpage = function(req, res) {
    res.render('eventpage', {
        title: 'GMC - Events',
        active: { events: true }
    })
}

exports.get_event_profile = function(req, res) {
    res.render('event_profile', {
        title: 'GMC - Event Name'
    })
}