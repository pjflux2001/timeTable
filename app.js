var express = require("express"),
	app 	= express(),
	bodyParser = require("body-parser"),
	mongoose= require("mongoose"),
	bodyParser= require("body-parser"),
	Registration = require("./models/registration.js");

//==============
//MONGOOSE CONFIG
//==============
var uri = "mongodb+srv://flux:hesoyam@cluster0-3z3hj.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri,{
	useNewUrlParser:true,
	useCreateIndex:true,
}).then(()=>{
	console.log("connected to DB");
}).catch(err => {
	console.log("ERROR:",err.message);
});

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
	Registration.find({"id":idnumber},function(err,foundObj){
		if(err){ console.log(err);
		} else {
			res.render("index",{foundArr:foundObj})
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