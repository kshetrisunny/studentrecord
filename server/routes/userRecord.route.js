const router = require('express').Router();
const userRecordController = require('../controllers/userRecord.controller');


router.route('/userrecords')
            .get(userRecordController.index)
            .post(userRecordController.new);

router.route('/auth')
            .post(userRecordController.authenticate);


// Export API routes
module.exports = router;