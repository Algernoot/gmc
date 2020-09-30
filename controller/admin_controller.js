const mongoose = require('mongoose');
const admin_model = require('../models/admin');
const artist_model = require('../models/artist');
const event_model = require('../models/event');

exports.get_adminpage = function(req, res) {
    artist_model.get_all({}, function(artists) {
        event_model.get_all({}, function(events) {
            res.render('admin', {
                title: 'GMC - Admin',
                artists,
                events,
                active: { admin: true }
            });
        });
    });
}

exports.get_add_edit_artist = function(req, res) {
    res.render('AddEditArtist', {
        title: 'GMC - AddEditArtist',
        active: { AddEditArtist: true }
    });
}

exports.get_add_edit_event = function(req, res) {
    res.render('AddEditEvent', {
        title: 'GMC - AddEditEvent',
        active: { AddEditEvent: true }
    });
}

exports.add_artist = function(req, res) {
    var types = req.body.types.split(',');
    var artist = {
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        history: req.body.history,
        types,
        images: ['']
    }

    artist_model.insert_artist(artist, function(res) {
        console.log(res);
    });
}

exports.delete_artist = function(req, res) {
    artist_model.delete_artist({ _id: req.params.id }, function(res) {
        console.log(res);
    });
}

exports.add_event = function(req, res) {
    var event = {
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        images: [''],
        date: req.body.date,
        artists: ['5f4f752a0e914514d863bf87']
    };

    event_model.insert_event(event, function(res) {
        console.log(res);

    })
}