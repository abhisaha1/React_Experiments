module.exports = function(grunt) {
  grunt.initConfig({
      /**
          The concurrent task will let us spin up all of required tasks. It is very 
          important to list the 'watch' task last because it is blocking and nothing 
          after it will be run. "jshint", "browserify" , 
      **/
      concurrent: {
        dev: [ "jshint", "browserify" , "nodemon", "watch"],
        options: {
            logConcurrentOutput: true
        }
      },
      /**
        The nodemon task will start your node server. The watch parameter will tell 
        nodemon what files to look at that will trigger a restart. Full grunt-nodemon 
        documentation
      **/
      nodemon: {
          dev: {
              script: 'server.js',
              options: {
                  /** Environment variables required by the NODE application **/
                  env: {
                        "NODE_ENV": "development",
                        "NODE_CONFIG": "dev"
                  },
                  watch: ["server"],
                  delay: 300,

                  callback: function (nodemon) {
                      nodemon.on('log', function (event) {
                          console.log(event.colour);
                      });

                      /** Open the application in a new browser window and is optional **/
                      nodemon.on('config:update', function () {
                          // Delay before server listens on port
                          setTimeout(function() {
                              require('open')('http://localhost:3000');
                          }, 1000);
                      });

                      /** Update .rebooted to fire Live-Reload **/
                      nodemon.on('restart', function () {
                          // Delay before server listens on port
                          setTimeout(function() {
                              require('fs').writeFileSync('.rebooted', 'rebooted');
                          }, 1000);
                      });
                  }
              }
          }
      },
      /**
        Watch the JS and LESS folders for changes. Triggering 
        fires off the listed tasks
      **/
      watch: {
          js: {
              files: ["app/**/*.js"],
              tasks: ['browserify'],
              options: { nospawn: true, livereload: true, debounceDelay: 1000 }
          }
      },
      browserify: {
        options: {
          transform: [ require('grunt-react').browserify ]
        },
        app: {
          src: 'app/App.js',
          dest: 'public/js/output.js'
        }
      },

      jshint: {
        options: {
          scripturl: true,
          eqnull: true
        },

        // TODO: how to jshint the files with JSX?
        app: [ '*.js' ],
        other: [ 'Gruntfile.js' ]
      },

  });

  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["concurrent:dev"]);

   //grunt.registerTask("default", ["watch"]);
  //grunt.registerTask('default', [ 'jshint', 'browserify' ]);
};