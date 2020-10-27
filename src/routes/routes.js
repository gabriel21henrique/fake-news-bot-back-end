const express = require('express');
const routes = express.Router();
const AccessController = require('../controllers/accessController');

routes.post('/access', AccessController.create);

module.exports = routes;
