const mongoose = require("mongoose")
const doctorSchema = mongoose.Schema({
 patient_Name: String,
 patient_Age: Number,
 Mail_Id: String
})
module.exports = mongoose.model("doctor",doctorSchema)