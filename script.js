// Setting up navigation
$("#homePage").show();
$("#quizPages").hide();
$("#myScorePage").hide();
$("#highscorePage").hide();

var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answerOptions: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: 2,
  },
  {
    question: "How do you create a function?",
    answerOptions: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function"],
    answer: 2,
  },
  {
    question: "How do you call a function named myFunction?",
    answerOptions: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
    answer: 1,
  },
  {
    question: "How do you write a conditional statement for executing some statements only if "i" is equal to 5?",
    answerOptions: ["if i==5 then", "if (i==5)", "if i=5 then", "if i=5"],
    answer: 1,
  },
  {
    question: "How do you write a conditional statement for executing some statements only if i is NOT equal to 5?",
    answerOptions: ["if (i != 5)", "if =! 5 then", "if (i <> 5)", "if <>5"],
    answer: 0,
  },
  {
    question: "How does a for loop start?",
    answerOptions: ["for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i <= 5; i++)"],
    answer: 1,
  },
  {
    question: "Which HTML tag displays the largest text?",
    answerOptions: ["<H1>", "<H3>", "<H6>", "<H100>"],
    answer: 0,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answerOptions: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: 2,
  },
  {
    question: "How do you create a function?",
    answerOptions: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function"],
    answer: 2,
  },
  {
    question: "How do you call a function named myFunction?",
    answerOptions: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
    answer: 1,
  },
  {
    question: "Which of these HTML tags will display the smallest size?",
    answerOptions: ["<H1>", "<H3>", "<H6>", "<H100>"],
    answer: 0,
  },
  {
    question: "A ___ is one or more style rules that is applied to an HTML document",
    answerOptions: ["CSS", "Script", "Style Sheet", "Design"],
    answer: 0,
  },
];

var questionCurrent = 0;
var currentScore = 0;

var startQuiz = () => {
  $("#homePage").hide();
  $("#quizPages").show();
  $("#myScorePage").hide();
  $("#highscorePage").hide();
  timeLeft = 60;
    countdownInterval = setInterval(setTimer, 1000);
  questionCurrent = 0;
  currentScore = 0;
  askQuestion();
};

var askQuestion = () => {
  const current = questions[questionCurrent];
  $(".questionHeader").text(current.question);
  const optionList = $(".answerOptions");
  optionList.empty();
  for (let index = 0; index < current.answerOptions.length; index++) {
    var button = $("<button>");
    button.attr("type", "button");
    button.addClass("btn");
    button.addClass("btn-primary");
    button.click(function () {
      chosenAnswer(index);
    });
    button.text(current.answerOptions[index]);
    optionList.append(button);
    // $('answerOptions').append('<button type="button" class="btn btn-primary" onclick="chosenAnswer(' + index +')">' + current.answerOptions[index] + '</button>');
  }
};

var chosenAnswer = (index) => {
  const answer = questions[questionCurrent].answer;
  if (index === answer) {
    currentScore++;
    $(".priorAnswer")
      .text("Correct!")
      .addClass("text-success")
      .removeClass("text-danger");
  } else {
    $(".priorAnswer")
      .text("Wrong Answer")
      .addClass("text-danger")
      .removeClass("text-success");
      timeLeft = (timeLeft>10)?timeLeft-10:0;
  }

  if (questionCurrent < questions.length - 1) {
    questionCurrent++;
    askQuestion();
  } else {
    // End Quiz
    showMyScorePage();
  }
};

var showMyScorePage = () => {
  $("#homePage").hide();
  $("#quizPages").hide();
  $("#myScorePage").show();
  $("#highscorePage").hide();
$('.myScoreIs').append(' ' + currentScore);
};



var saveScore = () => {
  const score = currentScore;
  const initial = $("#playerInitials").val();
  var highScores = localStorage.getItem("highScores");
  highScores = highScores ? highScores.split(",") : [];
  highScores.push(initial + " - " + score);
  localStorage.setItem("highScores", highScores.toString());
  showHighscorePage();
};
var showHighscorePage = () => {
  $("#homePage").hide();
  $("#quizPages").hide();
  $("#myScorePage").hide();
  $("#highscorePage").show();
  var scoreList = $(".scoreList");
  scoreList.empty();
  var highScores = localStorage.getItem("highScores");
  highScores = highScores ? highScores.split(",") : [];
  for (let index = 0; index < highScores.length; index++) {
    var line = $("<li>");
    line.text(highScores[index]);
    scoreList.append(line);
  }
};

var resetHighscores = () => {
  var highScores = localStorage.setItem("highScores", "");
  showHighscorePage();
};

var showHomepage = () => {
  $("#homePage").show();
  $("#quizPages").hide();
  $("#myScorePage").hide();
  $("#highscorePage").hide();
};

// Timer
var countdownInterval = null;

var timeLeft = 0;

var setTimer = () => {
  if (timeLeft>0) timeLeft--;
  if (timeLeft <= 0) {
   clearInterval(countdownInterval);
    showMyScorePage();
  }
  $('.currentTime').text(timeLeft);
};