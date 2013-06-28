module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      app: {
        src: ['app/**/*.js'],
        options: {
          jshintrc: '.jshintrc'
        }
      }
    },

    neuter: {
      app: {
        options: {
          filepathTransform: function (filepath) {
            return 'app/' + filepath;
          }
        },
        files: {
          'js/app.js': ['app/app.js']
        }
      }
    },

    emberTemplates: {
      app: {
        files: {
          'js/templates.js': ['app/templates/**/*.hbs']
        },
        options: {
          templateName: function(filename) {
            return filename.replace('app/templates/', '');
          }
        }
      }
    },

    uglify: {
      app: {
        files: {
          'js/app.min.js': [
            'js/app.js',
            'js/templates.js'
          ]
        }
      },
      deps: {
        files: {
          'js/deps.min.js': [
            'js/libs/jquery.js',
            'js/libs/handlebars.js',
            'js/libs/ember.js'
          ]
        }
      }
    },

    watch: {
      app: {
        files: ['app/**/*'],
        tasks: ['app']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-neuter');

  grunt.registerTask('app', [
    'jshint:app',
    'neuter:app',
    'emberTemplates:app',
    'uglify:app'
  ]);

  grunt.registerTask('deps', ['uglify:deps']);

  grunt.registerTask('default', ['app', 'deps']);
}
