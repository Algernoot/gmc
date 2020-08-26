/**
 * This controller is to render public pages that can be accessed by anyone on the internet.
 * 
 * GLOBAL VARIABLES FOR RENDER:
 * title - title of the page
 * active - which link in navbar is active (optional/for basic navbar pages only. VALUES: home, events, artists, about)
 */

const mongoose = require('mongoose');

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
    })
}