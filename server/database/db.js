const mongoose = require('mongoose');
const MongoAtlasUrl = "mongodb+srv://userrecord:user@cluster0.9jsz9.mongodb.net/userrecord";

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

const  db = mongoose.connection;
require('../models/userRecord.model');
require('../models/addmarks.model');
