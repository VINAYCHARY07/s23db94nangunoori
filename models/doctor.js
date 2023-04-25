const mongoose = require("mongoose")
const doctorSchema = mongoose.Schema({
 patient_Name: {
                type: String,
                minlength:4
            },
 patient_Age: Number,
 Mail_Id: String
})
module.exports = mongoose.model("doctor",doctorSchema)