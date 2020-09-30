const mongoose = require('mongoose');
const admin_model = require('../models/admin');
const Artist = mongoose.model('Artist');
const Event = mongoose.model('Event')
exports.get_adminpage = function(req,res){
    res.render('admin',{
        title: 'GMC - Admin',
        active: { admin: true }
    });
}

exports.get_add_edit_artist = function(req,res){
    res.render('AddEditArtist',{
        title: 'GMC - AddEditArtist',
        active: { AddEditArtist: true }
    });
}

exports.get_add_edit_event = function(req,res){
    res.render('AddEditEvent',{
        title: 'GMC - AddEditEvent',
        active: { AddEditEvent: true }
    });
}

