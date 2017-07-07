/*$(document).ready(function() {
   $("#getMessage").on("click", function() {
     $(".message").html("Here is the message");
   });
  });
  */



 (function() {
  //Create quotations with constructor function
  var Quotation = function(quotation) {
      this.quotation = quotation;
  }

  var q1 = new Quotation ("Don't believe everything you think. -unknown");
  var q2 = new Quotation ("You must do the thing you think you cannot do.  -Eleanor Roosevelt");
  var q3 = new Quotation ('Lorem ipsum. -classical Latin literature.');

//store quotations in an array

  var quotations, ranNum, randomQ;

  quotations = [q1, q2, q3];


  //Select a random quotation
  ranNum = Math.floor(Math.random() * 3);
  randomQ = quotations[ranNum].quotation;
  console.log(randomQ);

  // Set up event listeners
  var setupEventListener = function() {

    document.querySelector('#getMessage').addEventListener('click', ctrlAddMessage);

  };

  // Add quotation to DOM
  var ctrlAddMessage = function() {
    //1. get random quotation
    var message = randomQ;
    //2. add RQ to UI

    
    document.querySelector('.message').innerHTML = message;

  };

  //repeat on click

  setupEventListener();

})();




















//Set up event listener

//Random selection of quotation
