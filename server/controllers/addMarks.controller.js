const mongoose = require('mongoose');
const AddMarks = require('../models/addmarks.model');

module.exports.index = async (req, res, next) => {
    try {
        const addmarks = await AddMarks.find({}).populate('userId');
        if (addmarks) {
            res.json({ status: 'success', message: 'addmarks restored data.', data: addmarks });
        } else {
            res.json({ status: "error", message: err });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
},


module.exports.new = function(req, res) {
    const addmarks = new AddMarks();
    addmarks.subject = req.body.subject;
    addmarks.marks = req.body.marks;
    addmarks.userId = req.body.userId;

    addmarks.save(function (err) {
        res.json({
                    message: 'subjects marks created!',
                    data: addmarks
                });
            });
};
