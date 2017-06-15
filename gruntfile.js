module.exports = function(grunt) {
    //grunt wrapper function 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
          //grunt task configuration will go here
        jshint: {
            dev: {
                src: [
                    'gruntfile.js',
                    'js/app/**/*.js'
                ],
                options: {
                    jshintrc: 'grunt-options/jshintrc.json'
                }
            }
        },
        clean: {
            options: { 
                force: true 
            },
            all: {
                src: ['js/build-grunt/min/', 'js/build-grunt/temp/']
            }
        },
        uglify: {
            options: {
                //Se utiliza para no cambiar de nombre a las variable tuvimos un problema con config.js
                mangle: false
            },
            js: { 
                expand: true,
                src: ['app/**/*.js'],
                dest: 'js/build-grunt/temp/',
                cwd: 'js/'
            }
        },
        concat: {
            js: { 
                //Necesitamos escribir concatenar primero los module files y despues los demas archivos
                src: ['js/build-grunt/temp/**/*.module.js',
                'js/build-grunt/temp/**/*.js'],
                dest: 'js/build-grunt/min/app.js'
            },
            vendor: {
                //Jquery y Angular necesitan cargarse primero, despues bootstrap y angular-route
                src: ['js/config/google-analytics.js',
                'js/vendors/jquery-11.min.js',
                'js/vendors/angular.min.js',
                'js/vendors/*.js'],
                dest: 'js/build-grunt/min/vendors.js'
            }
        } 

    });
    
    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //register grunt default task
    grunt.registerTask('default', ['jshint','clean','uglify','concat']);
};

