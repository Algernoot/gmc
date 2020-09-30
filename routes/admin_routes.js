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

router.get('/AddEditArtist', admin_controller.get_add_artist);

router.get('/AddEditArtist/:id', admin_controller.get_edit_artist);

router.post('/addArtist', admin_controller.add_artist);

router.post('/editArtist', admin_controller.edit_artist);

router.get('/deleteArtist/:id', admin_controller.delete_artist);

router.get('/AddEditEvent', admin_controller.get_add_event);

router.get('/AddEditEvent/:id', admin_controller.get_edit_event);

router.post('/addEvent', admin_controller.add_event);

router.post('/editEvent', admin_controller.edit_event);

router.get('/deleteEvent/:id', admin_controller.delete_event);