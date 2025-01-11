const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const backButtons = document.querySelectorAll(".back-btn");

let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];
let currentTheme = ""; // Track the currently selected theme

const quizzes = {
  baroque: {
    title: "Baroque Music Quiz",
    questions: [
      { question: "Who composed the Brandenburg Concertos?", answers: ["Bach", "Vivaldi", "Telemann", "Handel"], correct: 0 },
      { question: "What is basso continuo?", answers: ["A recurring theme", "A bass line with chords", "A type of fugue", "A Baroque dance"], correct: 1 },
      { question: "Which instrument was commonly used during the Baroque era?", answers: ["Harpsichord", "Piano", "Saxophone", "Clarinet"], correct: 0 },
      { question: "Who composed 'The Four Seasons'?", answers: ["Bach", "Vivaldi", "Handel", "Purcell"], correct: 1 },
    ],
  },
  classical: {
    title: "Classical Music Quiz",
    questions: [
      { question: "Who is known as the 'Father of the Symphony'?", answers: ["Haydn", "Mozart", "Beethoven", "Schubert"], correct: 0 },
      { question: "What is a string quartet?", answers: ["A piano piece", "A chamber ensemble", "A full orchestra", "A choral group"], correct: 1 },
      { question: "Who composed the 'Magic Flute'?", answers: ["Beethoven", "Mozart", "Haydn", "Schubert"], correct: 1 },
      { question: "Which form is typical in classical symphonies?", answers: ["Sonata form", "Fugue", "Nocturne", "Concerto grosso"], correct: 0 },
    ],
  },
  romantic: {
    title: "Romantic Music Quiz",
    questions: [
      { question: "Who composed the 'Symphonie Fantastique'?", answers: ["Liszt", "Berlioz", "Chopin", "Mendelssohn"], correct: 1 },
      { question: "What is a leitmotif?", answers: ["A musical theme for a character", "A type of symphony", "A romantic aria", "A piano sonata"], correct: 0 },
      { question: "Who composed the opera 'Tristan und Isolde'?", answers: ["Wagner", "Verdi", "Puccini", "Brahms"], correct: 0 },
      { question: "Which composer was nicknamed 'The Poet of the Piano'?", answers: ["Liszt", "Chopin", "Schumann", "Brahms"], correct: 1 },
    ],
  },
  piano: {
    title: "Piano Music Quiz",
    questions: [
      { question: "Who composed 'Moonlight Sonata'?", answers: ["Beethoven", "Chopin", "Mozart", "Liszt"], correct: 0 },
      { question: "Which composer is famous for his Etudes?", answers: ["Chopin", "Liszt", "Beethoven", "Debussy"], correct: 0 },
      { question: "What is a piano concerto?", answers: ["A solo piano work", "A piano and orchestra work", "A choral piano piece", "A symphonic piece"], correct: 1 },
      { question: "Which composer wrote 'Clair de Lune'?", answers: ["Debussy", "Ravel", "Satie", "Liszt"], correct: 0 },
    ],
  },
};

// Start the selected quiz
const startQuiz = (theme) => {
  document.body.className = ""; // Reset body class
  document.body.classList.add(theme); // Set theme
  currentQuiz = quizzes[theme]?.questions || [];
  currentTheme = theme; // Track the current theme
  if (currentQuiz.length === 0) {
    console.error(`No questions found for the theme: ${theme}`);
    return;
  }
  quizTitle.textContent = quizzes[theme]?.title || "Music Quiz";
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
};

// Show the current question and its answers
const showQuestion = () => {
  const question = currentQuiz[currentQuestionIndex];
  questionElement.textContent = question.question;
  answersElement.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, index));
    answersElement.appendChild(button);
  });

  nextButton.style.display = "none";
};

// Handle answer selection
const selectAnswer = (selectedButton, index) => {
  const allButtons = answersElement.querySelectorAll(".btn");
  allButtons.forEach((button) => button.classList.remove("selected"));
  selectedButton.classList.add("selected");
  const question = currentQuiz[currentQuestionIndex];
  if (index === question.correct) score++;
  nextButton.style.display = "block";
};

// Move to next question or show results
const nextQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
};

// Show the final result screen
const showResult = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  document.getElementById("score").textContent = `You scored ${score} out of ${currentQuiz.length}`;
};

// Restart the quiz
const restartQuiz = () => {
  if (!currentTheme) return; // Ensure a theme is set
  resultScreen.classList.add("hidden"); // Hide the result screen
  startQuiz(currentTheme); // Restart the current theme
};

// Go back to choices and reset styles
const goToChoices = () => {
  document.body.className = ""; // Reset body class to remove any theme
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
};

// Add event listeners
backButtons.forEach((btn) => btn.addEventListener("click", goToChoices));
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
document.querySelectorAll(".start-btn").forEach((btn) =>
  btn.addEventListener("click", () => startQuiz(btn.dataset.theme))
);
