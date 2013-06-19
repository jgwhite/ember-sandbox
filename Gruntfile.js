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
      ace: {
        src: [
          'js/libs/ace/ace.js',
          'js/libs/ace/mode-css.js',
          'js/libs/ace/mode-html.js',
          'js/libs/ace/mode-javascript.js',
          'js/libs/ace/worker-css.js',
          'js/libs/ace/worker-javascript.js',
          'js/libs/ace/theme-ember.js'
        ],
        dest: 'js/libs/ace.js'
      },
      deps: {
        src: [
          'js/libs/jquery.js',
          'js/libs/handlebars.js',
          'js/libs/ember.js',
          'js/libs/ace.js'
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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-neuter');

  grunt.registerTask('default', [
    'jshint:app',
    'neuter:app',
    'emberTemplates',
    'concat:ace',
    'concat:deps',
    'uglify:app'
  ]);
}
