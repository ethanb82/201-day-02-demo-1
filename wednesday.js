//this is the introduction prompt
var primaryUser = prompt("Lemmie know your name.");
alert("Howdy," + " " + primaryUser + "! Pleased to meechya.");
console.log('The primary user\'s name for this page is' + ' ' + primaryUser + '.');

//this is a question about where I was born
alert(primaryUser + ', I have a series of yes-or-no questions for you to see how well you know me! For each question, please type "yes" or "no," then hit "OK!"');
var firstAnswer = prompt('OK' + ' ' + primaryUser + ', first challenge: Was I born in Southern California?');
if(firstAnswer == 'no') {
  alert('Hey' + ' ' + primaryUser + ', You got it right! I was born in Portland.');
}   else if(firstAnswer == 'yes') {
  alert('Whoops' + ' ' + primaryUser + ', close but no cigar!');
}   else {
  alert('Sorry, that\'s not a valid yes-or-no answer! Did you make sure you typed your answer in all lower case?')
}

//this is a question about where I've lived in the past
var secondAnswer = prompt('Ready for the next question,' + ' ' + primaryUser + '? Here goes: Have I ever lived outside the United States?');
if(secondAnswer == 'yes') {
  alert('Right on! You\'re good at this,' + ' ' + primaryUser + '! I lived in Germany for a year in a study abroad program while at Portland State.');
} else if(secondAnswer == 'no') {
  alert('Uh oh, think again,' + ' ' + primaryUser + '. Hint: I studied abroad for a year in college.');
} else {
  alert('Sorry, that\'s not a valid yes-or-no answer! Did you make sure you typed your answer in all lower case?')
}

//this is a question about which mountains I've climbed
var thirdAnswer = prompt('Ready for the last challenge? You\'ve got this,' + ' ' + primaryUser + '! OK, here\'s the question: Have I climbed to the highest points of Washington, Oregon, and California?');
if(thirdAnswer == 'no') {
  alert('Nice,' + ' ' + primaryUser + '! That was a little tricky, even if you knew me pretty well. I have made it to the top of Mt. Rainier (Washington\'s highest point) and Mt Hood (Oregon\'s highest) but despite attempting and getting to about 12,000\', I have not (yet!) made it to the top of Mt. Whitney!');
} else if(thirdAnswer == 'yes') {
  alert('Sorry' + ' ' + primaryUser + ', that\'s not the correct answer! I admit it\'s a bit of a trick question if you know me already... I\'ve been to some of those high points, but not all of them!');
} else {
  alert('Sorry, that\'s not a valid yes-or-no answer! Did you make sure you typed your answer in all lower case?')
}
console.log('The primary user\'s answers to the three questions were' + ' ' + firstAnswer + ',' + ' ' + secondAnswer + ', and' + ' ' + thirdAnswer + ', respectively.');
alert('Thanks for playing!');

//this is my age guessing game
var yearGuess = prompt('In what year was I born?');
if(yearGuess < 1984) {
  alert('I\'m not THAT old!');
} else if(yearGuess >= 1985) {
  alert('I WISH I was that young!');
} else if (yearGuess == 1984) {
  alert('Yep, you got it!');
} else {
  alert('Whoops, looks like you did not guess a valid year!');
}
console.log('The user guessed the year' + ' ' + yearGuess + '.');

//this changes a paragraph in my HTML document to give the user a hint
//fires only if user guesses wrong
var hintText = "George Orwell"
var prehintText = document.getElementById('hint');
console.log(prehintText);
console.log(prehintText.textContent);
if(yearGuess < 1984) {
  prehintText.textContent = hintText;
  console.log(prehintText.textContent);
}
