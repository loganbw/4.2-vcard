let $ = require('jquery');
let handlebars = require('handlebars');
let token = false;//require('./githubToken.js').token;

if (token) {
let options ={
  headers: {
      'Authorization': ' token ' + token
  }
};
}else {
  let options = {};
}
init();


function displayGit(profile){
  var $card = $('#card');
  var source = $('#git-template').html();
  var template = handlebars.compile(source);
$('.container').html(template(profile));
console.log(template(profile));
//     (function(git){
//     var $vCard = $(template(git));
//     // console.log($vCard);
//     $card.append($vCard);
//   });
 }

 function init(){
   fetch('https://api.github.com/users/loganbw').then(function(response){
     return response.json();
   }).then(function(data){
    console.log(data);
    displayGit(data);
  });
 }
