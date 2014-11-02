'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);


    /**
     * Setup Tasks
     */

    // Run a dev server, build, and watch for changes
    grunt.registerTask('serve', [
        'concurrent:dev',
        'autoprefixer:dev',
        'jshint',
        'karma:unit',
        'connect:app',
        'watch'
    ]);

    // Create a fully built production folder
    grunt.registerTask('dist', [

    ]);

    // Run unit tests
    grunt.registerTask('test', [
        'karma:unit'
    ]);

};
