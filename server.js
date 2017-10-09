const app           = require('express')()
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');

const dbConfig      = require('./config/config').db.development
const Models        = require ('./src/models/models')

var port = process.env.PORT || 3000;


// -- DB CONNECTION
// mongoose.Promise = require("bluebird");
// mongoose.connect(dbConfig.mongo.host, { useMongoClient: true });
// let conn = mongoose.connection;             



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With, Content-Type, Accept");
next();
});

require('./src/routes')(app);

app.get('/test',(req,res)=>{
	res.status(200).json({hi:'hi'}).end();
});
app.listen(port, ()=>{
    console.log('runnig... http://localhost:' + port)
});

module.exports.app = app;
