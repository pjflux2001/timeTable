var express = require("express"),
	app 	= express(),
	mongoose= require("mongoose"),
	bodyParser= require("body-parser");

//==============
//MONGOOSE CONFIG
//==============

// var uri = process.env.DATABASEURI || "mongodb://localhost/timetable"
// // mongoose.connect("mongodb://localhost/timetable");
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

//==============
//PORT on which service starts
//==============

var port = process.env.PORT || 31000
app.listen(port, process.env.IP,function(){
    console.log("Server started at port:"+ port);
})