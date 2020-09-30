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

router.get('/AddEditArtist', admin_controller.get_add_edit_artist);

router.post('/addArtist', admin_controller.add_artist);

router.get('/AddEditEvent', admin_controller.get_add_edit_event);

router.post('/addEvent', admin_controller.add_event);

router.get('/delete/:id', admin_controller.delete_artist);

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