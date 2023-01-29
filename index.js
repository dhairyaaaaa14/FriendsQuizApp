import readSyncLine from 'readline-sync';
import chalk from "chalk";
var score = 0;

var name = readSyncLine.question("Enter your name: ");
console.log(chalk.blue("Welcome " + chalk.red(name) + " to the F.R.I.E.N.D.S quiz app!"));

function play(question, answer) {
    
    
  var userAnswer = readSyncLine.question(question);
  console.log("\n\n")
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!");
    score++;
  } else {
    console.log("It is not correct!");
  }
  //console.log("\nYour current score is: " + score);
  console.log("------------------------------");
}

var questions = [
  {
    question: `\nHow many sisters Joey had?
    A. 5
    B. 6
    C. 5
    D. 7
    `,
    answer:"D"
   
  },

  {
    question: `\nWhat is the profession of Ross Geller? 
     A.Geologist
     B.Astronomer
     C.Palaeontologist
     D.Museum tour guide
    `,
    answer:"C"
  },
  {
    question: `What instrument did Ross intend to play at Monica and Chandler's wedding?
   A. Keyboard
   B.Drunks
   C.Saxophone
   D.Bagpipes
    `,

    answer:"D"
  },
  {
    question:` What is Chandler's middle name?
    A. Muriel
    B. Nora
    C. Charles
    D. Francis
    `,

    answer:"A"

  },
  {
    question: `What is the name of Chandler's favourite Baywatch star?
    A. Kelly Slater
    B. Pamela Anderson
    C. Nancy Valen
    D. Yasmine Bleeth
     `,
     answer: "D"
  }
 
];

var highScore = [
  {
    name: "Dhairya",
    score: 2,
  },
  {
    name: "Raju",
    score: 1,
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

for (var i = 0; i < highScore.length; i++) {
  var current = highScore[i];

  if (current.score < score) {
    console.log("You have beaten the score of " + current.name + "!");
  }
}
console.log("Your score is: " + score);
