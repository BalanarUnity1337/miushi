'use strict';

module.exports = function(grunt) {
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass
        // sourceMap: true
      },

      dist: {
        files: {
          'src/css/style.css': 'src/sass/style.scss'
        }
      }
    },

    postcss: {
      options: {
        map: {
          inline: true,
          annotation: 'dist/css/maps/'
        },

        processors: [require('autoprefixer')({ browsers: 'last 2 versions' })]
      }
    },

    csso: {
      compress: {
        files: {
          'dist/css/style.min.css': 'src/css/style.css'
        }
      }
    },

    watch: {
      files: 'src/sass/**/*.scss',
      tasks: ['sass']
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['src/css/*.css', '*.html']
        },

        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });

  grunt.registerTask('build', ['sass', 'postcss', 'csso']);
  grunt.registerTask('serve', ['browserSync', 'watch']);
};
