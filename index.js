'use strict';
const Tape = require('express-tape'),
    manifest = require('./manifest');

Tape.compose(manifest, {
    relativeTo: __dirname + '/lib/routes'
}, function(error, app) {
    app.listen(3000, function(error) {
        if (error) {
            throw error;
        }
    });
});
