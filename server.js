var app = require('express')();
var bodyParser = require('body-parser');
var logger = require('morgan');

var PORT = 3000 ;//|| process.ENV.PORT;
//var app = express();  //or var app = require('express')();

//midleware funciton below, 

app.use(logger('dev'));

//retrieves data as a nice JSON object
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.json({data: "you got some pizza"});
});




app.listen(PORT, function(PORT){
	console.log('Your server is up on port ',PORT);
})


