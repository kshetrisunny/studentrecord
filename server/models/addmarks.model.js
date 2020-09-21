const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const addMarksSchema = new mongoose.Schema({
    subject: {
        type:String
    },
    marks: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'userRecord'
    }
});

const AddMarks = module.exports = mongoose.model('addMarks', addMarksSchema);

module.exports.get = function (callback, limit) {
    AddMarks.find(callback).limit(limit);
}