var express = require('express');
const doctor_controlers= require('../controllers/doctor');
var router = express.Router();
/* GET costumes */
router.get('/', doctor_controlers.doctor_view_all_Page );
module.exports = router;
