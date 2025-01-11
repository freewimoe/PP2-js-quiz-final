const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const backButtons = document.querySelectorAll(".back-btn");

let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];

// Quizzes data (unchanged, truncated for brevity)
const quizzes = {
  baroque: { title: "Baroque Music Quiz", questions: [/* questions here */] },
  classical: { title: "Classical Music Quiz", questions: [/* questions here */] },
  romantic: { title: "Romantic Music Quiz", questions: [/* questions here */] },
  piano: { title: "Piano Music Quiz", questions: [/* questions here */] },
};

// Start the selected quiz
const startQuiz = (theme) => {
  document.body.className = theme;
  currentQuiz = quizzes[theme].questions;
  quizTitle.textContent = quizzes[theme].title;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
};

// Show a question
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

// Select an answer
const selectAnswer = (index) => {
  const question = currentQuiz[currentQuestionIndex];
  if (index === question.correct) score++;
  nextButton.style.display = "block";
};

// Show results
const showResult = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  document.getElementById("score").textContent = `You scored ${score} out of ${currentQuiz.length}`;
};

// Restart the quiz
const restartQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
};

// Back to choices
backButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  })
);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
});

document.querySelectorAll(".start-btn").forEach((btn) =>
  btn.addEventListener("click", () => startQuiz(btn.dataset.theme))
);
