'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);


    /**
     * Setup Tasks
     */

    // Run a dev server, build, and watch for changes
    grunt.registerTask('serve', [
        'clean:serve',
        'concurrent:dev',
        'autoprefixer:dev',
        'jshint',
        'karma:unit',
        'connect:app',
        'watch'
    ]);

    // Create a fully built production folder
    grunt.registerTask('dist', [
        'clean:dist',
        'karma:unit',
        'karma:reports',
        'useminPrepare',
        'concat',
        'concurrent:dist',
        'copy',
        'autoprefixer:dist',
        'filerev:dist',
        'usemin',
        'htmlmin',
        'jsonmin',
        'ngAnnotate:dist',
        'ngie',
        'uglify:dist',
        'parker:dist'
    ]);

    grunt.registerTask('dist:serve', [
        'dist',
        'connect:dist',
        'watch'
    ]);

    // Run unit tests
    grunt.registerTask('test', [
        'karma:unit'
    ]);

    grunt.registerTask('test:full', [
        'karma:reports'
    ]);

};
