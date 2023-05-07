const questions = [
  {
    question: "How anxious do you feel in the classroom?",
    options: [
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
   },
   {
    question:"How anxious do you feel about participating in class discussions?",
    options: [
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
   },
   {
    question:"How anxious do you feel about giving presentations in front of the class?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
   },
   {
    question:"How anxious do you feel about asking the teacher a question during class?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
   },
   {
    question:"How anxious do you feel about taking tests or exams?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
   },
   {
    question:"How anxious do you feel about working in groups with your classmates?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
   },
   {
    question:"How anxious do you feel about being called on to answer a question in class?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
   },
   {
   question:"How anxious do you feel about being late to class or missing a class?",
   options:[
    "Not at all",
      "A little",
      "Somewhat",
      "Very much",
   ]
  },
  {
    question:"How anxious do you feel about receiving feedback on your work from the teacher?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about being evaluated by your peers or classmates",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about trying new activities or assignments in class",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about being interrupted by other students during class?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about being called on to read aloud in class?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about being observed by the teacher during an activity or assignment?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
  question:"How anxious do you feel about being put on the spot by the teacher?",
  options:[
    "Not at all",
      "A little",
      "Somewhat",
      "Very much",
  ]
  },
  {
    question:"How anxious do you feel about being corrected by the teacher in front of the class",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about asking for help from the teacher or a classmate?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about having to present a project to the class?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about being asked to work independently without assistance?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
  {
    question:"How anxious do you feel about being compared to your classmates by the teacher?",
    options:[
      "Not at all",
      "A little",
      "Somewhat",
      "Very much",
    ]
  },
];

const quizContainer = document.querySelector("#quiz-container");
const questionContainer = quizContainer.querySelector(".questions");
const optionElements = quizContainer.querySelectorAll(".option span");
const nextButton = quizContainer.querySelector(".next");
const statElement = quizContainer.querySelector("#stat");

const scoreboard = document.querySelector("#scoreboard");
const scoreTitleElement = scoreboard.querySelector("#score-title");
const scoreElement = scoreboard.querySelector("#score");

const answerBank = document.querySelector("#answerBank");
const answerList = answerBank.querySelector("#answers");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
  document.title = "Classroom Anxiety Measure - " + question.question;

  const questionElement = questionContainer.querySelector("#question");
  questionElement.textContent = question.question;

  const optionElements = questionContainer.querySelectorAll(".option span");
  optionElements.forEach(function (optionElement, index) {
    optionElement.textContent = question.options[index];
  });

  const currentQuestionNumber = currentQuestionIndex + 1;
  statElement.textContent = "Question " + currentQuestionNumber + " of " + questions.length;

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  nextButton.textContent = isLastQuestion ? "Submit" : "Next";
}

function showScore(score) {
  scoreTitleElement.textContent = "Your Anxiety Score";
  scoreElement.textContent = score;
  scoreboard.style.display = "block";
}

function backToQuiz() {
  answerBank.style.display = "none";
  scoreboard.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(questions[currentQuestionIndex]);
}

// function checkAnswer() {
//   answerList.innerHTML = "";
//   questions.forEach(function (question, index) {
//     const answer = question.options[0];
//     const answerIndex = "ABCD"[question.options.indexOf(answer)];
//     const listItem = document.createElement("li");
//     listItem.textContent = "Question " + (index + 1) + ": " + answerIndex;
//     answerList.appendChild(listItem);
//   });
//   answerBank.style.display = "block";
// }

function calcScore(selectedOption) {
  const selectedOptionIndex = Array.from(optionElements).indexOf(selectedOption);
  const point = selectedOptionIndex;
  score += point;
}

showQuestion(questions[currentQuestionIndex]);

nextButton.addEventListener("click", function () {
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  if (isLastQuestion) {
    showScore(score);
  } else {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  }
});  