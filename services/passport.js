const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

require('dotenv').config();

const { User } = require('../models');

// Config passport options
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY
};

// Login user
passport.use(
  'jwt',
  new JWTStrategy(options, async (payload, done) => {
    const user = await User.findOne({
      where: {
        id: payload.id
      }
    });

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
);
