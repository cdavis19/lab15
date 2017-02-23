var app = angular.module('myMod');

app.factory('myFactory', function(){
  var textInfo = {};

  return {
    sendInfo: function(textInput){
    console.log(textInput);
    textInfo = textInput;
  },
  getInfo: function(){
    return textInfo;
  }
}

});
