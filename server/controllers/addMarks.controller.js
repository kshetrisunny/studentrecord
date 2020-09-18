const mongoose = require('mongoose');
const AddMarks = require('../models/addmarks.model');

module.exports.index = function(req, res) {
    AddMarks.get(function(err, addmarks){
        if (err) {
            res.json({status: "error", message: err});
        } else {
            res.json({status: "success", message: "Marks saved successfully", data: addmarks});
        }
    });
};

module.exports.new = function(req, res) {
    const addmarks = new AddMarks();
    addmarks.subject = req.body.subject;
    addmarks.marks = req.body.marks;

    addmarks.save(function (err) {
        res.json({
                    message: 'subjects marks created!',
                    data: addmarks
                });
            });
};