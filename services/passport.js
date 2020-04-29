const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
require('dotenv').config();

const { User } = require('../models');

// Config passport options
const options = {
  opts: {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
  }
};

// Register user
passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false
    },
    async (email, password, done) => {
      try {
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
          console.log('Email already taken.');
          return done(null, false, { message: 'Email already taken.' });
        }

        const salt = bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT_ROUND));
        const hashedPassword = bcrypt.hashSync(password, salt);
        console.log(salt);

        const user = await User.create({
          email,
          password: hashedPassword
        });

        return done(null, user);
      } catch (err) {
        console.log(err);
        done(err);
      }
    }
  )
);

// User Login
passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
          console.log('Email not found');
          return done(null, false, {
            message: 'Email or password is not correct.'
          });
        }

        bcrypt.compare(password, user.password, (err, isSuccess) => {
          if (err) {
            console.log(err);
            done(err);
          }
          if (!isSuccess) {
            console.log('Password is not matched');
            return done(null, false, {
              message: 'Email or password is not correct.'
            });
          }
          console.log('User found and login successful');
          return done(null, user);
        });
      } catch (err) {
        console.log(err);
        done(err);
      }
    }
  )
);

// Middleware
passport.use(
  'jwt',
  new JWTStrategy(options.opts, async (payload, done) => {
    const user = await User.findOne({ where: { id: payload.id } });

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
);
