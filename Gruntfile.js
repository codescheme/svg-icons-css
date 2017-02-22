
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),
    grunticon: {
      codeschemeIcons: {
        files: [{
          expand: true,
          cwd: 'src/svg',
          src: ['*.svg', '*.png'],
          dest: "dist"
        }],
        options: {
          enhanceSVG: true
        }
      }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  //  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-grunticon');

  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  grunt.registerTask('default', ['grunticon:codeschemeIcons']);

};