/**
 * This controller is to render public pages that can be accessed by anyone on the internet.
 * 
 * GLOBAL VARIABLES FOR RENDER:
 * title - title of the page
 * active - which link in navbar is active (optional/for basic navbar pages only. VALUES: home, events, artists, about)
 */

const mongoose = require('mongoose');
const artist_model = require('../models/artist');
const event_model = require('../models/event');

exports.get_homepage = function(req, res) {
    let current_date = new Date();
    artist_model.get_all({}, function(artists) {
        event_model.get_all({}, function(result) {
            var events = result.filter(event => event.date > current_date);
            res.render('home', {
                title: 'GMC - Home',
                artists,
                events,
                active: { home: true }
            });
        });
    });
}

exports.get_aboutpage = function(req, res) {
    res.render('about', {
        title: 'GMC - About Us',
        active: { about: true }
    });
}


exports.get_searchpage = function(req, res) {
    var query = req.query;
    artist_model.get_all({ name: { "$regex": query.search, "$options": "i" } }, function(artists_result) {
        event_model.get_all({ name: { "$regex": query.search, "$options": "i" } },
            function(events) {
                res.render('search', {
                    title: 'GMC - Search for ' + query.search,
                    artists: artists_result,
                    events
                });
            });
    });
}