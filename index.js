var _ = require('underscore');
_.each([1, 2, 3], function(v) {
    console.log('v', v);
}); 

var mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/example'; // use example DB
mongodb.MongoClient.connect(url, function(error, db) { // callback
	if (error) {
		console.log(error);
		process.exit(1);
	}
	db.collection('sample').insert({x : 1}, function(error, result) {
		if (error) {
			console.log(error);
			process.exit(1);
		}
		db.collection('sample').find().toArray(function(error, docs) { 
		//find resturns a curson which is converted to an array
			if (error) {
				console.log(error);
				process.each(1);
			}
			console.log('Found docs: ')
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			});
		process.exit(0);
		});
	});
});