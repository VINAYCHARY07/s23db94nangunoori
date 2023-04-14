var doctor = require('../models/doctor');
// List of all Costumes
exports.doctor_list = async function(req, res) {
    try{
    thedoctor = await doctor.find();
    res.send(thedoctor);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
// VIEWS
// Handle a show all view
exports.doctor_view_all_Page = async function(req, res) {
try{
thedoctor = await doctor.find();
res.render('doctor', { title: 'doctor Search Results', results: thedoctor });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

