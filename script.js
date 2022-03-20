// Setting up navigation
$('#homePage').show();
$('#quizPages').hide();
$('#myScorePage').hide();
$('#highscorePage').hide();

// View High Score Button - Goes to Highscore Page
$('.btn-highscore').click(() => {
    $('#homePage').hide();
    $('#quizPages').hide();
    $('#myScorePage').hide();
    $('#highscorePage').show();
});

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
    answerOptionss: ['option1','option2','option3','option4'],
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

var startQuiz = () => {
    $('#homePage').hide();
    $('#quizPages').show();
    $('#myScorePage').hide();
    $('#highscorePage').hide();
    questionCurrent = 0;

}

var askQuestion = () => {
$('.questionHeader').val(questions[questionCurrent].question);
$('answerOptions').empty();
questions[questionCurrent].array.forEach(element => {
    $('answerOptions').append('<button type="button" class="btn btn-primary">' + element + '</button>');
});
}

var chosenAnswer = (element) => {

}