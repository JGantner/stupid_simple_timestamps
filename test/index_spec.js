var generator = require('../index.js'),
    expect = require('chai').expect;

describe('the generator', function(){
  it('returns a string', function(){
    expect(typeof generator()).to.equal('string');
  });

  it('return a string in the format YYYY-MM-DD_hh-mm-ss', function(){
    expect(!!generator().toString().match(/^\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}$/)).equal(true);
  });

  it('encodes the current time into the string', function(){
    var currentTime = new Date(),
      timestamp = generator(),
      expectedTimestamp =  '' + currentTime.getFullYear() + '-'
        + ('0' + currentTime.getMonth()).substr(-2) + '-'
        + ('0' + currentTime.getDay()).substr(-2) + '_'
        + ('0' + currentTime.getHours()).substr(-2) + '-'
        + ('0' + currentTime.getMinutes()).substr(-2) + '-'
        + ('0' + currentTime.getSeconds()).substr(-2);

    expect(timestamp).to.equal(expectedTimestamp);
  });
});
