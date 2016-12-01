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

manifest.application.routes = [{
    method: 'get',
    path: '/api/awesome',
    handlers: [
        function(req, res, next) {
            console.log('Your about to be praised.');
            next();
        },
        function(req, res) {
            res.json({
                success: 'Super!'
            });
        }
    ]
}]

manifest.application.routers = [{
    router: './lib/routes/simpleRoute',
    middleware: [{
        customFunction: function(req, res, next) {
            next();
        }
    }],
    options: {
        path: '/greeting'
    }
}];

module.exports = manifest;
