module.exports = {

    'facebookAuth' : {
        'clientID'      : '191356377909663', // your App ID
        'clientSecret'  : '510f85e551b3a88355f17b15120675d2', // your App Secret
        'callbackURL'   : 'http://localhost:3005/fbauth/callback',
        'profileFields' : ['id', 'email', 'gender']
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};