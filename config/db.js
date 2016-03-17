// config/db.js
// This is just to maintain a connection point URL with Mongo DB
// It does nothing else
// We may need to explicitly add further authentication mechanism to validate a connection with Mongo itself.
// 
// 
module.exports = {
	'url' : 'localhost:27017/auth' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

}