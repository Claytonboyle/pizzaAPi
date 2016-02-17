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
	res.json({data: "welcom to the pizza api"});
});

app.get('/pizzas', function (req,res){

	var pizzas = [
		{
			name:"cheese",
			size:"xxxl",
			crust:"thin",
			price:100
		},

		{
			name:"cveggie",
			size:"xxl",
			crust:"thin",
			price:120
		}
	]

	res.json(pizzas);
});

app.get('/pizzas/:name', function (req,res){

		var pizzas = [
		{
			name:"cheese",
			size:"xxxl",
			crust:"thin",
			price:100
		},

		{
			name:"veggie",
			size:"xxl",
			crust:"thin",
			price:120
		}
	]

	console.log(req.url);

	if (req.url.slice(1)=="pizzas/cheese") 
			res.json(pizzas[0]);
		
	if (req.url.slice(1)=="pizzas/veggie")
			res.json(pizzas[1]);

	res.json({data:"bad request"});
})

//CRUD create, read, update, delete
// post = create. read = get, update = put, 

// app.put('/pizzas/:name',function(req,rest){

// 	res.
// })



app.listen(PORT, function(PORT){
	console.log('Your server is up on port ',PORT);
})


