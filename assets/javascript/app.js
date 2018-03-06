
var start;
var gameHTML;
    //for timer
var time = 120;  
    // questions that will be used during the game. 
var questions =
    ["Which presidents served during the '80's?",
    "Which war ended in the 80's?",
    "Which national holiday became celebrated in the mid-1980's?",
    "Who became the first woman to be inducted into the Rock and Roll Hall of Fame?",

    ];
    //logs questions
    console.log(questions);
    //answers to questions
var answerChoices = [
    ["Jimmy Carter and George W. Bush","Bill Clinton Jimmy Carter and George W.H. Bush","Jimmy Carter George W.H. Bush  Ronald Reagan"],
    ["The U.S. is always in war","Cold War","The War on Drugs"],
    ["The U.S. has celebrated every national holiday since the beginning of time", "Labor Day","Martin Luther King Jr. Day"],  
    ["Aretha Franklin, Blondie, Madonna"]
];
    //logs answer choices
    console.log(answerChoices);
var correctAnswers = 
    ["c. Jimmy Carter George W.H. Bush  Ronald Reagan", 
    "b. Cold War",
    "c. Martin Luther King Jr. Day",
    "a. Aretha Franklin"
];
  //logs correct answers
  console.log(correctAnswers);
var questionCounter = 0;
var selectAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
    //score set to 0

var wrongAnswers;
var intervalId;
    
    /*functions
    ==========================================================================================================================*/
    //
//start screen 
$("#StartButton").click(function () {
    $("#SplashScreen").hide();
    $("#GameCanvas").show();
    $("#submitButton").show();
});
//start game
function generateQuiz( ){

    function showQuestions() {

    }

    function showResults() {

    }
    showQuestions();

    submitButton.onclick = function(){
        showResults();
    
    }
}