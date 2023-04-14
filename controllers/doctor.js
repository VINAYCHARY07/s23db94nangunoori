var doctor = require('../models/doctor');
// List of all doctor
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
exports.doctor_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await doctor.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
    document.patientAge = req.body.patientAge;
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
exports.doctor_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await doctor.findById( req.params.id)
    // Do updates of properties
        if(req.body.patient_Name) toUpdate.patient_Name = req.body.patient_Name;
        if(req.body.patientAge) toUpdate.patientAge = req.body.patientAge;
        if(req.body.Mail_Id) toUpdate.Mail_Id = req.body.Mail_Id;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

