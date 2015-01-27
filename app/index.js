'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },
  makeAppStructure: function() {
    console.log('makeAppStructure method ran!');
    // Create scaffolder
    this.dest.mkdir('src');
    this.dest.mkdir('src/styles');
    this.dest.mkdir('src/styles/base');
  },
  cloneTemplateFiles: function() {
    this.src.copy('styles/base/_base.less', 'src/styles/base/base.less')
  }
});
