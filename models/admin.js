const mongoose = require('mongoose');

/**
 * Schema for admin DB
 * _id - generated id provided by mongodb
 * name - name of admin
 * type - type of admin. (President, dev, etc. For future access power features)
 * username - 
 */
const admin_schema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }

});

const admin_model = mongoose.model('admin', admin_schema);

/**
 * Get one instance of admin given a filter.
 * Gets the first instance found in DB
 * 
 * Parameters:
 * filter - search filter
 * 
 * Return:
 * callback - callback for found admin instance
 */
exports.get_one = function(filter, callback) {
    admin_model.findOne(filter, function(err, admin) {
        if (err) throw err;

        callback(admin.toObject());
    });
}

/**
 * HARD CODE INSERT TO DB.
 * Replace with actual insert to DB
 */
// exports.insert_admin = function() {
//     var admin = new admin_model({
//         _id: mongoose.Types.ObjectId(),
//         name: "Sample Admin Name",
//         type: "Lead Developer",
//         username: "devadmin123",
//         password: "admin123"
//     });

//     admin.save(function(err, res) {
//         if (err) throw err;
//         console.log(res);
//     });
// }