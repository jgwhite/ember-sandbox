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
      default: {
        options: {
          templateName: function(filename) {
            return filename.replace('app/templates/', '');
          }
        },
        files: {
          'js/templates.js': ['app/templates/**/*.hbs']
        }
      }
    },

    concat: {
      deps: {
        src: [
          'js/libs/jquery.js',
          'js/libs/handlebars.js',
          'js/libs/ember.js'
        ],
        dest: 'js/deps.js'
      }
    },

    uglify: {
      deps: {
        files: {
          'js/deps.min.js': ['js/deps.js']
        }
      },
      app: {
        files: {
          'js/app.min.js': ['js/app.js', 'js/templates.js']
        }
      }
    },

    watch: {
      app: {
        files: ['app/**/*'],
        tasks: ['default'],
        options: {
          nospawn: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-neuter');

  grunt.registerTask('default', [
    'jshint:app',
    'neuter:app',
    'emberTemplates',
    'concat:deps',
    'uglify:app'
  ]);

  grunt.registerTask('all', [
    'default',
    'uglify:deps'
  ]);
}
