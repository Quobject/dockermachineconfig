/*global describe, it, before */
var Docker = require('../lib/index.js');
var assert = require('chai').assert;
//var dockermachine = new require('../lib/index.js')();
var dockermachine = require('../lib/index.js');
var config = require('../my_config.json');

describe('dockermachine', function () {
  it('should return promise', function (done) {
    dockermachine.config(config.DockerMachineName).then(
      function (output) {
        console.log('output1 =', output);
        assert.isObject(output, 'output is object');
        assert.isBoolean(output.tlsverify);
        done();
    });
  });

  it('should call config with callback', function (done) {
    dockermachine.config(config.DockerMachineName, function(err, data) {
      console.log('output2 =', data);
      assert.isObject(data, 'output is object');
      assert.isBoolean(data.tlsverify);
      done();
    });
  });
});

