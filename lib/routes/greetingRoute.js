'use strict';
const express = require('express'),
    greetingRouter = express.Router();

/**
 * Simple route demonstrating several manifest settings. Application local
 * variable title should be displayed as the Pug template's title, and explicitly
 * passing a message. Application view settings are also in play here, as the
 * view engine and view directory are utilized to render the template.
 */
greetingRouter.get('/hello', function(req, res) {
    res.render('index', {
        message: 'Hello World!'
    })
});

module.exports = greetingRouter;
