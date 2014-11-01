'use strict';

module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ['<%= meta.src %>/app/**/*.js'],
        // tasks: ['test:unit'],
        tasks: ['jshint'],
        options: {
            spawn: false
        }
    },
    src: {
        files: ['<%= meta.src %>/**/views/*.html', '<%= meta.src %>/index.html'],
        tasks: ['html2js']
    },
    styles: {
        files: ['<%= meta.src %>/styles/scss/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev', 'parker:dev']
    },
    configFiles: {
        files: ['gruntfile.js']
    }
};
