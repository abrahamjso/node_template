// Extern Libraries 
// ...

// My Libraries 
// ...

// Constants
// ...

// Routes
module.exports = function(app){

  app.get('/', function(req, res, next){return res.status(200).json({name: "hello"}).end();})

};
