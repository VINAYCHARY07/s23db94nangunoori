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
//exports.doctor_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: doctor create POST');
//};
// Handle doctor create on POST.
exports.doctor_create_post = async function(req, res) {
    console.log(req.body)
    let document = new doctor();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.patient_Name = req.body.patient_Name;
    document.patient_Age = req.body.patient_Age;
    document.Mail_Id = req.body.Mail_Id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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

