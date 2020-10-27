const requireDir = require('require-dir');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

require('./database/connection');
requireDir('./models');

app.use(cors());
app.use(express.json());
app.use(morgan("short"));
app.use(require('./routes/routes'));

// app.listen(3333);
