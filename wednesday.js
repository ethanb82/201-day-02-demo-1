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

//ask the user a question about where I was born
//make the user answer correctly before they can move on to next question
function bornWhere(){
while (valid == false || correct == false) {
  var firstAnswer = prompt('OK' + ' ' + primaryUser + ', first challenge: Was I born in Southern California?').toLowerCase();
  if(firstAnswer == 'no' || firstAnswer == 'n') {
    document.getElementById("demo1").innerHTML ='Hey' + ' ' + primaryUser + ', You got it right! I was born in Portland.';
    valid = true;
    correct = true;
  }   else if(firstAnswer == 'yes' || firstAnswer == 'y') {
    document.getElementById("demo1").innerHTML ='Whoops' + ' ' + primaryUser + ', close but no cigar!';
    valid = true;
    correct = false;
  }   else {
    document.getElementById("demo1").innerHTML ='Sorry, that\'s not a valid yes-or-no answer! Did you make sure you typed "Yes" or "No?" (Case does not matter!) Click OK to answer the question again!';
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
  var secondAnswer = prompt('Ready for the next question,' + ' ' + primaryUser + '? Here goes: Have I ever lived outside the United States?').toLowerCase();
  if(secondAnswer == 'yes' || secondAnswer == 'y') {
    document.getElementById("demo4").innerHTML ='Right on! You\'re good at this,' + ' ' + primaryUser + '! I lived in Germany for a year in a study abroad program while at Portland State.';
    valid = true;
    correct = true;
  } else if(secondAnswer == 'no' || secondAnswer == 'n') {
    document.getElementById("demo4").innerHTML ='Uh oh, think again,' + ' ' + primaryUser + '. Hint: I studied abroad for a year in college.';
    valid = true;
    correct = false;
  } else {
    document.getElementById("demo4").innerHTML = 'Sorry, that\'s not a valid yes-or-no answer! Did you make sure you typed your answer in all lower case?';
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
  var thirdAnswer = prompt('Ready for the last challenge? You\'ve got this,' + ' ' + primaryUser + '! OK, here\'s the question: Have I climbed to the highest points of Washington, Oregon, and California?').toLowerCase();
  if(thirdAnswer == 'no' || thirdAnswer == 'n') {
    document.getElementById("demo7").innerHTML = 'Nice,' + ' ' + primaryUser + '! That was a little tricky, even if you knew me pretty well. I have made it to the top of Mt. Rainier (Washington\'s highest point) and Mt Hood (Oregon\'s highest) but despite attempting and getting to about 12,000\', I have not (yet!) made it to the top of Mt. Whitney!';
    valid = true;
    correct = true;
  } else if(thirdAnswer == 'yes' || thirdAnswer == 'y') {
    document.getElementById("demo7").innerHTML = 'Sorry' + ' ' + primaryUser + ', that\'s not the correct answer! I admit it\'s a bit of a trick question if you know me already... I\'ve been to some of those high points, but not all of them!';
    valid = true;
    correct = false;
  } else {
    document.getElementById("demo7").innerHTML = 'Sorry, that\'s not a valid yes-or-no answer! Did you make sure you typed your answer in all lower case?';
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
