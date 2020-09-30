const mongoose = require('mongoose');

/**
 * Schema for artist DB
 * _id - generated id provided by mongodb
 * name - name of artist
 * history - history/description of artist
 * types - type of the artist. (band, solo, instrumentals, etc.)
 * images - images of the artist
 */
const artist_schema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    history: { type: String, required: [true, "No history given."] },
    types: { type: [String], required: [true, "None"] },
    images: { type: [String] }

});

const artist_model = mongoose.model('Artist', artist_schema);

/**
 * Get one instance of artist given a filter.
 * Gets the first instance found in DB
 * 
 * Parameters:
 * filter - search filter
 * 
 * Return:
 * callback - callback for found artist instance
 */
exports.get_one = function(filter, callback) {
    artist_model.findOne(filter, function(err, artist) {
        if (err) throw err;

        callback(artist.toObject());
    });
}

/**
 * Get all instances of artists given a filter.
 * Gets all instances in DB.
 * 
 * Parameters:
 * filter - search filter
 * 
 * Return:
 * callback - callback for found artist instance
 */
exports.get_all = function(filter, callback) {
    artist_model.find(filter, function(err, artists) {
        if (err) throw err;
        var artist_objects = [];

        artists.forEach(function(artist) {
            artist_objects.push(artist.toObject());
        });

        callback(artist_objects);
    });
}

/**
 * Insert new artist to database
 * 
 * Parameters:
 * artist_data - artist of event to be converted to artist_model
 */
exports.insert_artist = function(artist_data, callback) {
    var artist = new artist_model(artist_data);

    artist.save(function(err, res) {
        if (err) throw err;
        callback(res);
    });
}

/**
 * Delete artist from db
 * 
 * Parameters:
 * artist_data - artist of event to be converted to delete
 */
exports.delete_artist = function(artist_data, callback) {
    var artist = new artist_model(artist_data);

    artist.deleteOne(function(err, res) {
        if (err) throw err;
        callback(res);
    });
}
