var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var doctor_controller = require('../controllers/doctor');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a doctor.
router.post('/doctor', doctor_controller.doctor_create_post);
// DELETE request to delete doctor.
router.delete('/doctor/:id', doctor_controller.doctor_delete);
// PUT request to update doctor.
router.put('/doctor/:id', doctor_controller.doctor_update_put);
// GET request for one doctor.
router.get('/doctor/:id', doctor_controller.doctor_detail);
// GET request for list of all doctor items.
router.get('/doctor', doctor_controller.doctor_list);
module.exports = router;