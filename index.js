
var readlineSync=require
("readline-sync");
var score=0;

var userName=readlineSync.question("what is your name? ");
console.log("welcome to endgame "+ userName + "."+"Lets see how well do you know Shubh.");

// play function

function play (question, answer){
  var userAnswer=readlineSync.question(question);

  if (userAnswer.toUpperCase()===answer.toUpperCase()){
  console.log("right!!");
  score=score+1;
  
  } else {
    console.log("wrong!!")
  }
  console.log("current score is ",score);
  console.log("-----------");
}
// array of objects
var questions = [{
  question: "Would he rather prefer Coffee or Tea? ",
  answer: "Coffee"
},{
  question: "What is his Zodiac sign? ",
  answer: "Capricorn"
},{
  question: "What is his age: ",
  answer: "18"
},{
  question: "Would he rather prefer Beach or Mountains? ",
  answer: "Mountains"
}]
// loop

for (var i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer)
}

console.log("your final score is: ",score)
