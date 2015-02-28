module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	var router = express.Router();
	router.use(function(req, res, next) {
	    // do logging
	    console.log('Something is happening.');
	    next(); // make sure we go to the next routes and don't stop here
	});

	router.get('/', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});

	router.route('/events')

		.get(function(req, res) {
	        Event.find(function(err, events) {
	            if (err)
	                res.send(err);

	            res.json(events);
	        });
	    });
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};