'use strict';

module.exports = {
    app: {
        options: {
            port: 1664,
            base: '<%= meta.src %>'
        }
    },
    dist: {
        options: {
            port: 1664,
            base: '<%= meta.dist %>'
        }
    }
};
