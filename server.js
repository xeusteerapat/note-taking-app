const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRoute = require('./routes/users');
require('dotenv').config();

const db = require('./models');

require('./services/passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/users', userRoute);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
