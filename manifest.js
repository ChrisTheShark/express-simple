'use strict';

let manifest = {
    application: {}
};

manifest.application.locals = {
    title: 'My Application'
}

manifest.application.views = {
    engine: 'pug',
    path: './views'
}

manifest.application.middleware = [{
    module: 'express',
    useFunction: 'static',
    args: ['public']
}, {
    module: 'body-parser',
    useFunction: 'json'
}, {
    module: 'morgan',
    args: ['combined']
}];

manifest.application.routers = [{
    router: './simpleRoute',
    middleware: [{
        customFunction: function(req, res, next) {
            next();
        }
    }],
    options: {
        path: '/api'
    }
}];

module.exports = manifest;
