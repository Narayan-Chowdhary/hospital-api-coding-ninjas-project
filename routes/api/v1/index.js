const express= require('express');

const router = express.Router();


/// APis endpoint
router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));
router.use('/reports', require('./reports'));



module.exports = router;