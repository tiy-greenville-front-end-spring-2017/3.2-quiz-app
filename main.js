/**
 * Quiz app
 *
 * This app shows how we can use array and object data structures in javascript
 * along with functions and for loops to build an app.
 */

(function(){
  "use strict";

  var questions = [
    {
      question: "Who is Grace Hopper?",
      choices: ['Programmer', 'Doctor', 'Veggie Lover'],
      answer: 0
    },{
      question: "Who is Batman?",
      choices: ['Greg', 'I am', 'Ryan'],
      answer: 2
    },{
      question: "Fav TV Show",
      choices: ['A-Team', 'Knight Rider', 'McGyver'],
      answer: 2
    }
  ];

  var quiz = document.getElementById('quiz');
  var questionHtml = '';

  for(var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    console.log(currentQuestion);

    questionHtml += '<div id="question-container-' + i + '">';
    questionHtml += '<h3>' + currentQuestion.question + '</h3>';

    for(var j = 0; j < currentQuestion.choices.length; j++){
      var thisChoice = currentQuestion.choices[j];
      questionHtml += '<input type="radio" name="question-' + i + '"'
                    + ' value="' + thisChoice + '"/>'
                    + '<label>' + thisChoice + '</label>';
    }

    questionHtml += '</div>';

  }

  quiz.innerHTML = questionHtml;

  var gradeButton = document.getElementById('grade');

  gradeButton.addEventListener('click', gradeQuiz);

  /**
   * This function grades the quiz
   */
  function gradeQuiz(){

    for(var i = 0; i < questions.length; i++){
      var question = questions[i];
      var answer = getUserAnswer(i);
      var correctAnswer = question.choices[question.answer];

      var isCorrect = correctAnswer === answer;

      console.log('isCorrect: ', isCorrect);
      console.log('!isCorrect: ', !isCorrect);

      // Show red if it's wrong
      if(!isCorrect){
        document.getElementById('question-container-' + i).style.backgroundColor = 'red';
      }else{
        document.getElementById('question-container-' + i).style.backgroundColor = 'green';
      }

      // var questionContainer = document.getElementById('question-container-' + i);
      // questionContainer.style.backgroundColor = isCorrect ? 'green' : 'red';

    }
  }

  function getUserAnswer(questionNumber){
    var formQuestions = document.getElementsByName('question-' + questionNumber);

    for(var i = 0; i < formQuestions.length; i++){
      if(formQuestions[i].checked){
        return formQuestions[i].value;
      }
    }
  }

}());


/**
 * Function Notes
 */

// Function decleartion
function colorMixer(color1, color2, color3){ //parameters here
  console.log('Color mixer just ran');
  var newColor = color1 + color2 + color3;

  // return a value
  return newColor;
  console.log('no worky');
}

console.log('getting ready to run');

// receive value    call function   with arguments
var paintBucket = colorMixer('FF', 'CC', '00');
console.log('paintBucket', paintBucket);

/**
 * Assertion Notes
 */
console.assert( 1 == '1' );

function add(num1, num2){
  return num1 + num2;
}

console.assert(add(5, 4) == 9 );
