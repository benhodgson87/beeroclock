'use strict';

module.exports = {
    dist: {
        expand: true,
        cwd: '<%= meta.src %>',
        src: [
            '{,*/}*.html',
            'assets/**/*',
            'lang/lang.json'
        ],
        dest: '<%= meta.dist %>'
    }
};
