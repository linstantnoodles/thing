var gruntInit = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-karma');

  var config = {
    settings: {
      src_dir: 'src',
      build_dir: 'build',
      test_dir: 'test'
    }
  };

  config.uglify = {
    build: {
      src: '<%= settings.src_dir %>/thing.js',
      dest: '<%= settings.build_dir %>/thing.min.js'
    }
  };

  config.karma = {
    unit: {
      options: {
        singleRun: true,
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
          '<%= settings.src_dir %>/thing.js',
          '<%= settings.test_dir %>/**/*-spec.js'
        ]
      }
    }
  };

  config.bump = {
    options: {
      files: ['package.json'],
      updateConfigs: [],
      commit: true,
      commitMessage: 'Release v%VERSION%',
      commitFiles: ['package.json'],
      createTag: true,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      prereleaseName: 'rc',
      push: true,
      pushTo: 'origin',
    }
  };

  // Initialize config
  grunt.initConfig(config);

  // Register tasks
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('test', ['karma']);
};

module.exports = gruntInit;
