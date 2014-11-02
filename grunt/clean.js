'use strict';

module.exports = {
    serve: [
        '<%= meta.src %>/lang/lang.json'
    ],
    dist: [
        'dist',
        '*.log',
        '.tmp',
        '.sass-cache',
        '<%= meta.src %>/lang/lang.json',
        '<%= meta.src %>/styles/css/*'
    ]
};
