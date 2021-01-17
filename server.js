'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = express.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);

authRoutes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend'))
}