const mongoose = require('mongoose');

/**
 * Schema for band DB
 * _id - generated id provided by mongodb
 * name - name of band
 * history - history/description of band
 * types - type of the band. (band, solo, instrumentals, etc.)
 * images - images of the band
 * artists - list of artists in the band
 */
const band_schema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    history: { type: String, required: [true, "No history given."] },
    types: { type: [String], required: [true, "None"] },
    images: { type: [String] },
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }]

});

const band_model = mongoose.model('Band', band_schema);

/**
 * Get one instance of band given a filter.
 * Gets the first instance found in DB
 * 
 * Parameters:
 * filter - search filter
 * 
 * Return:
 * callback - callback for found band instance
 */
exports.get_one = function(filter, callback) {
    band_model.findOne(filter, function(err, band) {
        if (err) throw err;

        callback(band.toObject());
    });
}

/**
 * Get all instances of bands given a filter.
 * Gets all instances in DB.
 * 
 * Parameters:
 * filter - search filter
 * 
 * Return:
 * callback - callback for found band instance
 */
exports.get_all = function(filter, callback) {
    band_model.find(filter, function(err, bands) {
        if (err) throw err;
        var band_objects = [];

        bands.forEach(function(band) {
            band_objects.push(band.toObject());
        });

        callback(band_objects);
    });
}

/**
 * Insert new band to database
 * 
 * Parameters:
 * band_data - band of event to be converted to band_model
 */
exports.insert_band = function(band_data) {
    var band = new band_model(band_data);

    band.save(function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}

/**
 * Delete band from db
 * 
 * Parameters:
 * band_data - band of event to be converted to delete
 */
exports.delete_band = function(band_data) {
    var band = new band_model(band_data);

    band.deleteOne(function(err, res) {
        if (err) throw err;

        console.log(res);
    });
}