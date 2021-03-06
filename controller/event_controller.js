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
    event_model.get_all({}, function(events) {
        var past = null;
        var upcoming = null;

        let current_date = new Date();
        past = events.filter(event => event.date < current_date);
        upcoming = events.filter(event => event.date > current_date);


        res.render('eventpage', {
            title: 'GMC - Events',
            past,
            upcoming,
            active: { events: true }
        });
    });
}

exports.get_event_profile = function(req, res) {
    let id = req.params.eventId;

    event_model.get_one({ _id: id }, function(event) {
        res.render('event_profile', {
            title: 'GMC - Event Name',
            event
        });
    });
}

exports.add = function(req, res) {
    event_model.insert_artist({ /*event here*/ }, function(res) {
        console.log(res);
    });
}

exports.delete = function(req, res) {
    event_model.delete_artist({ /*event here*/ }, function(res) {
        console.log(res);
    });
}