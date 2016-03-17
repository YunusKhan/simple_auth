function(req, email, password, done) {
    	User.findOne({ 'local.email' :  email }, function(err, user) {

    		if (err)
                return done(err);

            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {
                	var newUser            = new User();

                	newUser.local.email    = email;
                	newUser.local.password = newUser.generateHash(password);

                	newUser.save(function(err) {
                		if (err)
                			throw err;
                		return done(null, newUser);
                	});
                }
            });
    }));