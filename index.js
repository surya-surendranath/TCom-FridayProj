require('dotenv').config()
var path 						= require('path')
var express 				= require('express')
var session     		= require('express-session')
var bodyParser 			= require('body-parser'); 
var app 						= express()
var passport 				= require('passport')
var TwitterStrategy = require('passport-twitter')
var knexOptions 		= require('./knexfile')[process.env.NODE_ENV]
var knex        		= require('knex')(knexOptions)
var KnexSessionStore = require('connect-session-knex')(session)
var store       		= new KnexSessionStore({ knex: knex })

app.use(express.static(path.join(__dirname, 'public')))
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: true,
  store: store
}))



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
  	console.log("Authenticated Twitter user: ", profile.displayName, profile.id)
      return cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
	console.log("serializeUser from twitter: ", user.displayName, user.id)

  done(null, {
     name: user.name,
     screenName: user['screen_name'],
     twitterId: user.id
      });
});

passport.deserializeUser(function(obj, callback) {
  console.log("deserializeUser function running: ", obj)
  callback(null, obj)
})

app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
