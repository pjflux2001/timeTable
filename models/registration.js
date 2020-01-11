var mongoose =require("mongoose");

var registrationSchema = new mongoose.Schema({
    id:String,
    name:String,
    courseid:String,
    coursename:String,
    section:String,
    midsemdate:String,
    midsemtime:String,
    compredate:String,
    compretime:String
},{collection:"registration"});

module.exports = mongoose.model("Registration",registrationSchema);