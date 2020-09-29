const mongoose = require('mongoose');

/**
 * Schema for event DB
 * _id - generated id provided by mongodb
 * name - name of event
 * description - history/description of event
 * images - images of the event
 * date - Date of the event
 * artists - artists in the event
 */
const event_schema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: [true, "No description given."] },
    images: { type: [String] },
    date: { type: Date },
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }]
});

const event_model = mongoose.model('Event', event_schema);

/**
 * Get one instance of event given a filter.
 * Gets the first instance found in DB
 * 
 * Parameters:
 * filter - search filter
 * 
 * Return:
 * callback - callback for found event instance
 */
exports.get_one = function(filter, callback) {
    event_model.findOne(filter).populate('artists').exec(function(err, event) {
        if (err) throw err;

        callback(event.toObject());
    });
}

/**
 * Get all instances of events given a filter.
 * Gets all instances in DB.
 * 
 * Parameters:
 * filter - search filter
 * 
 * Return:
 * callback - callback for found event instance
 */
exports.get_all = function(filter, callback) {
    event_model.find(filter).populate('artists').exec(function(err, events) {
        if (err) throw err;
        var event_objects = [];

        events.forEach(function(event) {
            event_objects.push(event.toObject());
        });

        callback(event_objects);
    });
}

/**
 * Insert new event to database
 * 
 * Parameters:
 * event_data - data of event to be converted to event_model
 */
exports.insert_event = function(event_data, callback) {
    var event = new event_model(event_data);

    event.save(function(err, res) {
        if (err) throw err;
        callback(res);
    });
}

/**
 * Delete event from db
 * 
 * Parameters:
 * event_data - event of event to be converted to delete
 */
exports.delete_event = function(event_data, callback) {
    var event = new event_model(event_data);

    event.deleteOne(function(err, res) {
        if (err) throw err;

        callback(res);
    });
}