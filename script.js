const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "Who composed the Brandenburg Concertos?",
    answers: ["Johann Sebastian Bach", "Antonio Vivaldi", "Georg Philipp Telemann", "George Frideric Handel"],
    correct: 0,
  },
  {
    question: "Which work is considered an opera from the Baroque period?",
    answers: ["Messiah", "The Four Seasons", "Dido and Aeneas", "St. Matthew Passion"],
    correct: 2,
  },
  {
    question: "Which of these is a typical Baroque musical genre?",
    answers: ["Symphony", "Fugue", "Nocturne", "Mazurka"],
    correct: 1,
  },
  {
    question: "Which instrument was commonly used during the Baroque era?",
    answers: ["Harpsichord", "Piano", "Saxophone", "Clarinet"],
    correct: 0,
  },
  {
    question: "What does the term 'basso continuo' refer to?",
    answers: [
      "A recurring musical theme",
      "A form of concerto",
      "A continuous bass line with chords",
      "A type of Baroque dance",
    ],
    correct: 2,
  },
];

const showQuestion = () => {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  answersElement.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer");
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.appendChild(button);
  });

  nextButton.style.display = "none";
};

const selectAnswer = (index) => {
  const question = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === question.correct) {
      button.style.backgroundColor = "#4caf50";
      button.style.color = "white";
    } else if (i === index) {
      button.style.backgroundColor = "#f44336";
      button.style.color = "white";
    }
  });

  if (index === question.correct) score++;
  nextButton.style.display = "block";
};

const showResult = () => {
  quizElement.classList.add("hidden");
  resultElement.classList.remove("hidden");
  scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
};

const restartQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  quizElement.classList.remove("hidden");
  resultElement.classList.add("hidden");
  showQuestion();
};

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

restartButton.addEventListener("click", restartQuiz);

showQuestion();
