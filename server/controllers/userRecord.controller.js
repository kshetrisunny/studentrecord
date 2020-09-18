const mongoose = require('mongoose');
const UserRecord = require('../models/userRecord.model');
const passport = require('passport');

module.exports.index = function(req, res) {
    UserRecord.get(function(err, userRecord){
        if (err) {
            res.json({status: "error", message: err});
        } else {
            res.json({status: "success", message: "userRecord saved successfully", data: userRecord});
        }
    });
};

module.exports.new = function(req, res) {
    const userRecord = new UserRecord();
    userRecord.name = req.body.name;
    userRecord.email = req.body.email;
    userRecord.mobile = req.body.mobile;
    userRecord.favsub = req.body.favsub;
    userRecord.password = req.body.password;

    userRecord.save(function (err) {
        res.json({
                    message: 'New userRecord created!',
                    data: userRecord
                });
            });
};

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({status: "user logged In successfully."});
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}