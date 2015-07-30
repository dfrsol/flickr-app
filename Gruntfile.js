module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'app/public/vendor/angular/angular.min.js',
                    'app/public/vendor/lodash/lodash.min.js',
                    'app/public/scripts/common/common.module.js',
                    'app/public/scripts/common/*.js',
                    'app/public/scripts/feed/feed.module.js',
                    'app/public/scripts/feed/*.js',
                    'app/public/scripts/app.js'
                ],
                dest: 'app/public/dist/app.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    'app/public/dist/styles.css': 'app/public/styles/style.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'app/public/dist/app.min.js': ['app/public/dist/app.js']
                }
            }
        },
        watch: {
            sass: {
                files: ['app/public/styles/*/*.scss', 'app/public/styles/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['app/public/scripts/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['watch']);
};