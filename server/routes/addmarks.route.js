const router = require('express').Router();
const addMarksController = require('../controllers/addMarks.controller');

router.route('/addmarks')
        .get(addMarksController.index)
        .post(addMarksController.new);


module.exports = router;