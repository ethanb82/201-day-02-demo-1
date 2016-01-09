//this is the introduction prompt
var primaryUser = prompt("Lemmie know your name.");
document.getElementById("demo0").innerHTML ='Howdy,' + ' ' + primaryUser + '! Pleased to meechya. I have a series of yes-or-no questions for you to see how well you know me! For each question, please type "Yes" or "No," then hit "OK!"';

//set variables to test user input for VALID answers and CORRECT answers
//VALID answers can be "yes" or "no" (or allowed variants)...
//...but may be incorrect answers to actual question
//CORRECT answers are either "yes" or "no" (or allowed variants)...
//...and reflect actual correct answer to the question
//values begin with false to allow while loop for each question to run
//while loop will complete only when answer is both VALID and CORRECT
var valid = false;
var correct = false;
var questionData = [
  ['OK' + ' ' + primaryUser + ', first challenge: Was I born in Southern California?',
  'no' , 'n' , 'Hey' + ' ' + primaryUser + ', You got it right! I was born in Portland.' ,
  'yes' , 'y' , 'Whoops' + ' ' + primaryUser + ', close but no cigar!',
  'Sorry, that\'s not a valid yes-or-no answer! Did you make sure you typed "Yes" or "No?" (Case does not matter!) Click OK to answer the question again'],

  ['Ready for the next question,' + ' ' + primaryUser + '? Here goes: Have I ever lived outside the United States?',
  'yes', 'y', 'Right on! You\'re good at this,' + ' ' + primaryUser + '! I lived in Germany for a year in a study abroad program while at Portland State.', 'no', 'n',
  'Uh oh, think again,' + ' ' + primaryUser + '. Hint: I studied abroad for a year in college.'],

  ['Ready for the last challenge? You\'ve got this,' + ' ' + primaryUser + '! OK, here\'s the question: Have I climbed to the highest points of Washington, Oregon, and California?', 'no', 'n',
  'Nice,' + ' ' + primaryUser + '! That was a little tricky, even if you knew me pretty well. I have made it to the top of Mt. Rainier (Washington\'s highest point) and Mt Hood (Oregon\'s highest) but despite attempting and getting to about 12,000\', I have not (yet!) made it to the top of Mt. Whitney!', 'yes', 'y',
  'Sorry' + ' ' + primaryUser + ', that\'s not the correct answer! I admit it\'s a bit of a trick question if you know me already... I\'ve been to some of those high points, but not all of them!']

];
console.log(questionData);

//ask the user a question about where I was born
//make the user answer correctly before they can move on to next question
function bornWhere(){
  while (valid == false || correct == false) {
    var firstAnswer = prompt(questionData[0][0]).toLowerCase();
    if(firstAnswer == questionData[0][1] || firstAnswer == questionData[0][2]) {
      document.getElementById("demo1").innerHTML = questionData[0][3];
      document.getElementById("demo1").className = 'right';
      valid = true;
      correct = true;
    }   else if(firstAnswer == questionData[0][4] || firstAnswer == questionData[0][5]) {
      document.getElementById("demo1").innerHTML = questionData[0][6];
      document.getElementById("demo1").className = 'wrong';
      valid = true;
      correct = false;
    }   else {
      document.getElementById("demo1").innerHTML = questionData[0][7];
      valid = false;
      correct = false;
    }
  }
}
bornWhere();
/*VALID/CORRECT variables need to be reset to false after each question; otherwise, if first question is answered correctly, the game ends without triggering any of the subsequent questions*/
valid = false;
correct = false;

//ask the user a question about where I've lived in the past
function liveAbroad(){
  while (valid == false || correct == false) {
    var secondAnswer = prompt(questionData[1][0]).toLowerCase();
    if(secondAnswer == questionData[1][1] || secondAnswer == questionData[1][2]) {
      document.getElementById("demo4").innerHTML = questionData[1][3];
      document.getElementById("demo4").className = 'right';
      valid = true;
      correct = true;
    } else if(secondAnswer == questionData[1][4] || secondAnswer == questionData[1][5]) {
      document.getElementById("demo4").innerHTML = questionData[1][6];
      document.getElementById("demo4").className = 'wrong';
      valid = true;
      correct = false;
    } else {
      document.getElementById("demo4").innerHTML = questionData[0][7];
      valid = false;
      correct = false;
    }
  }
}
liveAbroad();

valid = false;
correct = false;

//ask the user a question about which mountains I've climbed
function climbUp() {
  while (valid == false || correct == false) {
    var thirdAnswer = prompt(questionData[2][0]).toLowerCase();
    if(thirdAnswer == questionData[2][1] || thirdAnswer == questionData[2][2]) {
      document.getElementById("demo7").innerHTML = questionData[2][3];
      document.getElementById("demo7").className = 'right';
      valid = true;
      correct = true;
    } else if(thirdAnswer == questionData[2][4] || thirdAnswer == questionData[2][5]) {
      document.getElementById("demo7").innerHTML = questionData[2][6];
      document.getElementById("demo4").className = 'wrong';
      valid = true;
      correct = false;
    } else {
      document.getElementById("demo7").innerHTML = questionData[0][7];
      valid = false;
      correct = false;
    }
  }
}
climbUp();
valid = false;
correct = false;

//logs user's answers in the console and thanks them for playing
function allAnswers() {
console.log('The primary user\'s answers to the three questions were' + ' ' + firstAnswer + ',' + ' ' + secondAnswer + ', and' + ' ' + thirdAnswer + ', respectively.');
('Thanks for playing!');
}

//this section sets the variables needed to display the hint in the next loop
var hintText = ' HINT: George Orwell'
var prehintText = document.getElementById('hint');

document.getElementById("a").innerHTML = "BONUS QUESTION: Guess Calebs birth year!";
document.getElementById("b").innerHTML = "This is a little JavaScript exercise I created for fun!!!";
//this is my age guessing game
function ageGuess(){
while (valid == false || correct == false) {
  var yearGuess = prompt('In what year was I born?');
  /*the first if statement changes a paragraph in my HTML document to give the user a hint if user guesses wrong*/
  if(yearGuess < 1984 || yearGuess >= 1985) {
    prehintText.textContent = hintText;
  }
  if(yearGuess < 1984) {
    document.getElementById("demo10", "hint").innerHTML = 'I\'m not THAT old!';
    valid = true;
    correct = false;
  } else if(yearGuess >= 1985) {
    document.getElementById("demo10", "hint").innerHTML = 'I WISH I was that young!';
    valid = true;
    correct = false;
  } else if (yearGuess == 1984) {
    document.getElementById("demo10", "hint").innerHTML = 'Yep, you got it! I was born in 1984';
    valid = true;
    correct = true;
  } else {
    document.getElementById("demo10", "hint").innerHTML = 'Whoops, looks like you did not guess a valid year!';
    valid = false;
    correct = false;
  }
  console.log('The user guessed the year' + ' ' + yearGuess + '.');
}
}
ageGuess();
//give the user a message celebrating their awesomeness
document.getElementById('awesome').innerHTML = 'You are AWESOME! Give yourself a round of applause!';
