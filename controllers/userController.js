const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
require('dotenv').config();

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({
    where: { email }
  });

  if (user) {
    res.status(400).send({
      message: 'Email already taken'
    });
  } else {
    const salt = bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT_ROUND));
    const hashPassword = bcrypt.hashSync(password, salt);

    await User.create({
      name,
      email,
      password: hashPassword
    });

    res.status(201).send({ message: 'User created' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    res.status(400).send({ message: 'Invalid email or password' });
  } else {
    const isSuccess = bcrypt.compareSync(password, user.password);

    if (isSuccess) {
      const payload = {
        id: user.id,
        name: user.name
      };

      const token = jwt.sign(payload, process.env.SECRET_OR_KEY, {
        expiresIn: 3600
      });
      res.status(200).send({ token });
    } else {
      res.status(400).send({ message: 'Invalid email or password' });
    }
  }
};

module.exports = { register, login };
