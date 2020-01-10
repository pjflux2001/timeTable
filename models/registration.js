var mongoose =require("mongoose");

var registrationSchema = new mongoose.Schema({
    CampusID : String,
    Name : String,
    Courses : String
});

module.exports = mongoose.model("Registration",registrationSchema);