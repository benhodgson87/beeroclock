'use strict';

module.exports = {
    options: {
        metrics: [
            'TotalStylesheetSize',
            'TotalRules',
            'TotalSelectors',
            'TotalIdSelectors',
            'TotalDeclarations',
            'SelectorsPerRule',
            'IdentifiersPerSelector',
            'SpecificityPerSelector',
            'TopSelectorSpecificity',
            'TopSelectorSpecificitySelector',
            'TotalImportantKeywords'
        ],
    },
    dev: {
        src: [
            '<%= meta.src %>/styles/css/core.css'
        ]
    },
    dist: {
        src: [
            '<%= meta.dist %>/styles/css/core.css'
        ]
    }
};
