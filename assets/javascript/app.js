
$(document).ready(function () {
//click start button to start game
$("#startButton").click(function () {
  $("#splashScreen").hide();
  $("gameScreen").show();
  console.log("hi");
});

    //sumbits quiz
    function submitQuiz() {
      console.log('submited');

    function answerScore (qName) {
      var radiosNo = document.getElementsByName(qName);

      for (var i = 0, length  = radiosNo.length; i < length; i++) {
        if (radiosNo[i.checked]) {
          var answerValue = Number(radiosNo)[i].value;
        }
      }
      if(isNaN(answerValue)) {
        answerValue === 0;
      }
      return answerValue;
    }
      var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') +answerScore('q4'));
        console.log("calcScore: " + calcScore);
    
    // function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');

  });
});
});
