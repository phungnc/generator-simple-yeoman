'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var simpleGen = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
  },
  makeAppStructure: function() {
    console.log('makeAppStructure method ran!');
    // Create scaffolder
    this.dest.mkdir('src');
    this.dest.mkdir('src/images');
    this.dest.mkdir('src/scripts');
    this.dest.mkdir('src/styles');
  }
  cloneTemplateFiles: function() {
    console.log('cloneTemplateFile method ran');
  }
});

module.exports = simpleGen;
