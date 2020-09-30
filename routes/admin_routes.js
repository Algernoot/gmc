const router = require('express').Router();
const { json } = require('body-parser');
const express = require('express');
module.exports = router;
const mongoose = require('mongoose');
const artist = mongoose.model('Artist');
const event = mongoose.model('Event');



//Controllers
const admin_controller = require('../controller/admin_controller');

router.get('/', admin_controller.get_adminpage);
router.get('/AddEditArtist',admin_controller.get_add_edit_artist);
router.get('/AddEditEvent',admin_controller.get_add_edit_event);
router.get('/DeleteArtist/:id', (req, res) => {
    artist.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/admin');
        }
        else { console.log('Error in artist delete :' + err); }
    });
});
router.get('/DeleteEvent/:id', (req, res) => {
    event.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/admin');
        }
        else { console.log('Error in event delete :' + err); }
    });
});

router.get('/AddEditArtist/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("admin/AddEditArtist", {
                viewTitle: "Update Artist",
                artist: doc
            });
        }
    });
});

router.get('/AddEditEvent/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("admin/AddEditEvent", {
                viewTitle: "Update Event",
                event: doc
            });
        }
    });
});