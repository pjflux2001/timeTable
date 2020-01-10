var express = require("express"),
	app 	= express(),
	bodyParser = require("body-parser"),
	mongoose= require("mongoose"),
	bodyParser= require("body-parser"),
	Registration = require("./models/registration");

//==============
//MONGOOSE CONFIG
//==============

//========================================
mongoose.connect("mongodb://localhost/student");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("CONNECTION TO MONGO SUCCESSFUL")
})
// var smk = new Registration({CampusID:"0319",Name:"Sudhanshu",Courses:"History"});
// smk.save();
// var apoorva = new Registration({CampusID:"0319",Name:"Apoorva",Courses:"Civics"});
// apoorva.save();
// var ayush = new Registration({CampusID:"0379",Name:"Ayush",Courses:"History"});
// ayush.save();
//=======================================
// var uri = process.env.DATABASEURI || "mongodb://localhost/timetable"
// mongoose.connect(uri,{
// 	useNewUrlParser:true,
// 	useCreateINdex:true
// }).then(()=>{
// 	console.log("connected to DB");
// }).catch(err => {
// 	console.log("ERROR:",err.message);
// });

//============
//SOME OTHER PACKAGES
//============

app.set("view engine","ejs");
//setting view engine to ejs
app.use(express.static('public'));
//serving custom css
app.use(bodyParser.urlencoded({extended:true}));
//using bodyparser so recieve req object


//=============
//ROUTES
//=============

app.get('/',function(req,res){
	res.render("landing");
});
app.post('/',function(req,res){
	var idnumber = req.body.id;
	Registration.find({CampusID:req.body.id}).lean().exec(
		function(err,foundArr){
			if(err){
				console.log(err);
			}
			else{
				console.log(foundArr);
				res.render("index",{foundArr:foundArr});
			}
		}
	);

})
//==============
//PORT on which service starts
//==============

var port = process.env.PORT || 31000
app.listen(port, process.env.IP,function(){
    console.log("Server started at port:"+ port);
})