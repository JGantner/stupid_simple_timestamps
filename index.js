(function(){
  module.exports = generateTimestamp;


  function generateTimestamp(){
    var currentTime = new Date();
    return '' + currentTime.getFullYear() + '-'
      + ('0' + currentTime.getMonth()).substr(-2) + '-'
      + ('0' + currentTime.getDay()).substr(-2) + '_'
      + ('0' + currentTime.getHours()).substr(-2) + '-'
      + ('0' + currentTime.getMinutes()).substr(-2) + '-'
      + ('0' + currentTime.getSeconds()).substr(-2);
  }
})();