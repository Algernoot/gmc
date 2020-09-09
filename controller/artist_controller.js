/**
 * This controller is to render public pages that can be accessed by anyone on the internet.
 * 
 * GLOBAL VARIABLES FOR RENDER:
 * title - title of the page
 * active - which link in navbar is active (optional/for basic navbar pages only. VALUES: home, events, artists, about)
 */

const mongoose = require('mongoose');
const artist_model = require('../models/artist');

exports.get_artistpage = function(req, res) {
    artist_model.get_all({}, function(artists) {
        res.render('artistpage', {
            title: 'GMC - Artists',
            artists,
            active: { artists: true }
        });
    });
}

exports.get_artist_profile = function(req, res) {
    res.render('artist_profile', {
        title: 'GMC - Artist Name'
    })
}