/*
let
	passport = require('passport'),
	User = require('../database/user/model'),
	LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)))

passport.use('local.signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'passpord',
	passReqToCallback: true
}, (req, email, passpord, done) => {
	User.findOne({ email }, (err, user) => {
		if (err) done(err)
		if (user) done(null, false, { message: 'Такая почта уже используется' })
		let newUser = new User()
		newUser.email = email
		newUser.password = newUser.encryptPassword(password)
		newUser.save((err, user) => err ? done(err) : done(null, newUser))
	})
}))
*/