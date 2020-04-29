const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = (req, res, next) => {
  passport.authenticate('register', async (err, user, info) => {
    try {
      if (err) {
        console.error(err);
      }

      if (info) {
        res.status(400).send(info.message);
      } else {
        await user.update({ name: req.body.name });
        res.status(200).send({ message: 'User created' });
      }
    } catch (e) {
      console.log(e);
    }
  })(req, res, next);
};

const login = (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err) {
        console.log(err);
      }
      if (info) {
        console.log(info);
      }

      const superSecretKey = process.env.SECRET_OR_KEY;
      const payload = {
        id: user.id,
        name: user.email
      };

      const token = jwt.sign(payload, superSecretKey, { expiresIn: '1h' });
      res.status(200).send({
        token,
        message: 'Log in successful.'
      });
    } catch (e) {
      console.log(e);
    }
  })(req, res, next);
};

module.exports = { register, login };
