module.exports = function(grunt) {
  var config = {};
  var tasks = [
    "grunt-contrib-jshint",
    "grunt-contrib-handlebars",
    "grunt-contrib-sass",
    "grunt-contrib-watch",
    "grunt-contrib-copy",
    "grunt-contrib-concat"
  ];

  //==========================================================

  config.jshint = {};

  config.jshint.run = {
    options : { jshintrc : ".jshintrc" },
    files : {
      src : ["src/javascripts/**/*.js"]
    }
  };

  //==========================================================

  config.handlebars = {};

  config.handlebars.compile = {
    options : {
      namespace : "WAB.templates",
      partialsUseNamespace : true,
      partialRegex: /^_.*\.hbs$/,

      processName: function(fileName) {
        var bits = fileName.split("/");
        return bits[bits.length - 1].replace(".hbs", "");
      },

      processPartialName: function(fileName) {
        var bits = fileName.split("/");
        return bits[bits.length - 1].slice(1).replace(".hbs", "");
      }
    },
    src : "src/javascripts/templates/**/*.hbs",
    dest : "src/javascripts/templates.js"
  };

  //==========================================================

  config.sass = {};

  config.sass.compile = {
    src : "src/stylesheets/style.scss",
    dest : "public/style.css"
  };

  //==========================================================

  config.concat = {};

  config.concat.bundle = {
    src : [
      "src/components/fastclick/lib/fastclick.js",
      "src/components/touche/touche.js",
      "src/components/eventEmitter/EventEmitter.js",
      "src/components/jquery/jquery.js",
      "src/components/module/module.js",
      "src/components/handlebars/handlebars.runtime.js",
      "src/components/raphael/raphael.js",
      "src/components/qwerty-hancock/qwerty-hancock.js",
      "src/components/overdrive/overdrive.js",
      "src/javascripts/extensions.js",
      "src/javascripts/templates.js",
      "src/javascripts/Mediator.js",
      "src/javascripts/Stage.js",
      "src/javascripts/StageMixer.js",
      "src/javascripts/SoundsMapLoader.js",
      "src/javascripts/Looper.js",
      "src/javascripts/instruments/PlayableWithKeys.js",
      "src/javascripts/instruments/Sequencer.js",
      "src/javascripts/commands/*.js",
      "src/javascripts/controls/*.js",
      "src/javascripts/instruments/*.js",
      "src/javascripts/application.js"
    ],
    dest : "public/javascripts/application.js"
  };

  //==========================================================

  config.uglify = {};

  //==========================================================

  config.copy = {};

  //==========================================================

  config.watch = {};

  config.watch.css = {
    files : ["src/**/*.scss"],
    tasks : ["sass"]
  };

  config.watch.js = {
    files : ["src/**/*.js", "src/**/*.hbs", "!src/**/templates.js"],
    tasks : ["jshint", "handlebars", "concat"]
  };

  //==========================================================

  grunt.initConfig(config);
  tasks.forEach(grunt.loadNpmTasks);
  grunt.registerTask("default", ["sass", "jshint", "handlebars", "concat", "watch"]);
};
