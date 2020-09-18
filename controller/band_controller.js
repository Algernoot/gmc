/**
 * This controller is to render public pages that can be accessed by anyone on the internet.
 * 
 * GLOBAL VARIABLES FOR RENDER:
 * title - title of the page
 * active - which link in navbar is active (optional/for basic navbar pages only. VALUES: home, events, bands, about)
 */

const mongoose = require('mongoose');
const band_model = require('../models/band');

exports.get_bandpage = function(req, res) {
    band_model.get_all({}, function(bands) {
        res.render('bandpage', {
            title: 'GMC - bands',
            bands,
            active: { artists: true }
        });
    });
}

exports.get_band_profile = function(req, res) {
    var id = req.params.bandId;

    band_model.get_one({ _id: id }, function(band) {
        res.render('band_profile', {
            title: 'GMC - band Name',
            band
        });
    });
}