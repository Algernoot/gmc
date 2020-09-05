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
const admin_model = require('../models/admin');

exports.get_homepage = function(req, res) {
    res.render('home', {
        title: 'GMC - Home',
        active: { home: true }
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
    artist_model.get_all({ name: { "$regex": query.search, "$options": "i" } }, function(artists) {
        res.render('search', {
            title: 'GMC - Search for ' + query.search,
            artists
        });
    });
}