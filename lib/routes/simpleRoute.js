'use strict';
const express = require('express'),
    apiRouter = express.Router();

apiRouter.get('/hello', function(req, res) {
    res.json({
        message: 'success'
    });
});

module.exports = apiRouter;
