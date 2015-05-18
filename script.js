$(function(){
//shuffle an array with length of 10(the max number of questions)



var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/*function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}
console.log(array);
shuffle(array);*/
console.log(array);
//get userNumberOfQuestions
$('input#startQuiz').on('click', function(e){
var userNumberOfQuestions = $( "#numberOfQuestions option:selected" ).val();//get value from dropdown menu
console.log("userNumberOfQuestions = " + userNumberOfQuestions); 

for(var i=0; i < userNumberOfQuestions; i++){
//use jq to select all questions 
console.log('the value of i is:' + i);
//$('li.question').eq(array[i]).attr('class', 'questionShown');//works
$('li#' + array[i+1]).attr('class', 'questionShown');
console.log('the value of the array index at this time = ' + array[i]);
}
});

//get userNumberOfQuestions
/*$('input#startQuiz').on('click', function(e){
var userNumberOfQuestions = $( "#numberOfQuestions option:selected" ).val();//get value from dropdown menu
console.log("userNumberOfQuestions = " + userNumberOfQuestions); 
console.log(Math.floor(Math.random() * userNumberOfQuestions + 1));
});*/

});