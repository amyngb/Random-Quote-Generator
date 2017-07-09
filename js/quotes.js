/*$(document).ready(function() {
   $("#getMessage").on("click", function() {
     $(".message").html("Here is the message");
   });
  });
  */



 (function() {
    //Create quotations in an array of objects
    var quotes = [
      {
        quote: 'Because it\'s there.',
        author: 'George Mallory'
      },{
        quote: 'Getting to the top is optional. Getting down is mandatory.',
        author: 'Ed Viesturs'
      },{
        quote: 'Jumping from boulder to boulder and never falling, with a heavy pack, is easier than it sounds; you just can\'t fall when you get into the rhythm of the dance.',
        author: 'Jack Kerouac'
      },{
        quote: 'Climb if you will, but do nothing in haste; look well to each step; and from the beginning think what may be the end.',
        author: 'Edward Whymper'
      },{
        quote: 'In the end, climbing it changed almost nothing. But I came to appreciate that mountains make poor receptacles for dreams.',
        author: 'Jon Krakauer'
      },{
        quote: 'We can only climb the mountains because there’s a valley that makes the mountain a mountain.',
        author: 'Craig D. Lounsbrough'
      },{
        quote: 'To see what others can not...You must climb the mountain',
        author: 'Ron Akers'
      },{
        quote: 'Ultimately, I think climbing is a vehicle for exploration - of the world, of the self.',
        author: 'Steph Davis'
      },{
        quote: 'Climbing, simply and joyfully, is the way I love the world.',
        author: 'Steph Davis'
      },{
        quote: 'I\'ve pushed my comfort zone until these objectives that seemed totally crazy eventually fall within the realm of the possible.',
        author: 'Alex Honnold'
      },{
        quote: 'We are apes.  We should be climbing.',
        author: 'Alex Honnold'
      },{
        quote: "Stand at the base and look up at 3,000 feet of blankness.  It just looks like there\'s no way you can climb it.  That\'s what you seek as a climber.  You want to find something that looks absurd and figure out how to do it.",
        author: 'Tommy Caldwell'
      },{
        quote: "When people say, \"It can't be done,\" or \"You don't have what it takes,\" it makes the task all the more interesting.",
        author: 'Lynn Hill'
      },{
        quote: 'You just see your hands, your ice axe, and your crampons...and they have to just move.',
        author: 'Ueli Steck'
      },{
        quote: 'Before the deed comes the thought. Before the achievement comes the dream. Every mountain we climb, we first climb in our mind.',
        author: 'Royal Robbins'
      },{
        quote: 'Instead of the god of security, we bow to the greater god of freedom, the freedom to take risks and master danger in order to be intensely alive.',
        author: 'Royal Robbins'
      },{
        quote: 'Writing about climbing is boring. I would rather go climbing.',
        author: 'Chuck Pratt'
      },{
        quote: 'As I hammered in the last bolt and staggered over the rim, it was not at all clear to me who was the conqueror and who was the conquered. I do recall that El Cap seemed to be in much better condition than I was.',
        author:'Warren Harding'
      },{
        quote: 'How you climb a mountain is more important than reaching the top.',
        author: 'Yvon Chouinard'
      },{
        quote: 'I would be rappelling, just like normal, but I would have a backpack, with a baby inside it.',
        author: 'Alex "Honlove" Honnold'
      }
    ];


    var ranNum, randomQ, randomA;

      // Set up event listener
    var setupEventListeners = function() {
      document.querySelector('#getMessage').addEventListener('click', addMessage);
      document.querySelector('.btn').addEventListener('click', tweetMessage);
    };

    var addMessage = function () {
      //Select a random quotation
      ranNum = Math.floor(Math.random() * quotes.length);
      randomQ = quotes[ranNum].quote;
      randomA = quotes[ranNum].author;
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
