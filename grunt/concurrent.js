'use strict';

module.exports = {
    dev: [
        'sass:dev',
        'html2js:app'
    ],
    test: [
        'jshint',
        'html2js:app'
    ],
    dist: [
        'ngdocs',
        'lodashAutobuild',
        'html2js:app',
        'sass:dist'
    ]
};
