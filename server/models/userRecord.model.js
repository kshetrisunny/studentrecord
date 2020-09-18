const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userRecordSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    favsub: {
        type: Array
    },
    password: {
        type: String
    },
    create_date: {
        type: Date,
        Date: Date.now
    },
    saltSecret: String
});

// Events
userRecordSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userRecordSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const UserRecord = module.exports = mongoose.model('userRecord', userRecordSchema);

module.exports.get = function (callback, limit) {
    UserRecord.find(callback).limit(limit);
}
