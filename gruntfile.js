'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-coffee');

    // Define the configuration for all the tasks
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '{,*/}*.js',
                'test/{,*/}*.js'
            ]
        },

        coffee: {
            compile: {
                files: {
                  'coffee/loremipsumgenerator.js': 'loremipsumgenerator.coffee'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'coffee'
    ]);

};
