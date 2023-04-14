var doctor = require('../models/doctor');
// List of all doctors
exports.doctor_list = function(req, res) {
res.send('NOT IMPLEMENTED: doctor list');
};
// for a specific doctor.
exports.doctor_detail = function(req, res) {
res.send('NOT IMPLEMENTED: doctor detail: ' + req.params.id);
};
// Handle doctor create on POST.
exports.doctor_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: doctor create POST');
};
// Handle doctor delete form on DELETE.
exports.doctor_delete = function(req, res) {
res.send('NOT IMPLEMENTED: doctor delete DELETE ' + req.params.id);
};
// Handle doctor update form on PUT.
exports.doctor_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: doctor update PUT' + req.params.id);
};
