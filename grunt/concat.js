'use strict';

module.exports = {
    json: {
        src: ['<%= meta.src %>/lang/**/*.json'],
        dest: '<%= meta.src %>/lang/lang.json',
        options: {
            separator: ',',
            banner: '{',
            footer: '}'
        }
    },
    js: {
        options: {
            separator: ';'
        }
    }
};
