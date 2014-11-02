'use strict';

module.exports = {
    dev: [
        'concat:json',
        'html2js:app',
        'sass:dev'
    ],
    dist: [
        'html2js:app',
        'sass:dist'
    ]
};
