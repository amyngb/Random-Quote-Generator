/*$(document).ready(function() {
   $("#getMessage").on("click", function() {
     $(".message").html("Here is the message");
   });
  });
  */



 (function() {
    //Create quotations in an object
    var quotation = {
      q1:["Don\'t believe everything you think.",'unknown'],
      q2:["You must do the thing you think you cannot do.",'Eleanor Roosevelt'],
      q3:["Lorem ipsum.",'classical Latin literature.'],
      q4: ["Work hard and say it\'s easy.",'Julian Casablancas'],
      q5: ["If you can\'t explain it simply, you don\'t understand it well enough.",'Albert Einstein'],
      q6: ["Silent gratitude isn\'t very much to anyone.",'Gertrude Stein'],
      q7: ['Whether you think you can or think you can\’t, you\’re right.','Henry Ford'],
      q8: ["Youth can not know how age thinks and feels, but old men are guilty if they forget what it is to be young.",'Albus Dumbledore']
    };

      //store quotations in an array
    console.log(quotation.q1[0]);
    var quotations, ranNum, randomQ, attributedTo;

    quotations = [quotation.q1[0], quotation.q2[0], quotation.q3[0], quotation.q4[0],
    quotation.q5[0], quotation.q6[0], quotation.q7[0], quotation.q8[0]];
    console.log(quotations);

    attributedTo = [quotation.q1[1], quotation.q2[1], quotation.q3[1], quotation.q4[1],
    quotation.q5[1], quotation.q6[1], quotation.q7[1], quotation.q8[1]]
    // Set up event listener
    var setupEventListeners = function() {
      document.querySelector('#getMessage').addEventListener('click', addMessage);
      document.querySelector('.btn').addEventListener('click', tweetMessage);
    };

    var addMessage = function () {
      //Select a random quotation
      ranNum = Math.floor(Math.random() * quotations.length);
      randomQ = quotations[ranNum];
      randomA = attributedTo[ranNum];
      //Add it to DOM
      document.querySelector('.message').innerHTML = randomQ;
      document.querySelector('.attributedTo').innerHTML = randomA;
      };

    var tweetMessage = function () {
      var tweet = document.querySelector('.message').innerText + ' -' +
        document.querySelector('.attributedTo').innerText;
      console.log(tweet);
      document.querySelector('.btn').href = 'http://twitter.com/home?status=' + tweet;

      };

    setupEventListeners();

})();




















//Set up event listener

//Random selection of quotation
