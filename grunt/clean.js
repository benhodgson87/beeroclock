'use strict';

module.exports = {
    dist: [
        'dist',
        '*.log',
        '.tmp',
        '.sass-cache',
        '<%= meta.src %>/styles/css/*'
    ]
};
