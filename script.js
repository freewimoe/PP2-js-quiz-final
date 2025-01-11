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

// Quizzes data
const quizzes = {
  baroque: {
    title: "Baroque Music Quiz",
    questions: [
      { question: "Who composed the Brandenburg Concertos?", answers: ["Bach", "Vivaldi", "Telemann", "Handel"], correct: 0 },
      { question: "What is basso continuo?", answers: ["A recurring theme", "A bass line with chords", "A type of fugue", "A Baroque dance"], correct: 1 },
      { question: "Which instrument was commonly used during the Baroque era?", answers: ["Harpsichord", "Piano", "Saxophone", "Clarinet"], correct: 0 },
      { question: "Who composed 'The Four Seasons'?", answers: ["Bach", "Vivaldi", "Handel", "Purcell"], correct: 1 },
      { question: "What does 'fugue' mean?", answers: ["Choral piece", "Contrapuntal composition", "Orchestral suite", "Dance form"], correct: 1 },
      { question: "Which Baroque composer was born in Halle?", answers: ["Handel", "Bach", "Rameau", "Scarlatti"], correct: 0 },
      { question: "What is an oratorio?", answers: ["Sacred opera", "Dance suite", "Piano sonata", "Symphony"], correct: 0 },
      { question: "Which city is associated with the Baroque style?", answers: ["Venice", "Vienna", "Paris", "London"], correct: 0 },
    ],
  },
  classical: {
    title: "Classical Music Quiz",
    questions: [
      { question: "Who is known as the 'Father of the Symphony'?", answers: ["Haydn", "Mozart", "Beethoven", "Schubert"], correct: 0 },
      { question: "What is a string quartet?", answers: ["A piano piece", "A chamber ensemble", "A full orchestra", "A choral group"], correct: 1 },
      { question: "Who composed the 'Magic Flute'?", answers: ["Beethoven", "Mozart", "Haydn", "Schubert"], correct: 1 },
      { question: "Which form is typical in classical symphonies?", answers: ["Sonata form", "Fugue", "Nocturne", "Concerto grosso"], correct: 0 },
      { question: "Which composer went deaf later in life?", answers: ["Beethoven", "Mozart", "Schubert", "Haydn"], correct: 0 },
      { question: "What is a cadenza?", answers: ["A solo passage", "An orchestral movement", "A dance form", "A choral interlude"], correct: 0 },
      { question: "Who composed 'Eine kleine Nachtmusik'?", answers: ["Mozart", "Beethoven", "Schubert", "Haydn"], correct: 0 },
      { question: "Which instrument gained popularity during the Classical period?", answers: ["Piano", "Harpsichord", "Organ", "Lute"], correct: 0 },
    ],
  },
  romantic: {
    title: "Romantic Music Quiz",
    questions: [
      { question: "Who composed the 'Symphonie Fantastique'?", answers: ["Liszt", "Berlioz", "Chopin", "Mendelssohn"], correct: 1 },
      { question: "What is a leitmotif?", answers: ["A musical theme for a character", "A type of symphony", "A romantic aria", "A piano sonata"], correct: 0 },
      { question: "Who composed the opera 'Tristan und Isolde'?", answers: ["Wagner", "Verdi", "Puccini", "Brahms"], correct: 0 },
      { question: "Which composer was nicknamed 'The Poet of the Piano'?", answers: ["Liszt", "Chopin", "Schumann", "Brahms"], correct: 1 },
      { question: "What is a symphonic poem?", answers: ["An orchestral work", "A piano sonata", "A choral piece", "A folk song"], correct: 0 },
      { question: "Who composed the 'Hungarian Rhapsodies'?", answers: ["Liszt", "Brahms", "Mendelssohn", "Tchaikovsky"], correct: 0 },
      { question: "What is Rubato?", answers: ["Flexible tempo", "Fixed rhythm", "Musical key change", "Choral interlude"], correct: 0 },
      { question: "Which composer wrote the 'New World Symphony'?", answers: ["Dvořák", "Brahms", "Mendelssohn", "Tchaikovsky"], correct: 0 },
    ],
  },
  piano: {
    title: "Piano Music Quiz",
    questions: [
      { question: "Who composed 'Moonlight Sonata'?", answers: ["Beethoven", "Chopin", "Mozart", "Liszt"], correct: 0 },
      { question: "Which composer is famous for his Etudes?", answers: ["Chopin", "Liszt", "Beethoven", "Debussy"], correct: 0 },
      { question: "What is a piano concerto?", answers: ["A solo piano work", "A piano and orchestra work", "A choral piano piece", "A symphonic piece"], correct: 1 },
      { question: "Which composer wrote 'Clair de Lune'?", answers: ["Debussy", "Ravel", "Satie", "Liszt"], correct: 0 },
      { question: "What does 'forte' mean?", answers: ["Loud", "Soft", "Fast", "Slow"], correct: 0 },
      { question: "Who composed 'Rhapsody in Blue'?", answers: ["Gershwin", "Ravel", "Debussy", "Chopin"], correct: 0 },
      { question: "What is a sonata?", answers: ["A solo instrumental piece", "A choral piece", "A symphony", "A dance"], correct: 0 },
      { question: "Which composer wrote 'The Well-Tempered Clavier'?", answers: ["Bach", "Beethoven", "Mozart", "Chopin"], correct: 0 },
    ],
  },
};

// Start the selected quiz
const startQuiz = (theme) => {
  document.body.className = theme;
  currentQuiz = quizzes[theme]?.questions; // Safe access to prevent errors
  if (!currentQuiz || currentQuiz.length === 0) {
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

// Handle answer selection
const selectAnswer = (index) => {
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

// Show result screen
const showResult = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  document.getElementById("score").textContent = `You scored ${score} out of ${currentQuiz.length}`;
};

// Event listeners for back buttons and restart
backButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  })
);

nextButton.addEventListener("click", nextQuestion);
document.querySelectorAll(".start-btn").forEach((btn) =>
  btn.addEventListener("click", () => startQuiz(btn.dataset.theme))
);
