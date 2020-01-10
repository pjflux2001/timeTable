var express = require("express"),
	app 	= express(),
	bodyParser = require("body-parser"),
	mongoose= require("mongoose"),
	bodyParser= require("body-parser"),
	Registration = require("./models/registration.js");

//==============
//MONGOOSE CONFIG
//==============

// //========================================
// mongoose.connect("mongodb://localhost/student");
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("CONNECTION TO MONGO SUCCESSFUL")
// })
// // var smk = new Registration({CampusID:"0319",Name:"Sudhanshu",Courses:"History"});
// // smk.save();
// // var apoorva = new Registration({CampusID:"0319",Name:"Apoorva",Courses:"Civics"});
// // apoorva.save();
// // var ayush = new Registration({CampusID:"0379",Name:"Ayush",Courses:"History"});
// // ayush.save();
//=======================================
//var uri = "mongodb+srv://sudhanshumohan:issacnewton@cluster0-3z3hj.mongodb.net/test?retryWrites=true&w=majority"
uri = 'mongodb://localhost/new'
mongoose.connect(uri,{
	useNewUrlParser:true,
	useCreateIndex:true,
}).then(()=>{
	console.log("connected to DB");
}).catch(err => {
	console.log("ERROR:",err.message);
});
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
	var idnumber = req.body.detail;
	console.log(typeof(idnumber));
	var search = {"ID_NO":idnumber}
	console.log(search);
	Registration.find({"id":"2019AAPS0334G"},function(err,foundObj){
		if(err){ console.log(err);
		} else {
			console.log(foundObj);
			res.send(foundObj);
		}
	})

});
//==============
//PORT on which service starts
//==============

var port = process.env.PORT || 31000
app.listen(port, process.env.IP,function(){
    console.log("Server started at port:"+ port);
})