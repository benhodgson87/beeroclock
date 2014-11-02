'use strict';

module.exports = {
    dist: {
        options: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true,
            removeOptionalTags: true
        },
        files: {
            '<%= meta.dist %>/index.html': '<%= meta.dist %>/index.html',
        }
    }
};
