// Setting up navigation
$('#homePage').show();
$('#quizPages').hide();
$('#myScorePage').hide();
$('#highscorePage').hide();



var questions = [{
    question: 'This is a question 1',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 2',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 3',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 4',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a questio 5',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},{
    question: 'This is a question 6',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},{
    question: 'This is a question 7',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 8',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 9',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 10',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 11',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
},
{
    question: 'This is a question 12',
    answerOptions: ['option1','option2','option3','option4'],
    answer: 0
}
];

var questionCurrent = 0;
var currentScore = 0;

var startQuiz = () => {
    $('#homePage').hide();
    $('#quizPages').show();
    $('#myScorePage').hide();
    $('#highscorePage').hide();
    questionCurrent = 0;
    currentScore = 0;
    askQuestion();
}

var askQuestion = () => {
    const current = questions[questionCurrent];
$('.questionHeader').text(current.question);
const optionList = $('.answerOptions');
optionList.empty();
for (let index = 0; index < current.answerOptions.length; index++) {
    var button = $('<button>');
    button.attr('type','button');
    button.addClass('btn');
    button.addClass('btn-primary');
    button.click(function(){
        chosenAnswer(index)
    }
        );
    button.text(current.answerOptions[index]);
    optionList.append(button);
    // $('answerOptions').append('<button type="button" class="btn btn-primary" onclick="chosenAnswer(' + index +')">' + current.answerOptions[index] + '</button>');
}
}

var chosenAnswer = (index) => {
    const answer= questions[questionCurrent].answer;
    if(index===answer){
        currentScore++;
        $('.priorAnswer').text('Correct!');
    } else {
        $('.priorAnswer').text('Wrong Answer');
    }

    if(questionCurrent < questions.length-1){
questionCurrent++;
askQuestion();
    } else {
        // End Quiz
    $('#homePage').hide();
    $('#quizPages').hide();
    $('#myScorePage').show();
    $('#highscorePage').hide();
    }
}


var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

var setCountdownTimer=() => {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;   
        }
        document.getElementById("timer").innerHTML = time;
    }

var saveScore = () => {
    const score=currentScore;
    const initial=$('#playerInitials').val();
    var highScores = localStorage.getItem('highScores');
    highScores = highScores ? highScores.split(',') : [];
    highScores.push (initial+' - '+score);
    localStorage.setItem('highScores', highScores.toString());
    showHighscorePage();
}
var showHighscorePage = () => {
    $('#homePage').hide();
    $('#quizPages').hide();
    $('#myScorePage').hide();
    $('#highscorePage').show();
    var scoreList = $('.scoreList');
    scoreList.empty();
    var highScores = localStorage.getItem('highScores');
    highScores = highScores ? highScores.split(',') : [];
    for (let index = 0; index < highScores.length; index++) {
        var line = $('<li>');
            line.text(highScores[index]);
            scoreList.append(line);
    }
}

var resetHighscores = () => {
    var highScores = localStorage.setItem('highScores','');
    showHighscorePage();
}

var showHomepage = () => {
$('#homePage').show();
$('#quizPages').hide();
$('#myScorePage').hide();
$('#highscorePage').hide();
}