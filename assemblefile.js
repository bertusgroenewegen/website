'use strict';

var assemble = require('assemble');
var app = assemble();

app.task('default', function() {
    app.pages('src/templates/pages/**/*.hbs');
    app.partials('src/templates/partials/**/*.hbs');
    app.layouts('src/templates/layouts/**/*.hbs');
    
    app.option('layout', 'default.hbs');

    return app.toStream('pages')
        .pipe(app.renderFile())
        .pipe(app.dest('dist'));
});

module.exports = app;