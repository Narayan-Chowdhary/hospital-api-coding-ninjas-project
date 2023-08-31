const express= require('express');

const router = express.Router();


const doctorController = require('../../../controllers/api/v1/doctor_controller');

//doctorController registration API END Point
router.post('/register', doctorController.register);
router.post('/login', doctorController.login);

module.exports = router;