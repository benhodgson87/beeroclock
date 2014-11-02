'use strict';

module.exports = {
    app: {
        options: {
            module: 'beeroclock.tpl',
            base: 'src',
            useStrict: true,
            singleModule: true,
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        },
        src: [ '<%= meta.src %>/app/**/*.tpl.html' ],
        dest: '<%= meta.src %>/app/templates.js'
    }
};
