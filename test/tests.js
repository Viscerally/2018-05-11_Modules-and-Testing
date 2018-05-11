var time = require("../time");
// var gear = require('./gear');

var assert = require('assert');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });

describe('time', function() {
  describe('hasTime', function(){
    it('should return yes if the value is not 0', function() {
      assert.equal(time.hasTime(), "yes");
    });
    it('should return no if the value is 0', function() {
      assert.equal(time.hasTime(0), "no");
    });
    it('should return 🤗 if the value is 10', function() {
      assert.equal(time.hasTime(10), "🤗");
    });
  });
});