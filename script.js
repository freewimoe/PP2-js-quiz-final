const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];

const quizzes = {
  baroque: {
    title: "Baroque Music Quiz",
    questions: [
      {
        question: "Who composed the Brandenburg Concertos?",
        answers: ["Bach", "Vivaldi", "Telemann", "Handel"],
        correct: 0,
      },
      {
        question: "What is basso continuo?",
        answers: [
          "A recurring theme",
          "A bass line with chords",
          "A type of fugue",
          "A Baroque dance",
        ],
        correct: 1,
      },
    ],
  },
  classical: {
    title: "Classical Music Quiz",
    questions: [
      {
        question: "Who is known as the 'Father of the Symphony'?",
        answers: ["Haydn", "Mozart", "Beethoven", "Schubert"],
        correct: 0,
      },
      {
        question: "What is a string quartet?",
        answers: [
          "A piano piece",
          "A group of four singers",
          "A chamber music ensemble",
          "A full orchestra",
        ],
        correct: 2,
      },
    ],
  },
  romantic: {
    title: "Romantic Music Quiz",
    questions: [
      {
        question: "Who composed the 'Symphonie Fantastique'?",
        answers: ["Liszt", "Berlioz", "Chopin", "Mendelssohn"],
        correct: 1,
      },
      {
        question: "What is a leitmotif?",
        answers: [
          "A musical theme for a character or idea",
          "A type of symphony",
          "A romantic aria",
          "A piano sonata",
        ],
        correct: 0,
      },
    ],
  },
};

const startQuiz = (theme) => {
  document.body.className = theme;
  currentQuiz = quizzes[theme].questions;
  quizTitle.textContent = quizzes[theme].title;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
};

const showQuestion = () => {
  const question = currentQuiz[currentQuestionIndex];
  questionElement.textContent = question.question;
  answersElement.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.appendChild(button);
  });

  nextButton.style.display = "none";
};

const selectAnswer = (index) => {
  const question = currentQuiz[currentQuestionIndex];
  if (index === question.correct) score++;
  nextButton.style.display = "block";
};

const nextQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
};

const showResult = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  document.getElementById("score").textContent = `You scored ${score} out of ${currentQuiz.length}`;
};

const restartQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
};

document.querySelectorAll(".start-btn").forEach((btn) =>
  btn.addEventListener("click", () => startQuiz(btn.dataset.theme))
);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
